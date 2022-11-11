import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'
import { 
    Drawer,
    Button,
    message,
    List,
    Menu
} from 'ant-design-vue';
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, fab, far)

import 'ant-design-vue/dist/antd.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'

const pinia = createPinia()
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.use(pinia);
app.use(Button);
app.use(Menu);
app.use(Drawer);
app.use(List);
app.mount('#app');

app.config.globalProperties.$message = message;
