<template>
  <div class="root">
    <projects-section/>
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
