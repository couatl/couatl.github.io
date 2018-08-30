<template>
  <div class="main">
    <section class="logo">
      <div>
        <github/>
        <h1 class="logo__title-text">
          Hi! I'm
        </h1>
        <h1 class="logo__title" data-buzz="Nadya">
          Nadya
        </h1>
        <h2 class="logo__title-description">
          Web developer
        </h2>
        <!--<h1 class="title">-->
        <!--Hi! I'm Nadya-->
        <!--</h1>-->
        <!--<div class="logo__text">-->
        <!--<h2 class="subtitle">-->
        <!--Web developer-->
        <!--</h2>-->
        <!--</div>-->
        <img src="title-2.png" class="photo"/>
      </div>
    </section>
  </div>
</template>

<script>
  import Github from '~/components/Github.vue'

  export default {
    components: {
      Github
    }
  }
</script>

<style>
  .logo {
    min-height: 100vh;
    font-size: 2em;
    display: flex;
    padding: 1em;
    align-items: flex-end;
    justify-content: center;
    /*background-color: gray;*/
    /*background: url('../static/banner-background.png') no-repeat top center;*/
    /*background-size: cover;*/
    box-shadow: inset 0 -1em #732a2f;
  }

  .logo__title-text {
    display: inline;
  }

  .logo__title {
    display: inline-block;
    position: relative;
    color: inherit;
    text-decoration: none;
    transition: all 250ms ease;
    transform: translatez(0);
    perspective: 50px;
  }

  .logo__title:before,
  .logo__title:after {
    content: attr(data-buzz);
    position: absolute;
    z-index: -1;
    opacity: 0.5;
    transition: all 150ms ease;
  }

  .logo__title:before {
    color: #ad1f2d;
    top: 2px;
    left: 2px;
  }

  .logo__title:after {
    color: #ffa522;
    bottom: 2px;
    right: 2px;
  }

  .logo__title:hover:before {
    transform: rotatex(-15deg) rotatey(5deg) scale(1.25);
  }

  .logo__title:hover:after {
    transform: rotatey(-5deg) rotatex(15deg) scale(1.25);
  }

  .logo__title-description {

  }

  .logo__text {
    background: #732a2fc2;
    width: 35em;
    padding: 1em;
    box-shadow: 1em 1em #b8641f9c;
  }

  .title {
    display: block;
    font-weight: 700;
    color: #b8641f9c;
    font-family: "Moon", sans-serif;
    font-size: 5em;
    /*text-shadow: 0.1em 0.1em rgba(115, 42, 47, .76);*/
    letter-spacing: 7px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: white;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .photo {
    height: 500px;
    display: block;
  }
</style>

