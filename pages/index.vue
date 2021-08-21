<template>
  <div>
    <div class="container">
      <div class="header text-center">
        <h1 class="title">MrTheBank</h1>
        <p v-html="$t('index.subtitle')"></p>
        <NuxtLink :to="localePath('invite')" target="_blank" class="btn btn-primary btn-lg btn-rounded fs-5 px-5 me-lg-2">{{ $t('index.invite') }}</NuxtLink>
        <NuxtLink :to="localePath('commands')" class="btn btn-info btn-lg btn-rounded fs-5 px-5 mt-2 mt-sm-0 ms-lg-2">{{ $t('index.commands') }}</NuxtLink>
      </div>
      <div class="about">
        <h1 class="text-center">{{ $t('index.about_title') }}</h1>
        <h5 class="text-center">{{ $t('index.about_desc') }}</h5>
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12 col-md-6 card-center">
                <div class="icon">
                  <i class="fas fa-user-astronaut fa-3x"></i>
                </div>
                <div class="content">
                  <h5>{{ $t('index.about.cmds_easier') }}</h5>
                  <p>{{ $t('index.about.cmds_easier_desc') }}</p>
                </div>
              </div>
              <div class="col-12 col-md-6 card-center">
                <div class="icon">
                  <i class="far fa-smile-beam fa-3x"></i>
                </div>
                <div class="content">
                  <h5>{{ $t('index.about.meme_generate') }}</h5>
                  <p>{{ $t('index.about.meme_generate_desc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  head() {
    return {
      title: this.$t('title.home')
    }
  },
}
</script>

<style scoped>
.header {
  padding: 30px 0;
}
.header .title {
  font-size: 3.5rem;
  font-weight: bold;
  color: black;
}
.header p {
  font-size: 1.5rem;
}
.about {
  padding: 80px 0;
}
.about .card {
  margin: 0 auto;
  padding: 20px;
  max-width: 800px;
}
.about .card-center {
  display: flex;
  align-items: center;
}
.about .icon {
  min-width: 64px;
}
.about .content p {
  font-size: 14px;
}

.dark-mode .header .title {
  color: #fff;
}
@media screen and (min-width: 992px) {
  .header {
    padding: 80px;
  }
  .header .title {
    font-size: 5.5rem;
  }
  .header p {
    font-size: 2.25rem;
  }
  .about {
    padding: 120px 0;
  }
}
</style>
