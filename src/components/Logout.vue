
<template>
    <h1>Logout Successful</h1>
</template>
  
  <script>
  export default {
    mounted() {
      this.logout()
    },
    methods: {
      logout() {
       
        localStorage.removeItem('jwt_token');

      },
    },
  };
  </script>