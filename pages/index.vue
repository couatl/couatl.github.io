<template>
  <div class="root">
    <app-header/>
    <section class="logo">
      <div>
        <github/>
        <app-title/>
        <div class="landing__down">
          <div class="landing__down-text">
            About
          </div>
          <img src="up.png" class="landing__down-icon"/>
        </div>
      </div>
    </section>
    <profile-section/>
  </div>
</template>

<script>

  // TODO: При ховере на руку + about -> баунсинг руки
  // TODO: русская версия
  // TODO: появление меню при скролле вниз
  // TODO: появление меню при скролле вниз
  // Поблагодарить шрифты в футере

  import Github from '~/components/Github.vue'
  import AppHeader from '~/components/AppHeader.vue'
  import AppTitle from '~/components/AppTitle.vue'
  import ProfileSection from '~/components/ProfileSection.vue'

  export default {
    components: {
      Github,
      AppHeader,
      AppTitle,
      ProfileSection
    }
  }
</script>

<style>
  .logo {
    min-height: 100vh;
    font-size: 2em;
    display: flex;
    padding: 1em;
    align-items: center;
    justify-content: center;
    /*box-shadow: inset 0 -1em #732a2f;*/
    /*background: #333532 url("../static/2.png") no-repeat right;*/
    background-size: contain;
    box-shadow: inset 0 0 0 0.3em #732a2f;
  }

  .landing__down {
    display: flex;
    position: absolute;
    left: 1em;
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
    transform: rotate(180deg) translateY(-10px);
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

