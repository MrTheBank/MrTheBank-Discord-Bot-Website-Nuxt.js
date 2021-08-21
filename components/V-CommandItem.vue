<template>
  <div class="card" @click="show=!show">
    <div class="card-body">
      <div class="header d-flex align-items-center">
        <i class="fas fa-chevron-right" v-bind:class="show?'rotate':''"></i>
        <p class="command mb-0">+{{ command }}</p>
        <p class="query font-weight-light mb-0 opacity-50" v-if="query">[{{ query }}]</p>
      </div>
      <div class="content" v-bind:class="show?'show':''">
        <p class="description">{{ description }}</p>
        <div class="permissions d-flex">
          <p class="font-weight-light mb-0 opacity-70 me-1">{{ $t('commands.required_permissions') }}:</p>
          <p class="font-weight-light mb-0 text-info">{{ permissions?permissions:$t('commands.none') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "V-CommandItem",
  props: ['command', 'query', 'description', 'permissions'],
  data() {
    return {
      show: false,
    }
  },
}
</script>

<style scoped>
.card {
  cursor: pointer;
  margin-bottom: 20px;
}
.card-body {
  padding: 10px 40px;
}
.header {
  height: 2rem;
}
.header i {
  font-size: 1.125rem;
  margin-right: 10px;
  transition: all 0.4s ease;
}
.header .rotate {
  transform: rotateZ(90deg);
}
.header .command {
  margin-right: 10px;
  height: 1.75rem;
  line-height: 1.5rem;
  font-size: 1.75rem;
}
.header .query {
  line-height: 1.25rem;
  font-size: 1.25rem;
}
.content {
  display: none;
}
.content.show {
  display: block;
}
.content .description {
  margin: 10px 0;
  font-size: 1.25rem;
}

@media screen and (max-width: 576px) {
  .card-body {
    padding: 10px 20px;
  }
  .header {
    height: 1.5rem;
  }
  .header i {
    font-size: 0.625rem;
  }
  .header .command {
    height: 1.25rem;
    line-height: 1rem;
    font-size: 1.25rem;
  }
  .header .query {
    line-height: 0.75rem;
    font-size: 0.75rem;
  }
  .content .description {
    margin: 10px 0;
    font-size: 0.875rem;
  }
  .content .permissions {
    font-size: 0.875rem;
  }
}
</style>
