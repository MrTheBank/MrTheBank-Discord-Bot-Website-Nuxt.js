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
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: process.env.baseUrl
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: process.env.baseUrl + '/uploads/official/mrthebank.png'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'MrTheBank Discord Bot - A multi-purpose bot for your discord server.'
        },
      ]
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
