<template>
  <form action="#" class="login-form" @submit.prevent>
    <label for="email" class="label">
      Email
      <input
        id="email"
        type="email"
        class="input email-input"
        autocomplete="email"
        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
        required
      />
    </label>
    <label for="password" class="label">
      Password
      <input
        id="password"
        type="password"
        class="input password-input"
        autocomplete="current-password"
        required
      />
    </label>

    <button class="button login-btn" @click="handleLogin">Log In</button>
  </form>
</template>

<script>
export default {
  methods: {
    handleLogin() {
      console.log('login')
    }
  }
}
</script>
