<template>
  <b-container fluid id="navbar"
  :class="{'bg-secondary shadow': scrollPosition > 0}">
    <b-row>
      <b-col cols=12>
        <div align="center" id="navbar__home" class="cursor-pointer">
          <router-link to="/" tag="span">Aleksandra <br> Ewa <br> Nowak</router-link>
        </div>
      </b-col>
    </b-row>
    <b-row id="navbar_row" class="justify-content-md-center text-primary">
      <b-col cols="4" md="auto" align="center" class="navbar__link cursor-pointer"
        :class="{'clickable': this.$route.path !== '/bio'}">
        <router-link to="/bio" tag="span">Bio</router-link>
      </b-col>
      <b-col cols="4" md="auto" align="center" class="navbar__link cursor-pointer"
      :class="{'clickable': this.$route.path !== '/works'}">
        <router-link to="/works" tag="span">Works</router-link>
      </b-col>
      <b-col cols="4" md="auto" align="center" class="navbar__link cursor-pointer"
      :class="{'clickable': this.$route.path !== '/about'}">
        <router-link to="/about" tag="span">About</router-link>
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
  transition: background 0.2s ease-in-out, box-shadow 0.1s ease-in-out;
}
#navbar__home {
  font-weight: bold;
  font-size: 12px;
  line-height: 1.2em;
  padding: 0.6em;
  opacity: 0.6;
  transition: all 0.2s;
}
#navbar__home:hover {
  opacity: 0.8;
}
#navbar__home:hover > span {
  text-shadow: 0 0 1em rgba(0, 0, 0, 0.3) !important;
}
#navbar_row {
  padding: 8px 0;
}
.navbar__link {
  font-weight: bold;
  cursor: default;
  opacity: 0.8;
  transition: all 0.2s;
}
.navbar__link.clickable:hover > span {
  opacity: 1.0;
  text-shadow: 0 0em 0.4em rgba(0, 0, 0, 0.3) !important;
}
.clickable {
  font-weight: normal;
  cursor: pointer !important;
}

</style>
