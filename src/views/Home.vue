<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col align="left" cols="12" style="padding-top: 32px;">
          <h1 id="home__title">Aleksandra <br> Ewa <br> Nowak</h1>
        </b-col>
        <b-col align="right" cols="12" style="padding-top: 48px;">
          <div class="home__button">
            <router-link to="/bio" tag="div">Bio</router-link>
          </div>
          <div class="home__button">
            <router-link to="/works" tag="div">Works</router-link>
          </div>
          <div class="home__button">
            <router-link to="/about" tag="div">About</router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
.home__button {
  width: min-content;
  cursor: pointer;
  user-select: none;
  padding: 4px 16px;
}
.home__button:hover > div {
  text-shadow: 0 0 1em rgba(0, 0, 0, 0.8) !important;
}
.home__button:active > div {
  text-shadow: 0 0 1em rgba(0, 0, 0, 0.9) !important;
}
</style>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>
