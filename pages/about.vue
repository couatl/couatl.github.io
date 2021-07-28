<template>
  <div class="root">
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
  </div>
</template>
<script>

  // TODO.md: При ховере на руку + about -> баунсинг руки
  // TODO.md: русская версия

  import ProfileSection from '~/components/ProfileSection.vue'
  import CustomFooter from '~/components/CustomFooter.vue'
  import ExperienceSection from '~/components/ExperienceSection.vue'
  import SkillsSection from '~/components/SkillsSection.vue'
  import WaveDivider from '~/components/WaveDivider.vue'

  export default {
    components: {
      ProfileSection,
      ExperienceSection,
      CustomFooter,
      SkillsSection,
      WaveDivider
    }
  }
</script>

<style>

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
</style>
