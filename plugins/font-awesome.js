import Vue from 'vue'

import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faDownload, faGraduationCap, faGlobe, faCode,
  faDesktop, faMapSigns, faPhone, faAddressCard, faBriefcase, faMapMarkerAlt, faCertificate, faCalendarAlt, faFilePdf,
  faBoxes, faFileCode
} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faVk, faFacebookF, faTelegram, faJsSquare, faReact, faVuejs, faCss3, faGit, faDocker, faNodeJs, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faDownload, faGraduationCap, faGlobe, faCode, faDesktop, faMapSigns, faFilePdf,
  faPhone, faAddressCard, faBriefcase, faMapMarkerAlt, faCertificate, faCalendarAlt, faFileCode,
  faBoxes, faJsSquare, faReact, faVuejs, faCss3, faGit, faDocker, faNodeJs);

library.add(faGithub, faVk, faFacebookF, faTelegram, faInstagram);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
