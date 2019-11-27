import Vue from 'vue';
import VueI18n from 'vue-i18n';
import OpenElectionCompass from './OpenElectionCompass.vue';
import router from './router/index';

Vue.config.productionTip = false;

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
});

Vue.component('open-election-compass', OpenElectionCompass);

new Vue({
  router,
  i18n,
  el: '#open-election-compass',
}).$mount();