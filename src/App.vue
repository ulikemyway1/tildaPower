<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
import HeaderApp from './components/HeaderApp.vue'
</script>

<template>
  <HeaderApp />
  <RouterView />
</template>
