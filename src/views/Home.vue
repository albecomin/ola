<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col align="left" cols="12" style="padding-top: 32px;">
          <h1 id="home__title">Aleksandra <br> Ewa <br> Nowak</h1>
        </b-col>
        <b-col align="right" cols="12" style="padding-top: 64px;">
          <div class="home__button" style="margin-top: 12px;">
            <router-link to="/bio" tag="div">Bio</router-link>
          </div>
          <div class="home__button" style="margin-top: 12px;">
            <router-link to="/works" tag="div">Works</router-link>
          </div>
          <div class="home__button" style="margin-top: 12px;">
            <router-link to="/about" tag="div">About</router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
</style>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>
