<template>
  <header>
    <div>
      <a href="/" class="logo">Rocket Skin</a>
      <div>
        <div class="nav">
          <div class="env">
            <svg style="width: 22px;fill: #ffffff9c;" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
              focusable="false" viewBox="0 0 24 24" class="vt-locales-btn-icon" data-v-2719a954="">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "
                class="css-c4d79v"></path>
            </svg>
            <div class="menu" style="right: 10px;">
              <div class="group" style="border-top: none;">
                <a href="/">English
                  <svg style="opacity: 0.5; transform: scale(0.6);" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                    focusable="false" height="24px" viewBox="0 0 24 24" width="24px" class="vt-link-icon">
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" fill="#ffffff"></path>
                  </svg></a>
                <a href="/">简体中文
                  <svg style="opacity: 0.5; transform: scale(0.6);" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                    focusable="false" height="24px" viewBox="0 0 24 24" width="24px" class="vt-link-icon">
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" fill="#ffffff"></path>
                  </svg></a>
                <a href="/">Русский
                  <svg style="opacity: 0.5; transform: scale(0.6);" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                    focusable="false" height="24px" viewBox="0 0 24 24" width="24px" class="vt-link-icon">
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" fill="#ffffff"></path>
                  </svg></a>
              </div>
            </div>
          </div>
        </div>
        <a href="/auth/login" style="margin-left: 40px;"><i
            style="font-family: fa-pro; font-style: normal; margin-right: 3px" class="login"></i>登录</a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="css" scoped>
header {
  background-color: #00000038;
  width: 100vw;
  height: 60px;
  position: fixed;
  padding: 0 40px 0 20px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}

header>div {
  height: 100%;
  width: 100%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header * {
  font-family: "JetBrains Mono";
  color: #ffffff9c !important;
  text-decoration: none !important;
  font-size: 15px;
  cursor: pointer;
  transition: all .1s ease;
}

header *:hover {
  color: #fff !important;
}

header .logo {
  font-weight: 700;
  color: #fff !important;
  font-size: 20px;
}

.nav {
  display: flex;
  align-items: center;
}

.nav>* {
  margin-left: 20px;
  height: 100%;
}

.nav {
  height: 100%;
  display: flex;
  align-items: center;
}

.nav>* {
  display: flex;
  align-items: center;
}

.nav>* .menu {
  opacity: 0;
  transform: translate(0, -6px);
  transition: .1s all ease;
  pointer-events: none;
}

.nav>*:hover .menu,
.nav>*:focus-within .menu,
.nav .menu:hover {
  opacity: 1;
  transform: translate(0px, 0px);
  pointer-events: all;
}

.nav .menu {
  background: #1a1a1acc;
  border: 1px solid #5454547a;
  border-radius: 8px;
  width: 150px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  margin-left: -50px;
  top: 50px;
  font-size: 13px;
}

.nav .menu>.group>* {
  height: 26px;
  display: flex;
  align-items: center;
  font-size: 14.5px;
}

.nav .menu {
  overflow: hidden;
}

.nav .menu .group {
  padding: 12px 18px;
  border-top: 1px solid #5454547a;
}

.nav .menu>.group p {
  font-size: 12px;
  font-weight: 600;
  pointer-events: none;
  cursor: default !important;
}

.nav>* {
  width: calc(fit-content + 10px);
}

.nav div>svg,
.nav>a>svg {
  fill: #ffffff9c !important;
}

.nav div>svg:hover,
.nav>a>svg:hover {
  fill: #fff !important;
}

.nav-mobile {
  display: none;
}

.nav-mobile .menu {
  opacity: 0;
  background: #1a1a1af7;
  border: 1px solid #5454547a;
  border-radius: 8px;
  width: 150px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 40px;
  left: 10px;
  width: calc(100vw - 30px);
  font-size: 13px;
  padding: 12px 0;
  max-height: calc(100vh - 70px);
  overflow-y: auto;
  pointer-events: none;
}

.nav-mobile:hover .menu,
.nav-mobile .menu:hover {
  opacity: 1;
  pointer-events: all;
}

.nav-mobile .menu .group {
  display: flex;
  flex-direction: column;
  padding: 6px 28px;
  border-top: 1px solid #5454547a;
}

.nav-mobile .menu .group>* {
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 13.5px;
}

.nav-mobile .menu .group p {
  font-size: 12px;
  font-weight: 600;
  pointer-events: none;
  cursor: default !important;
}

/* @media (max-width: 680px) {
  .nav {
    display: none !important;
  }

  .nav-mobile {
    display: flex !important;
  }
} */

header>div,
header>div>div,
header .nav {
  height: 100%;
}

header>div>div {
  display: flex;
  align-items: center;
}
</style>