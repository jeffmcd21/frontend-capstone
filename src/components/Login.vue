
<template>
    <div class="login-container">
      <form @submit.prevent="login" class="form">
        <div class="form-body">
          <h1 class="login-title">Winfields</h1>
          <hr></hr>
          <div class="input-area">
            <div class="form-inp">
              <input type="username" v-model="username" placeholder="Username" name="username" required class="username"/>
            </div>
            <div class="form-inp">
              <input type="password" v-model="password" placeholder="Password" name="password" required />
            </div>
          </div>
          <div class="login-btn">
            <button class="submit-btn" type="submit">Login</button>
          </div>
          <div class="forgot-pwd">
            <a href="/">Forgot password</a>
          </div>
        </div>
      </form>
      <div class="scroll-container">
      </div>
    </div>
</template>
  
<script>
  export default {
    data(){
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      async login() {
        const password = this.password;
        const databaseURL = import.meta.env.VUE_APP_API_BASE_URL
  
        const response = await fetch(`${databaseURL}/user/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });
  
        if (!response.ok) {
          throw new Error('Login failed');
        }
        
        console.log(response)

        const data = await response.json();

        // console.log(data)
        const username = data.user.username
        const token = data.token;
        
        localStorage.setItem('username', username)
        localStorage.setItem('jwt_token', token);
        const userData = data.user
        localStorage.setItem('userData', JSON.stringify(userData))
        // console.log(token)
        this.$router.push({ path:'/chat', query: {username} })
      },
    },
  };
</script>


<style>
</style>