<template>
  <div class="home unselectable">
    <div class="row">
      <h1 class="text-left m-2">
        Aleksandra <br/>
        Ewa <br/>
        Nowak
      </h1>
    </div>

    <div class="row mt-5">
      <div class="col">
        <div class="m-2">
          <home-button content="Works" id="works" @homeButtonClicked="goToPage"/>
          <home-button content="Bio" id="bio" @homeButtonClicked="goToPage"/>
        </div>        
      </div>      
    </div>
  </div>
</template>

<script>

import HomeButton from "./HomeButton"

export default {
  name: 'Home',
  methods: {
    goToPage: function(id) {
      console.log("go to", id)
      this.$router.push({name: id})
    }
  },
  props: {
    msg: String
  },
  components: {
    HomeButton
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../scss/variables.scss";

h1 {
  font-family: $font-header;
}
</style>
