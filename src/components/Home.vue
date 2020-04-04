<template>
  <div class="home unselectable">
    <div class="row mt-5">
      <h1 class="text-left m-2">
        Aleksandra <br/>
        Ewa <br/>
        Nowak
      </h1>
    </div>

    <div class="row mt-5">
      <div class="col">
        <div class="m-2">
          <home-button v-for="btn in svgButtons" :key="btn.id" :id="btn.id" :content="btn.icon" @homeButtonClicked="goToPage"/>
        </div>        
      </div>      
    </div>
  </div>
</template>

<script>
let a  =require('./../assets/bio.svg');
console.log(a)


import HomeButton from "./HomeButton"

export default {
  name: 'Home',
  data: function() {
    return {
      svgButtons: [
        { id:"bio", icon: require('./../assets/bio.svg') },
        { id:"works", icon: require('./../assets/works.svg') },
      ]
    }
  },
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
