<template>
  <v-app class="back">
    <v-app-bar app color="darknes">
      <v-toolbar-title class="headline text-uppercase">
        <span class="white--text">Aplikasi</span>
        <span class="font-weight-light white--text">IDENTIFIKASI JAMUR aasa</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn :to="{name: 'home'}" text class="white--text">Home</v-btn>
        <v-btn :to="{name: 'identifikasi'}" text class="white--text">Identifikasi</v-btn>
        <v-btn :to="{name: 'tentang'}" text class="white--text">Tentang</v-btn>
        <v-btn :to="{name: 'tentang_pakar'}" text class="white--text">Tentang Pakar</v-btn>
        <v-btn :to="{name: 'kontak'}" text class="white--text">Kontak</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer
      :padless="padless"
      class="font-weight-medium"
    >
      <v-card
        flat
        tile
        width="100%"
        class="black lighten-1 text-center"
        no-padding
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-divider class="white"></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
      <!-- <v-col
        class="text-center"
        cols="12"
        
      >
        {{ new Date().getFullYear() }} — <strong class="white--text">Aplikasi Identifikasi Jamur</strong>
      </v-col> -->
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  data: () => ({
    
    icons: [
      'home',
      'mail',
      'event',
      'delete',
    ],
    items: [
      'default',
      'absolute',
      'fixed',
    ],
    padless: true,
    variant: 'default',
  }),
};
</script>

