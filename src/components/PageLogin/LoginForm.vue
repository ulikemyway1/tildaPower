<template>
  <form action="#" class="login-form" @submit.prevent="handleLogin">
    <label for="email" class="label">
      Email
      <input
        :value="email"
        id="email"
        type="email"
        class="input email-input"
        autocomplete="email"
        @input="handleEmailInput"
      />
    </label>
    <div v-if="!emailIsValid && loginAttempt" class="validation-error">
      Please, enter correct email (e.i. test@gmail.com)
    </div>
    <label for="password" class="label">
      Password
      <input
        :value="password"
        id="password"
        type="password"
        class="input password-input"
        autocomplete="current-password"
        @input="handleInput"
      />
    </label>
    <div v-if="!emailIsValid && loginAttempt" class="validation-error">
      Please, use valid password
    </div>

    <button class="button login-btn" @click.prevent="handleLoginAttempt">Log In</button>
  </form>
</template>

<script>
import setAuthCookie from '@/helpers/setAuthCookie'
export default {
  data() {
    return {
      email: '',
      password: '',
      emailIsValid: false,
      passwordIsValid: false,
      loginAttempt: false
    }
  },
  methods: {
    handleLogin() {},
    handleLoginAttempt() {
      setAuthCookie('test')
      this.loginAttempt = true
      if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.email)) {
        this.emailIsValid = true
        console.log('email ok')
      }
    },
    handleEmailInput(event) {
      this.loginAttempt = false
      this.email = event.target.value
    }
  }
}
</script>
