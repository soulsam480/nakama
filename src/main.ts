import { createApp } from 'vue';
import Provided from './Providers.vue';
import router from './router';

import 'virtual:windi.css';

const app = createApp(Provided);

app.use(router);

app.mount('#app');
