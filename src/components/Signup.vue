
<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model="username" placeholder="Username" name="username" />
        <input type="password" v-model="password" placeholder="Password" name="password" required />
        <button type="submit">Sign Up</button>
    </form>
  </template>
  
  <script>
  import signupForm from '../utils/signupForm.js';
  
  export default {
    setup() {
      const { username, password, submitSignup } = signupForm();
  
      const handleSubmit = () => {
        submitSignup();
      };
  
      return {
          username,
          password,
        handleSubmit,
      };
    },
  };
  </script>

<style>
</style>