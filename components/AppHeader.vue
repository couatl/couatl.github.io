<template>
  <header>
    <div class="navbar" v-bind:class="{navbar__show: scrollPosition > 0}">
      <div class="navbar__links">
        <div class="navbar__link">
          <nuxt-link to="/" class="menu-item">Home</nuxt-link>
        </div>
        <span>/</span>
        <div class="navbar__link">
          <nuxt-link to="/about" class="menu-item">About</nuxt-link>
        </div>
        <span>/</span>
        <div class="navbar__link">
          <nuxt-link to="/projects" class="menu-item">Projects</nuxt-link>
        </div>
        <span>/</span>
        <div class="navbar__link">
          <nuxt-link to="/contact" class="menu-item">Contact</nuxt-link>
        </div>
      </div>
      <div class="lang">
        <div class="lang__ru">Русский</div>
        <span>/</span>
        <div class="lang__eng">eng</div>
      </div>
    </div>

    <div class="mobile-navbar__overlay" v-on:click="toggle"
         v-bind:class="{ mobileNavbar__overlayActive: showMobileMenu }"></div>

    <div class="mobile-navbar-icon " v-on:click="toggle" v-bind:class="{ active: showMobileMenu }">
      <span class="line-1"></span>
      <span class="line-2"></span>
      <span class="line-3"></span>
    </div>
    <div class="mobile-navbar" v-bind:class="{ mobileNavbar__triggered: showMobileMenu }">
      <div class="mobile-navbar__header">
        <nuxt-link to="/">
        <!--<font-awesome-icon icon="map-signs"/> -->
        Home
        </nuxt-link>
      </div>
      <div class="mobile-navbar__link">
        <nuxt-link to="/about" class="menu-item" v-on:click="toggle">
          <font-awesome-icon icon="address-card"/>
          About
        </nuxt-link>
        <nuxt-link to="/projects" class="menu-item">
          <font-awesome-icon icon="briefcase"/>
          Projects
        </nuxt-link>
        <nuxt-link to="/contact" class="menu-item">
          <font-awesome-icon icon="phone"/>
          Contact
        </nuxt-link>
      </div>
      <div class="mobile-navbar-lang">
        <div class="mobile-navbar-lang__ru">Русский</div>
        <span> / </span>
        <div class="mobile-navbar-lang__eng active">Eng</div>
      </div>
    </div>

  </header>
</template>

<script>
  export default {
    data: function () {
      return {
        showMobileMenu: false,
        scrollPosition: null
      };
    },
    methods: {
      toggle: function () {
        this.showMobileMenu = !this.showMobileMenu;
      },
      updateScroll() {
        this.scrollPosition = window.scrollY;
      }
    },
    mounted() {
      window.addEventListener('scroll', this.updateScroll);
    },
    destroy() {
      window.removeEventListener('scroll', this.updateScroll)
    }
  }
</script>

<style>
  .navbar {
    position: fixed;
    top: 2em;
    left: 2em;
    right: 5em;
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    letter-spacing: 3px;
    z-index: 999;
    transition: all ease 250ms;
  }

  .navbar div {
    display: inline;
    margin: 0.5em;
  }

  .navbar .menu-item {
    color: black;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    transition: all 250ms ease;
  }

  .navbar .menu-item:hover {
    color: darkred;
    box-shadow: 0 2px darkred;
  }

  .navbar__show {
    background-color: #722a30;
    color: white;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1em 5em 1em 2em;
    border-bottom: 1px solid #4c1a1e;
  }

  .navbar__show .menu-item {
    color: white;
  }

  .navbar__show .menu-item:hover {
    color: white;
    box-shadow: 0 2px white;
  }

  .navbar__show .lang div:hover {
    color: white;
    box-shadow: 0 2px white;
  }

  .lang {
    text-transform: uppercase;
    letter-spacing: 1px;
    display: none;
  }

  .lang div {
    display: inline;
    margin: 0.5em;
    transition: all 250ms ease;

    cursor: pointer;
    display: none;
  }

  .lang * {
    display: none;
  }

  .lang div:hover {
    color: darkred;
    box-shadow: 0 2px darkred;
  }

  .mobile-navbar-icon {
    display: none;
    transition: transform 0.5s;
    position: fixed;
    top: 2em;
    left: 2em;
    z-index: 200;
    background-color: darkred;
    padding: 1em;
    border-radius: 100%;
    background: linear-gradient(to right, #722a30, #ef8e49);
    box-shadow: 0 2px 3em -1em #722a30;
    width: 4em;
    height: 4em;
    /*visibility: visible;*/
    /*opacity: 1;*/
    justify-content: center;
    flex-direction: column;
  }

  .mobile-navbar__overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    z-index: 100;
    display: none;
  }

  .mobileNavbar__overlayActive {
    display: block;
  }

  .mobile-navbar-icon .line-1, .mobile-navbar-icon .line-2, .mobile-navbar-icon .line-3 {
    border-top: 2px solid white;
    display: block;
    transition: margin 0.5s, transform 0.5s;
    width: 2em;
  }

  .mobile-navbar-icon .line-2 {
    margin: 0.5em 0;
  }

  .mobile-navbar {
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: white;
    z-index: 150;
    transition: all 0.5s;
    /*transition: 0.5s cubic-bezier(0.33, 1, 0.53, 1);*/
    transform: translate3d(0, -200%, 0);

    box-shadow: black 0 -9px 50px -10px;
    border-radius: 0 0 2em 2em;
    height: fit-content;
  }

  .mobile-navbar__link .menu-item {
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f6f6f6;
    padding: 5px;
    border-radius: 8px;
    width: 5em;
    margin: 5px;
  }

  .mobile-navbar__link {
    font-size: 1.6em;
    font-weight: 600;
    margin-top: 1em;
    margin-bottom: 1em;
    display: flex;
  }

  .active .line-1, .active .line-3, .active .line-2 {
    transform: rotate(45deg);
  }

  .active .line-2 {
    opacity: 0;
    margin: -2px 0;
  }

  .active .line-3 {
    transform: rotate(-45deg);
  }

  .mobileNavbar__triggered {
    transform: translate3d(0, 0, 0);
  }

  .mobile-navbar__header {
    font-size: 1.7em;
    padding: 1.5em;
    font-weight: 700;
    color: black;
    width: 100%;
    text-align: center;
    border-bottom: 2px rgba(128, 128, 128, 0.2) solid;
    color: darkred;
    margin-left: 2em;
  }

  .mobile-navbar-lang {
    display: flex;
    font-size: 1.4em;
    padding: 1em;
    display: none;
  }

  .mobile-navbar-lang div {
    margin-left: 5px;
    margin-right: 5px;
    border: 1px solid #a9a9a9d9;
    border-radius: 5px;
    padding-right: 10px;
    padding-left: 10px;
  }

  @media (max-width: 680px) {
    .navbar {
      display: none;
    }

    .lang {
      display: none;
    }

    .mobile-navbar-icon {
      display: flex;
    }
  }
</style>
