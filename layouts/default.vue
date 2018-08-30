<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
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
  font-family: "Myra 4F Caps";
  src: url('../assets/fonts/Myra-4F-Caps-Regular.otf');
  /*src: url('../assets/fonts/Myra 4F Caps Regular.ttf') format("truetype");*/
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Moon';
  src: url('../assets/fonts/Moon2.0-Regular.otf');
  font-weight: 400;
  font-style: normal;
}

</style>

