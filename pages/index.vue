<template>
  <div class="root">
    <app-header/>
    <section class="logo">
      <div>
        <github/>
        <app-title/>
        <img src="laptop.png" class="logo__laptop"/>
        <div class="landing__down">
          <div class="landing__down-text">
            About
          </div>
          <img src="up.png" class="landing__down-icon"/>
        </div>
      </div>
    </section>
    <profile-section/>
    <div class="triangle-divider"></div>
    <div class="triangle"></div>
    <experience-section/>
    <wave-divider/>
    <!--<div class="angled-divider"></div>-->
    <skills-section/>
    <div class="divider"></div>
    <div class="triangles">
      <div class="triangles__left"></div>
      <div class="triangles__right"></div>
    </div>
    <div class="projects__triangle"/>
    <div class="projects__triangle_right"/>
    <projects-section/>
    <custom-footer/>
  </div>
</template>

<script>

  // TODO.md: При ховере на руку + about -> баунсинг руки
  // TODO.md: русская версия
  // TODO.md: появление меню при скролле вниз
  // TODO.md: появление меню при скролле вниз
  // Поблагодарить шрифты в футере

  import Github from '~/components/Github.vue'
  import AppHeader from '~/components/AppHeader.vue'
  import AppTitle from '~/components/AppTitle.vue'
  import CustomFooter from '~/components/CustomFooter.vue'
  import WaveDivider from '~/components/WaveDivider.vue'

  import ProfileSection from '~/components/ProfileSection.vue'
  import ExperienceSection from '~/components/ExperienceSection.vue'
  import SkillsSection from '~/components/SkillsSection.vue'
  import ProjectsSection from '~/components/ProjectsSection.vue'

  export default {
    components: {
      Github,
      AppHeader,
      AppTitle,
      ProfileSection,
      ExperienceSection,
      SkillsSection,
      ProjectsSection,
      WaveDivider,
      CustomFooter
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

  .logo__laptop {
    width: 15em;
    margin-bottom: 0;
    margin-top: 1em;
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

  .triangle-divider {
    height: 3em;
    background-color: #b8641f;
    width: 100%;
  }

  .triangle {
    margin: auto;
    transform: translateX(20%) translateY(50%) rotate(-45deg);
    background-color: #b8641f;
    width: 3em;
    height: 3em;
    margin-top: -3em;
  }

  .angled-divider {
    display: none;
    background-color: #e6e6e6;
    overflow: hidden;
    height: 10em;
    width: 110%;
    margin-left: -2em;
    transform: translateY(-65%) rotate(5deg);
    position: absolute;
    z-index: 1;
  }

  .divider {
    height: 2em;
    background-color: #732a2f;
    width: 100%;
  }

  .triangles {
    display: block;
    position: relative;
    z-index: 11;
  }

  .triangles__left {
    margin-top: -5em;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 5em 0 0 5em;
    border-left-color: #b56221;
    border-top-color: rgba(128, 0, 128, 0);
  }

  .triangles__right {
    width: 0;
    height: 0;
    position: absolute;
    margin-top: -5em;
    right: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 0 0 5em 5em;
    border-bottom-color: #b56221;
    border-left-color: rgba(75, 0, 130, 0);
  }

  .projects__triangle {
    position: absolute;
    z-index: -1;
    width: 0;
    height: 0;
    border: transparent solid;
    border-width: 5em 15em 0 0;
    border-top-color: #eee;
    border-right-color: rgba(0, 0, 255, 0);
  }

  .projects__triangle_right {
    position: absolute;
    z-index: -1;
    width: 0;
    height: 0;
    border: transparent solid;
    right: 0;
    border-width: 5em 0 0 15em;
    border-top-color: #eee;
    border-right-color: rgba(0, 0, 255, 0);
  }

</style>

