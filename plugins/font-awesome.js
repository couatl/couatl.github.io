import Vue from 'vue'

import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faDownload, faGraduationCap, faGlobe, faCode,
  faDesktop, faMapSigns, faPhone, faAddressCard, faBriefcase, faMapMarkerAlt, faCertificate, faCalendarAlt, faFilePdf
} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faVk, faFacebookF, faTelegram} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faDownload, faGraduationCap, faGlobe, faCode, faDesktop, faMapSigns, faFilePdf,
  faPhone, faAddressCard, faBriefcase, faMapMarkerAlt, faCertificate, faCalendarAlt);

library.add(faGithub, faVk, faFacebookF, faTelegram);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
