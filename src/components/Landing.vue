<template>
  <div>
    <v-layout row wrap>
      <!-- <Heading :title="$t('landing.TITLE')" /> -->
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover>
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i">
          <v-sheet
            :color="colors[i]"
            height="100%">
            <v-flex align-end justify-center xs10 offset-xs1>
			        <div class="text-xs-center display-3">{{ slide }} Slide</div>
			      </v-flex>
            
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <!-- <Description :description="$t('landing.DESCRIPTION')" /> -->
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
    }
  },
}
</script>