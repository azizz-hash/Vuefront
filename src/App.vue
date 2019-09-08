<template>
<<<<<<< HEAD
  <v-app>
    <Toolbar />
    <v-content>
      <loading />
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-content>
    <Footer />
=======
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
>>>>>>> 5b9e5c9ea9fb65783ef3c483c30ff5e5dca8366b
  </v-app>
</template>

<script>
<<<<<<< HEAD
import Toolbar from '@/components/core/Toolbar.vue'
import Loading from '@/components/core/Loading.vue'
import Footer from '@/components/core/Footer.vue'

export default {
  name: 'App',
  metaInfo() {
    return {
      title: this.appTitle,
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { name: 'msapplication-TileColor', content: '#ffc40d' },
        { name: 'theme-color', content: '#ffffff' },
        {
          name: 'apple-mobile-web-app-title',
          content: this.appTitle
        },
        { name: 'application-name', content: this.appTitle }
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', color: '#5bbad5', href: '/safari-pinned-tab.svg' },
        { rel: 'favicon', href: '/favicon.ico' }
      ]
    }
  },
  components: {
    Toolbar,
    Loading,
    Footer
  },
  computed: {
    appTitle() {
      return this.$store.getters.appTitle
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
=======
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

>>>>>>> 5b9e5c9ea9fb65783ef3c483c30ff5e5dca8366b
