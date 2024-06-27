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
        @input="handlePasswordInput"
      />
    </label>
    <div v-if="!emailIsValid && loginAttempt" class="validation-error">
      Please, use valid password
    </div>

    <button class="button login-btn" @click.prevent="handleLoginAttempt">Log In</button>
  </form>
</template>

<script>
import CryptoJS, { AES } from 'crypto-js'
import setAuthCookie from '@/helpers/setAuthCookie'
import { mapStores } from 'pinia'
import { useAppStore } from '@/stores/appStore'
export default {
  data() {
    return {
      email: '',
      password: '',
      loginAttempt: false
    }
  },
  methods: {
    handleSuccessLogin() {
      const token = AES.encrypt(new Date().getTime().toString(), 'happy-happy-happy').toString()
      setAuthCookie(token)
      this.redirectToSites()
    },

    handleLoginAttempt() {
      this.loginAttempt = true
      if (this.emailIsValid && this.passwordIsValid) {
        this.handleSuccessLogin()
      }
    },
    handleEmailInput(event) {
      this.loginAttempt = false
      this.email = event.target.value
    },
    handlePasswordInput(event) {
      this.loginAttempt = false
      this.password = event.target.value
    },
    checkPassword(password) {
      const hashedPassword = this.appStore.gethashedPassword
      const hashFromUserPassword = CryptoJS.SHA256(password).toString()
      return hashedPassword === hashFromUserPassword
    },
    redirectToSites() {
      this.$router.push('/')
    }
  },
  computed: {
    ...mapStores(useAppStore),
    emailIsValid() {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.email)
    },
    passwordIsValid() {
      return this.checkPassword(this.password)
    }
  }
}
</script>
