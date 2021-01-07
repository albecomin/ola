<template>
  <div id="app">
    <NavBar class="fixed-top"
    v-if="this.$route.path !== '/'"></NavBar>
    <b-container style="margin-top: 96px;">
      <b-row>
        <b-col>
          <transition name="fade" mode="out-in">
            <router-view/>
          </transition>          
        </b-col>
      </b-row>
    </b-container>    
  </div>
</template>

<style lang="scss">
.fade-enter-active {
  transition: opacity .8s;
}
.fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>