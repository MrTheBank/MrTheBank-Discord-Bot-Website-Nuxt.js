<template>
  <div style="font-family: 'Kanit', sans-serif;">
    <VHeader></VHeader>
    <Nuxt/>
    <VFooter></VFooter>
  </div>
</template>

<script>
import VHeader from "../components/V-Header";
import VFooter from "../components/V-Footer";
export default {
  name: "default",
  components: {VFooter, VHeader},
  data() {
    return {
      tooltip: null,
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      link: [
        { rel: 'stylesheet', href: '/assets/css/mdb.'+ this.$colorMode.value +'.min.css' },
      ],
    }
  },
  mounted() {
    if (process.client) {
      window.addEventListener('load', () => {
        let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-mdb-toggle="tooltip"]')), mdb = this.mdb;
        this.tooltip = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new mdb.Tooltip(tooltipTriggerEl);
        })
      })
    }
  }
}
</script>
