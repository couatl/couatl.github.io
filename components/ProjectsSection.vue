<template>
  <section id="projects" class="projects">
    <div class="projects__title">Projects</div>
    <div class="projects-grid">
      <project-item
        v-for="item in projectsList"
        v-bind:project="item"
        v-bind:key="item.id"/>
    </div>
  </section>
</template>

<script>
  import ProjectItem from '~/components/ProjectItem.vue'

  export default {
    data: function () {
      return {
        projectsList: [
          {id: 0, title: 'Apoj', tags: 'Frontend', description: 'SPA Browser Game', img: 'apoj.png', tagColor: '#b8641f'},
          {id: 1, title: 'Forum', tags: 'Backend', description: 'REST Api to Forums', img: 'forum.png', tagColor: '#5f9ea0'},
          {id: 2, title: 'Mort', tags: 'Desktop', description: 'Computer game', img: 'mort.png', tagColor: '#9aa5ea'}
        ]
      }
    },
    components: {
      ProjectItem
    }
  }
</script>

<style>
  .projects {

  }

  .projects__title {
    font-family: Nickainley, sans-serif;
    text-align: center;
    margin-bottom: 0.5em;
    font-size: 3em;
  }

  .projects-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 680px) {
    .projects__title {
      margin-top: 0.5em;
    }

    .projects-grid {
      font-size: 1.2em;
    }
  }

</style>
