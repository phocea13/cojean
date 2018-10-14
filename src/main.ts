import Vue from 'vue';
import App from './App.vue';
import router from './router';

export interface Table {
  name: string,
  tableSizeInInches?: number,
  description: string,
  people: Guest[],
  image?: string,
}

export interface Guest {
  name: string,
  homeCountry?: HomeCountry,
  languages?: Language[],
  role?: WeddingRole,
}

export enum HomeCountry {
  USA,
  France

}
export enum Language {
  English,
  French,
  German,
  Spanish,
}

export enum WeddingRole {
  Parent,
  Bridesmaid,
  Groom,
  Bride,
  Groomsman,
  Witness,
  Guest,
  Officiant,
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
