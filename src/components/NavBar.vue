<template>
  <b-container id="navbar" 
  :class="{'bg-secondary': scrollPosition > 0}">
    <b-row>
      <b-col cols=12>
        <div align="center" id="navbar__home">
          <router-link to="/" tag="div">Aleksandra <br> Ewa <br> Nowak</router-link>  
        </div>    
      </b-col>      
    </b-row>
    <b-row id="navbar_row" class="justify-content-md-center text-primary">
      <b-col cols="4" md="auto" align="center"
        :class="{'current': this.$route.path === '/bio'}">
        <router-link to="/bio" tag="div" class="navbar_link">Bio</router-link>
      </b-col>
      <b-col cols="4" md="auto" align="center"
      :class="{'current': this.$route.path === '/works'}">
        <router-link to="/works" tag="div" class="navbar_link">Works</router-link>
      </b-col>
      <b-col cols="4" md="auto" align="center"
      :class="{'current': this.$route.path === '/about'}">
        <router-link to="/about" tag="div" class="navbar_link">About</router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'NavBar',
  data: function () {
    return {
      scrollPosition: null
    }
  },
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
      //  console.log("SCROLL", this.scrollPosition)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navbar {
  font-size: 18px;
  user-select: none;
  transition: background 0.2s;
}
#navbar__home {
  font-weight: bold;
  font-size: 12px;
  line-height: 1.2em;
  padding: 0.6em;
  opacity: 0.6;
}
#navbar__home:hover {
  opacity: 0.8;
}
#navbar_row {
  padding: 8px 0;
}
.current {
  font-weight: bold;
}
</style>
