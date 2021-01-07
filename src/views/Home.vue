<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col align="left" cols="12" style="padding-top: 32px;">
          <h1 id="home__title">Aleksandra <br> Ewa <br> Nowak</h1>
        </b-col>
        <b-col align="right" cols="12" style="padding-top: 48px;">
          <b-button-group vertical size="lg">
            <b-button variant="light" class="home__button">
              <router-link to="/bio" tag="div">Bio</router-link>
            </b-button>
             <b-button variant="light" class="home__button">
              <router-link to="/works" tag="div">Works</router-link>
            </b-button>
             <b-button variant="light" class="home__button">
              <router-link to="/about" tag="div">About</router-link>
            </b-button>
          </b-button-group>
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
