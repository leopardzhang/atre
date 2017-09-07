<template>
   <div>
      <header />
      <transition enter-active-class="animated fadeIn">
         <router-view></router-view>
      </transition>
      <footer />
   </div>
</template>

<script type="text/ecmascript-6">
import Header from './components/header/header.vue'
import Footer from './components/footer/footer.vue'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
     'header': Header,
     'footer': Footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
