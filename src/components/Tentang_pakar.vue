<template>
  <v-layout no-padding no-margin>
    <v-container class="grey lighten-5">
      <v-parallax
        dark
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-row
          align="center"
          justify="center"
        >
          <h1 class="display-2 font-weight-thin mb-4">TENTANG PAKAR</h1>
          <h4 class="subheading">Build your application today!</h4>
        </v-row>
      </v-parallax>
      <v-row
        class="mb-6"
        no-gutters
      >
        <v-col md="12">
          <v-card class="pa-6">
            <div align="center" justify="center">
              <h3>
                MY EXPERT
              </h3>
            </div>
            <v-row>
              <v-col md="6">
                <v-card
                  class="pa-2"
                  outlined
                  tile
                >
                  <v-row align="center" justify="center">
                    <v-img
                      src="https://picsum.photos/id/11/500/300"
                      lazy-src="https://picsum.photos/id/11/10/6"
                      aspect-ratio="1"
                      class="grey lighten-2"
                      max-width="500"
                      max-height="300"
                    ></v-img>
                  </v-row>
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
                  <div>
                    <h3>who is our expert ?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</p>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>

</script>
