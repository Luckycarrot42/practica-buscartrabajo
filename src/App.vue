<template>
  <v-app>
    <navbar-comp></navbar-comp>
    <v-main>
      <router-view></router-view>
    </v-main>
    <footer-comp></footer-comp>
  </v-app>
</template>

<script>
import NavbarComp from './components/NavbarComp';
import FooterComp from './components/FooterComp';

export default {
  name: 'App',

  components: {
    FooterComp,
    NavbarComp
  },

  data: () => ({
    //
  }),
};
</script>
