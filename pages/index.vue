<template>
  <div class="main">
    <section class="logo">
      <app-header/>
      <div>
        <github/>
        <app-title/>
        <img src="landing.png" class="photo"/>
        <div style="position: relative">
          <div class="yellow-circle"/>
        </div>
        <div class="landing__down">
          <div class="landing__down-text">
            About
          </div>
          <img src="up.png" class="landing__down-icon"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

  // TODO: При ховере на руку + about -> баунсинг руки
  // TODO: багфикс ховера руки

  import Github from '~/components/Github.vue'
  import AppHeader from '~/components/AppHeader.vue'
  import AppTitle from '~/components/AppTitle.vue'

  export default {
    components: {
      Github,
      AppHeader,
      AppTitle
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
    box-shadow: inset 0 -1em #732a2f;
  }

  .photo {
    display: block;
    max-width: 100%;
    width: 1200px;
    margin-left: -2em;
  }

  .yellow-circle {
    width: 700px;
    height: 700px;
    border: solid 350px #ffa522;
    border-radius: 100%;
    z-index: -1;
    opacity: 0.2;
    position: absolute;
    bottom: 15em;
    filter: blur(5px);
  }

  .landing__down {
    display: flex;
    position: absolute;
    right: 1em;
    bottom: 1.5em;
    flex-direction: column;
    cursor: pointer;
    z-index: 100;
  }

  .landing__down:hover {
    color: darkred;
  }

  .landing__down-icon {
    width: 50px;
    height: 50px;
    transform: rotate(180deg);
    transition: all 250ms ease;
  }

  .landing__down-icon:hover {
    transform:  rotate(180deg) translateY(-10px);
  }

  .landing__down-text {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 300;
    font-size: 0.7em;
    writing-mode: vertical-rl;
    text-orientation: inherit;
    margin-bottom: 10px;
    line-height: 50px;
    -webkit-transform: rotate(180deg);
    transition: all 250ms ease;
  }

</style>

