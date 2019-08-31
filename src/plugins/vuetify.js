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
