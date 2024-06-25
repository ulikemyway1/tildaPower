<template>
  <header class="header">
    <div class="header__logo">
      <RouterLink class="link" to="/">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          x="0"
          y="0"
          viewBox="0 0 300 300"
        >
          <path class="st0" d="M157.3 133.1v104h-19.4V125.8l19.4 7.3z" />
          <path
            class="st0"
            d="M79.8 123.4c0-26.6 14.5-41.1 31.5-41.1s19.4 2.4 38.7 12.1 24.2 12.1 33.9 12.1 14.5-7.3 14.5-21.8h16.9c2.4 29-14.5 41.1-31.5 41.1s-21.8-2.4-38.7-12.1-21.8-12.1-31.5-12.1-14.5 7.3-16.9 24.2l-16.9-2.4z"
          />
          <path
            class="st0"
            d="M150 300C67.3 300 0 232.7 0 150S67.3 0 150 0s150 67.3 150 150-67.3 150-150 150zm0-290.3C72.6 9.7 9.7 72.6 9.7 150S72.6 290.3 150 290.3 290.3 227.4 290.3 150 227.4 9.7 150 9.7z"
          />
        </svg>
      </RouterLink>
    </div>
    <nav class="header__nav">
      <ul class="header__nav-ul">
        <li class="header__nav-li">
          <RouterLink class="link" to="/">My sites</RouterLink>
        </li>
        <li class="header__nav-li">
          <RouterLink class="link" to="/profile">Profile</RouterLink>
        </li>
      </ul>
    </nav>
    <div class="last-content-wrapper">
      <div class="user">
        <svg
          class="user__icon"
          xmlns="http://www.w3.org/2000/svg"
          height="80px"
          viewBox="0 0 200 200"
          xml:space="preserve"
        >
          <path
            fill="#ffffff"
            d="M135.832 140.848h-70.9c-2.9 0-5.6-1.6-7.4-4.5-1.4-2.3-1.4-5.7 0-8.6l4-8.2c2.8-5.6 9.7-9.1 14.9-9.5 1.7-.1 5.1-.8 8.5-1.6 2.5-.6 3.9-1 4.7-1.3-.2-.7-.6-1.5-1.1-2.2-6-4.7-9.6-12.6-9.6-21.1 0-14 9.6-25.3 21.5-25.3s21.5 11.4 21.5 25.3c0 8.5-3.6 16.4-9.6 21.1-.5.7-.9 1.4-1.1 2.1.8.3 2.2.7 4.6 1.3 3 .7 6.6 1.3 8.4 1.5 5.3.5 12.1 3.8 14.9 9.4l3.9 7.9c1.5 3 1.5 6.8 0 9.1-1.6 2.9-4.4 4.6-7.2 4.6zm-35.4-78.2c-9.7 0-17.5 9.6-17.5 21.3 0 7.4 3.1 14.1 8.2 18.1.1.1.3.2.4.4 1.4 1.8 2.2 3.8 2.2 5.9 0 .6-.2 1.2-.7 1.6-.4.3-1.4 1.2-7.2 2.6-2.7.6-6.8 1.4-9.1 1.6-4.1.4-9.6 3.2-11.6 7.3l-3.9 8.2c-.8 1.7-.9 3.7-.2 4.8.8 1.3 2.3 2.6 4 2.6h70.9c1.7 0 3.2-1.3 4-2.6.6-1 .7-3.4-.2-5.2l-3.9-7.9c-2-4-7.5-6.8-11.6-7.2-2-.2-5.8-.8-9-1.6-5.8-1.4-6.8-2.3-7.2-2.5-.4-.4-.7-1-.7-1.6 0-2.1.8-4.1 2.2-5.9.1-.1.2-.3.4-.4 5.1-3.9 8.2-10.7 8.2-18-.2-11.9-8-21.5-17.7-21.5z"
          />
        </svg>

        <span class="user__name">{{ username || 'Anon' }}</span>
      </div>
      <button class="button logout-btn" title="Log Out">Log Out</button>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    username: String
  }
}
</script>
