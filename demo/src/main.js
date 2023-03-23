import { createApp } from 'vue'
import App from './App.vue'
import ToggleButton from '../../'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faCheck, faTimes])

const Vue = createApp(App)
Vue.component('fa', FontAwesomeIcon)
Vue.use(ToggleButton)

Vue.mount('#app')
