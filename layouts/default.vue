<template>
  <div>
    <app-header/>
    <nuxt/>
    <custom-footer/>
  </div>
</template>

<script>
  import AppHeader from '~/components/AppHeader.vue'
  import CustomFooter from '~/components/CustomFooter.vue'

  export default {
    components: {
      AppHeader,
      CustomFooter
    }
  }
</script>

<style>
  body {
    margin: 0;
  }

  html {
    font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  a {
    color: black;
  }

  li {
    list-style: none;
  }

  a,
  a > * {
    outline: none;
    cursor: pointer;
    text-decoration: none;
  }

  .button-orange {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #b86323;
    color: #b86323;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button-orange:hover {
    color: #fff;
    background-color: #b86323;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }

  @font-face {
    font-family: 'Nickainley';
    src: url('../assets/fonts/Nickainley-Normal.otf');
    font-weight: 400;
    font-style: normal;
  }

  @media (max-width: 680px) {
    html {
      font-size: 12px;
    }
  }
</style>

