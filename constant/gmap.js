import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD1zw3l1bTGtEQpKxpC4G5PlA7CpCBw7hg',
    libraries: "places"
  },
  installComponents: true
})