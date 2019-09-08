<<<<<<< HEAD
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'
import VuetifyConfirm from 'vuetify-confirm'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
  theme: {
    // primary: colors.yellow.lighten3,
    // secondary: colors.shades.black,
    // error: colors.orange.darken3
  },
  iconfont: 'mdi'
})
Vue.use(VuetifyConfirm)
=======
import Vue from 'vue';
import Vuetify from 'vuetify/lib';


import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
        darknes: '#151515',
        light: '#fff'
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});
>>>>>>> 5b9e5c9ea9fb65783ef3c483c30ff5e5dca8366b
