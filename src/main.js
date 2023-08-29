import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab, faGithub);
createApp(App).use(router).mount('#app')
// eslint-disable-next-line no-undef
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

