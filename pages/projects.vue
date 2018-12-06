<template>
  <div class="root">
    <projects-section/>
    <div class="projects__triangle"/>
    <div class="projects__triangle_right"/>
    <custom-footer/>
  </div>
</template>
<script>
  import ProjectsSection from '~/components/ProjectsSection.vue'
  import CustomFooter from '~/components/CustomFooter.vue'

  export default {
    components: {
      ProjectsSection,
      CustomFooter
    }
  }
</script>

<style>
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
