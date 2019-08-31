<template>
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
              .col-md-4 .offset-md-4
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  
  </v-layout>
</template>

<script>
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
</script>
