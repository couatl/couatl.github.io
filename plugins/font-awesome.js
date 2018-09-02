import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDownload, faGraduationCap, faGlobe, faCode, faDesktop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faDownload, faGraduationCap, faGlobe, faCode, faDesktop);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
