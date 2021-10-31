<template>
  <footer class="footer text-center text-lg-start">
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-10 col-md-12 col-sm-12 mb-2 mb-md-0">
          <h5 class="text-uppercase font-weight-bold">MrTheBank Discord Bot</h5>
          <div class="d-flex align-items-lg-start flex-column">
            <p>{{ $t('footer.desc') }}</p>
            <p class="mt-auto mb-0"><a href="mailto:webmaster@maxnus.com">webmaster@maxnus.com</a></p>
          </div>
        </div>
        <div class="col-lg-2 col-md-12 col-sm-12 mb-2 mb-md-0">
          <h5 class="text-uppercase font-weight-bold">{{ $t('footer.links') }}</h5>
          <ul class="list-unstyled mb-0">
            <li v-for="(link, key) in $t('footer.link1')">
              <NuxtLink :to="localePath(key)">{{ link }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom text-center p-3">
      Copyright &copy; 2021 <NuxtLink :to="localePath('/')"><u>MrTheBank Discord Bot</u></NuxtLink>. All right reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: "V-Footer"
}
</script>

<style scoped>
.footer {
  background-color: #2b2b2b;
}
.footer a {
  color: #fff !important;
}
.footer .footer-bottom {
  background-color: #262626;
}
</style>
