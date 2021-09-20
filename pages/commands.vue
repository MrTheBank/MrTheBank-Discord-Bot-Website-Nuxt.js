<template>
  <div>
    <div class="container">
      <div class="command-header row">
        <div class="col-12 col-lg-9 order-1 order-lg-0">
          <ul>
            <li><a v-bind:class="btn_active('all')" @click="changeActive('all')">{{ $t('commands.all') }}</a></li>
            <li v-for="(category, key) in data.category"><a v-bind:class="btn_active(key)" @click="changeActive(key)">{{ category.category_name }}</a></li>
          </ul>
        </div>
        <div class="col-12 col-lg-3 order-0 order-lg-1 d-flex align-items-center pb-2 pb-lg-0">
          <i class="fas fa-search"></i>
          <input type="text" class="form-control border-0 shadow-0" v-bind:placeholder="$t('commands.search')" @input="search" aria-label="search" aria-describedby="search"/>
        </div>
      </div>
      <div class="command-body">
        <h1 v-if="Object.keys(query).length === 0 && query.constructor === Object">{{ $t('commands.not_found') }}</h1>
        <VCommandItem v-for="(command, key) in query" :key="key" v-bind:command="command.command" v-bind:query="command.query" v-bind:description="command.description" v-bind:permissions="command.permissions"></VCommandItem>
      </div>
    </div>
  </div>
</template>

<script>
import VCommandItem from "../components/V-CommandItem";

export default {
  name: "commands",
  components: {VCommandItem},
  data() {
    return {
      data: {},
      items: {},
      query: {},
      active: 'all',
    }
  },
  head() {
    return {
      title: this.$t('title.commands'),
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'MrTheBank Discord Bot - Commands'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: process.env.BASE_URL + '/commands'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Commands for your discord server.'
        },
      ]
    }
  },
  methods: {
    async getData() {
      this.data = await this.$axios.$get('https://static.maxnus.com/mrthebank-discord/commands-' + this.$i18n.locale + '.json');
      this.defaultItem();
    },
    changeActive(category) {
      this.query = {};
      if (category === 'all') {
        this.defaultItem();
      } else {
        Object.entries(this.data.category[category]).forEach(value => {
          if (value[0] !== 'category_name' && value[0] !== 'emoji') {
            Object.assign(this.query, {[value[0]]: value[1]})
          }
        });
      }
      this.active = category;
    },
    defaultItem() {
      this.query = {};
      Object.values(this.data.category).forEach(category => {
        Object.entries(category).forEach(value => {
          if (value[0] !== 'category_name' && value[0] !== 'emoji') {
            Object.assign(this.query, { [value[0]]:value[1] })
          }
        });
      });
    },
    btn_active(category) {
      return this.active === category ? 'active' : '';
    },
    search(event) {
      this.query = {};
      Object.values(this.data.category).forEach(category => {
        Object.entries(category).forEach(value => {
          if ((value[0] !== 'category_name' && value[0] !== 'emoji') && value[0].startsWith(event.target.value)) {
            Object.assign(this.query, { [value[0]]:value[1] })
          }
        });
      });
    }
  },
  mounted() {
    this.getData();
  }
}
</script>

<style scoped>
.command-header {
  margin: 24px auto;
}
.command-header a {
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
  color: rgba(0,0,0,.55);
}
.command-header a:hover, .command-header .active {
  color: black;
}
.command-header ul {
  margin: 0;
  list-style: none;
}
.command-header ul li {
  display: inline-block;
  padding-right: 20px;
}
.command-header ul li a {
  cursor: pointer;
  font-size: 24px;
}
.command-header input {
  font-size: 20px;
}
.command-body {
  margin: 24px;
}

.dark-mode .command-header a {
  color: #b3b3b3 !important;
}
.dark-mode .command-header a:hover, .dark-mode .command-header .active {
  color: #fff !important;
}

@media screen and (max-width: 576px) {
  .command-header, .command-body {
    margin: 12px;
  }
  .command-header ul {
    padding-left: 0;
  }
  .command-header ul li a {
    font-size: 20px;
  }
}
</style>
