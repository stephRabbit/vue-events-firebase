import Vue from 'vue';
import VueRouter from 'vue-router';
import { firebaseApp } from './firebaseApp';

// Initailize router
Vue.use(VueRouter);

// Assets
import App from './components/App.vue';
import Dashboard from './components/Dashboard.vue';
import Signin from './components/Signin.vue';
import Signup from './components/SignUp.vue';
import store from './store';

// Mode 'hash'/'history' for non refreshing apps when reaching
// desired endpoint
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '/signin', component: Signin },
    { path: '/signup', component: Signup }
  ]
});

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    // Navigate to new page and place a page over current page,
    // making stacked history of changes
    store.dispatch('signIn', user);
    router.push('/dashboard');
  }
  else {
    // Starts new history stack
    router.replace('/signin');
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})