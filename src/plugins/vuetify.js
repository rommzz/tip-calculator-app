import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        strongcyan: '#26c0ab',
        verydarkcyan: '#00494d',
        darkgrayishcyan: '#5e7a7d',
        lightgrayishcyan: '#c5e4e7',
				hovers: '#a5f8ed'

      },
    },
  },
})

export default vuetify
