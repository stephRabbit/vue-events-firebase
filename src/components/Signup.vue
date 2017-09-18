<template>
  <div class="mui-panel">
    <div class="mui-form">
      <legend>Sign Up</legend>
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
        @click="signUp"
        class="mui-btn mui-btn--primary"
      >
        Sign Up
      </button>
    </div>
    <p class="form-error">{{error.message}}</p>
    <div class="form-link">
      Already a member?
      <router-link to="/signin">Sign in now!</router-link>
    </div>
  </div>
</template>
<script>
  import { firebaseApp } from '../firebaseApp';

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
      signUp() {
        firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
          .catch(error => {
            this.error = error;
          });
      }
    }
  }
</script>


