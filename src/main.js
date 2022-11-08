import { createApp } from 'vue'
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

import 'ant-design-vue/dist/antd.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'

const app = createApp(App);
app.use(router);
app.use(Button);
app.use(Menu);
app.use(Drawer);
app.use(List);
app.mount('#app');

app.config.globalProperties.$message = message;
