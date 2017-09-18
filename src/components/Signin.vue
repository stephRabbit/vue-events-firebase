<template>
  <div class="mui-panel">
    <div class="mui-form">
      <legend>Sign In</legend>
      <div class="mui-textfield">
        <input
          class="mui--is-empty mui--is-pristine mui--is-touched"
          placeholder="Email"
          type="text"
          v-model="email"
        >
      </div>
      <div class="mui-textfield">
        <input
          class="mui--is-empty mui--is-pristine mui--is-touched"
          placeholder="Password"
          type="password"
          v-model="password"
        >
      </div>
      <button
        @click="signIn"
        class="mui-btn mui-btn--primary"
      >
        Sign In
      </button>
    </div>
    <p class="form-error">{{error.message}}</p>
    <div class="form-link">
      Not a member?
      <router-link to="/signup">Sign up now!</router-link>
    </div>
  </div>
</template>
<script>
  import { firebaseApp } from '../firebaseApp';
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        email: '',
        password: '',
        error: {
          message: ''
        }
      }
    },
    methods: {
      signIn() {
        firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
          .catch(error => {
            this.error = error
          })
      }
    }
  }
</script>
