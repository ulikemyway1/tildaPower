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
          <RouterLink class="link" to="/">Main Page</RouterLink>
        </li>
        <li class="header__nav-li">
          <RouterLink class="link" to="/sites">My sites</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
