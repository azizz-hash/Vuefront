<template>
<<<<<<< HEAD
  <v-layout row wrap>
    <v-carousel height="400" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-container class="grey lighten-5">
      <v-layout row wrap>
        <v-row no-gutters>
          <v-col xs6>
            <v-card md6 class="pa-2" outlined tile>
              .col-md-4
            </v-card>
          </v-col>
          <v-col xs6>
            <v-card md6 class="pa-2" outlined tile>
=======
  <v-layout>
    <v-row>
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
          <v-sheet
            :color="colors[i]"
            height="100%"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="display-3">{{ slide }} Slide</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <v-container class="grey lighten-5">
        <v-row
          class="mb-6"
          no-gutters
        >
          <v-col md="6">
            <v-card
              class="pa-2"
              outlined
              tile
            >
              .col-md-4
            </v-card>
          </v-col>
          <v-col
            md="6"
          >
            <v-card
              class="pa-2"
              outlined
              tile
            >
>>>>>>> 5b9e5c9ea9fb65783ef3c483c30ff5e5dca8366b
              .col-md-4 .offset-md-4
            </v-card>
          </v-col>
        </v-row>
<<<<<<< HEAD
      </v-layout>
    </v-container>
=======
      </v-container>
    </v-row>
  
>>>>>>> 5b9e5c9ea9fb65783ef3c483c30ff5e5dca8366b
  </v-layout>
</template>

<script>
<<<<<<< HEAD
/* eslint-disable */
export default {
  metaInfo() {
    return {
      title: this.$store.getters.appTitle,
      titleTemplate: `${this.$t('home.TITLE')} - %s`
    }
  },
  data() {
    return {
      // name: this.$store.state.auth.user.name,
      // showVerifyDialog: !this.$store.state.verify.emailVerified,
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4'
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth'
      ]
    }
  }
}
=======
export default {
  data: () => ({
    colors: [
      'indigo',
      'warning',
      'pink darken-2',
      'red lighten-1',
      'deep-purple accent-4',
    ],
    slides: [
      'First',
      'Second',
      'Third',
      'Fourth',
      'Fifth',
    ],
  }),
};
>>>>>>> 5b9e5c9ea9fb65783ef3c483c30ff5e5dca8366b
</script>
