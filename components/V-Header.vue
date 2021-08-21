<template>
  <div>
    <nav v-bind:class="'header navbar-'+$colorMode.value">
      <div class="container-lg">
        <div class="logo">
          <NuxtLink :to="localePath('index')">
            <img src="/uploads/official/mrthebank.png" class="img-circle" alt="">
            <div class="text">
              <div class="text-title">MrTheBank</div>
              <div class="text-subtitle">Discord Bot</div>
            </div>
          </NuxtLink>
        </div>
        <div class="menu">
          <div class="upper-menu">
            <div class="submenu language-menu">
              <ul>
                <li v-for="locale in Locales" :key="locale.code"><NuxtLink :to="switchLocalePath(locale.code)"><i v-bind:class="'flag flag-'+locale.flag"></i> {{ locale.name }}</NuxtLink></li>
              </ul>
            </div>
            <div class="submenu template-menu">
              <ul>
                <li v-for="style in templates" :key="style.template"><a data-mdb-placement="bottom" data-mdb-toggle="tooltip" v-bind:title="$t('title.'+style.template)" v-bind:class="$colorMode.value===style.template?'active':''" @click="$colorMode.preference=style.template"><i v-bind:class="$colorMode.value===style.template?'fas'+' fa-'+style.icon:'far'+' fa-'+style.icon"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="lower-menu">
            <ul class="navbar-nav">
              <li class="nav-item" v-for="link in nav_items" :key="link.path">
                <NuxtLink class="nav-link" :to="localePath(link.path)"><i v-bind:class="link.icon"></i> {{ $t(link.name) }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="sidenav-toggle">
          <button @click="sidenav=!sidenav"><i class="fas fa-bars"></i></button>
        </div>
      </div>
    </nav>
    <nav class="sidenav-menu" v-bind:class="{open: sidenav}">
      <div class="sidenav-header">
        <div class="language-menu">
          <ul>
            <li v-for="locale in Locales" :key="locale.code"><NuxtLink :to="switchLocalePath(locale.code)"><i v-bind:class="'flag flag-'+locale.flag"></i> {{ locale.name }}</NuxtLink></li>
          </ul>
        </div>
        <div class="sidenav-close">
          <button @click="sidenav=!sidenav"><i class="fa fa-times-thin fa-3x"></i></button>
        </div>
      </div>
      <div class="sidenav-body">
        <div class="main-block">
          <ul>
            <li v-for="link in nav_items" :key="link.path" @click="sidenav=!sidenav">
              <NuxtLink :to="localePath(link.path)"><i v-bind:class="link.icon"></i> {{ $t(link.name) }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="theme-block">
          <ul>
            <li v-for="style in templates" :key="style.template" style="cursor: pointer"><a v-bind:class="$colorMode.value===style.template?'active':''" @click="$colorMode.preference=style.template"><i v-bind:class="$colorMode.value===style.template?'fas'+' fa-'+style.icon:'far'+' fa-'+style.icon"></i> {{ $t('title.'+style.template) }}</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="sidenav-menu-helper" @click="sidenav=!sidenav"></div>
  </div>
</template>

<script>
export default {
  name: "V-Header",
  data() {
    return {
      sidenav: false,
      nav_items: {
        home: {
          path: 'index',
          icon: 'fas fa-home',
          name: 'title.home'
        },
        commands: {
          path: 'commands',
          icon: 'fas fa-keyboard',
          name: 'title.commands'
        },
        support: {
          path: 'support',
          icon: 'fas fa-question-circle',
          name: 'title.support'
        }
      },
      templates: {
        light: {
          template: 'light',
          icon: 'lightbulb'
        },
        dark: {
          template: 'dark',
          icon: 'moon'
        },
      }
    }
  },
  computed: {
    Locales() {
      return this.$i18n.locales;
    }
  },
  mounted() {
    window.onresize = () => {
      if (window.innerWidth > 992 && this.sidenav) {
        this.sidenav = false;
      }
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  position: relative;
  background-color: #EEEEEE;
  box-shadow: 0 10px 20px 0 rgba(0,0,0,.05);
}
.header .logo {
  height: 60px;
  width: 80%;
  float: left;
  display: flex;
}
.header .logo img {
  margin: 5px 5px 5px 0;
  height: 50px;
  width: 50px;
  float: left;
}
.header .logo .text {
  margin-top: 12px;
  float: right;
  color: black;
  justify-content: center;
}
.header .logo .text .text-title {
  font-size: 22px;
  font-weight: bolder;
  line-height: 80%;
}
.header .logo .text .text-subtitle {
  font-size: 18px;
}
.header .sidenav-toggle {
  width: 20%;
  height: 60px;
  display: inline-block;
  float: right;
}
.header .sidenav-toggle button {
  margin: 10px 0;
  font-size: 1.5rem;
  float: right;
  border: none;
  background: none;
  color: inherit;
}
.header .menu {
  display: none;
}
.sidenav-menu {
  transform: translateX(100%);
  background-color: #EEEEEE;
  position: fixed;
  display: block;
  width: 100%;
  z-index: 11;
  top: 0;
  bottom: 0;
  right: 0;
  left: auto;
  max-width: 380px;
  overflow: hidden;
  transition: transform 500ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 500ms cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform;
}
.sidenav-menu.open {
  transform: translateX(0);
}
.sidenav-menu a {
  font-size: 16px;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
  color: rgba(0,0,0,.55);
}
.sidenav-menu a:hover, .sidenav-menu .active {
  color: black;
}
.sidenav-menu .sidenav-header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-color: rgba(255,255,255,0.75);
  border-bottom-style: solid;
  border-bottom-width: 1px;
}
.sidenav-menu .sidenav-header .language-menu {
  padding: 10px 0 10px 30px;
  width: 100%;
  display: flex;
}
.sidenav-menu .sidenav-header .language-menu ul {
  margin: 0;
  padding: 0;
  display: inline-block;
  list-style: none;
}
.sidenav-menu .sidenav-header .language-menu ul li {
  display: inline-block;
  padding-right: 10px;
}
.sidenav-menu .sidenav-header .sidenav-close {
  height: 100%;
  width: 60px;
  max-width: 60px;
}
.sidenav-menu .sidenav-header .sidenav-close button {
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  color: inherit;
}
.sidenav-menu .sidenav-body {
  height: 100%;
}
.sidenav-menu .sidenav-body .main-block {
  padding: 15px 0;
}
.sidenav-menu .sidenav-body .main-block ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.sidenav-menu .sidenav-body .main-block ul li {
  padding: 5px 30px;
}
.sidenav-menu .sidenav-body .main-block {
  border-bottom-color: rgba(255,255,255,0.75);
  border-bottom-style: solid;
  border-bottom-width: 1px;
}
.sidenav-menu .sidenav-body .theme-block {
  padding: 15px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}
.sidenav-menu .sidenav-body .theme-block ul {
  margin: 0;
  padding: 0;
  display: inline-block;
  list-style: none;
}
.sidenav-menu .sidenav-body .theme-block ul li {
  display: inline-block;
  padding-right: 10px;
}
.sidenav-menu-helper {
  position: fixed;
  top: 0;
  display: none;
  width: 100%;
  height: 100%;
  z-index: 10;
}
.sidenav-menu.open+.sidenav-menu-helper {
  display: block;
}

/*  DARK MODE  */
.dark-mode .header, .dark-mode .sidenav-menu {
  background-color: #262626;
}
.dark-mode .header .logo .text {
  color: #fff;
}
.dark-mode .header .sidenav-toggle button, .dark-mode .sidenav-menu .sidenav-header .sidenav-close button {
  color: #fff;
  background-color: transparent;
}
.dark-mode .sidenav-menu a {
  color: #b3b3b3 !important;
}
.dark-mode .sidenav-menu a:hover, .dark-mode .sidenav-menu .active {
  color: #fff !important;
}

/* Desktop Screen */
@media screen and (min-width: 992px) {
  .header .logo {
    height: 100px;
    width: 30%;
  }
  .header .logo img {
    margin: 10px 10px 10px 0;
    height: 80px;
    width: 80px;
  }
  .header .logo .text {
    margin-top: 25px;
  }
  .header .logo .text .text-title {
    font-size: 32px;
    font-weight: bolder;
    line-height: 80%;
  }
  .header .logo .text .text-subtitle {
    font-size: 24px;
  }
  .header .menu {
    width: 70%;
    display: inline-block !important;
    float: right;
  }
  .header .menu .upper-menu {
    height: 35px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .header .menu .upper-menu .submenu {
    display: inline-block;
    height: 100%;
    background-color: white;
  }
  .header .menu .upper-menu .submenu ul {
    margin: 0;
    padding: 0 10px;
    display: inline-block;
    list-style: none;
  }
  .header .menu .upper-menu .submenu ul li {
    display: inline-block;
    height: 35px;
    padding: 0 10px;
  }
  .header .menu .upper-menu .submenu ul li a {
    font-size: 16px;
    line-height: 35px;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
    color: rgba(0,0,0,.55);
  }
  .header .menu .upper-menu .submenu ul li a:hover {
    color: black;
  }
  .header .menu .upper-menu .language-menu {
    background-color: white;
  }
  .header .menu .upper-menu .language-menu a {
    color: #b3b3b3 !important;
  }
  .header .menu .upper-menu .language-menu .active, .header .menu .upper-menu .language-menu a:hover {
    color: black !important;
  }
  .header .menu .upper-menu .template-menu .active, .header .menu .upper-menu .template-menu a:hover {
    color: white !important;
  }
  .header .menu .upper-menu .template-menu {
    background-color: black;
  }
  .header .menu .upper-menu .template-menu a {
    color: #b3b3b3 !important;
    cursor: pointer;
  }
  .header .menu .lower-menu {
    height: 65px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .header .menu .lower-menu .navbar-nav {
    flex-direction: unset;
  }
  .header .menu .lower-menu .navbar-nav .nav-item {
    padding: 0 10px;
  }
  .header .sidenav-toggle {
    display: none;
  }
  .sidenav-menu {
    display: none;
  }

  /* Dark Mode */

  .dark-mode .header .logo .text {
    color: #fff;
  }
  .dark-mode .header .menu .upper-menu .language-menu {
    background-color: #333333;
  }
  .dark-mode .header .menu .upper-menu .language-menu .active, .dark-mode .header .menu .upper-menu .language-menu a:hover {
    color: white !important;
  }
}
</style>
