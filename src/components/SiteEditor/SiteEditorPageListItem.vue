<template>
  <li class="page-list__item">
    <div class="page__badge bg-1"></div>
    <span class="page__title">{{ title }}</span>
    <div class="button-wrapper">
      <button class="button page-setting-btn">Settings</button>
      <button class="button danger-btn page-remove-btn">Delete</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    pageID: String,
    title: String
  }
}
</script>
