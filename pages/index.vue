<template>
  <div class="root">
    <section class="logo">
      <div>
        <github/>
        <app-title/>
        <img src="laptop.png" class="logo__laptop"/>
        <div class="logo__buttons">
          <nuxt-link to="/about" class="logo__button">More about me</nuxt-link>
          <nuxt-link to="/projects" class="logo__button">Show some work</nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

  // TODO.md: русская версия

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
    background-size: contain;
    box-shadow: inset 0 0 0 0.3em #732a2f;
  }

  .logo__laptop {
    width: 15em;
    margin-bottom: 0;
    margin-top: 1em;
  }

  .logo__buttons {
    display: flex;
    justify-content: space-between;
    margin-top: .5em;
  }

  .logo__button {
    padding: .85rem 1.85rem;
    color: #370f10;
    font-size: 0.5em;
    font-weight: 700;
    letter-spacing: 1px;
    text-decoration: none;
    border-radius: 5rem;
    background: #f7f7f7;
    cursor: pointer;
    transition: background .25s ease-in-out, color .25s ease-in-out;
  }

  .logo__button:hover {
    background: #370f10;
    color: white;
  }
</style>

