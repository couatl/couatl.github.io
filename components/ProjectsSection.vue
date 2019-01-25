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
          {
            id: 0,
            title: 'Apoj',
            tags: 'Frontend',
            description: '— single page application for browser game',
            detailedDescription: 'Browser game based on the broken phone game. Supporting multiplayer mode and offline singleplayer. You sing - we reverse your song - your friend guess what it was.',
            img: 'apoj.png',
            tagColor: '#b8641f',
            features: [{
              id: 0, data: "Working offline (Service Worker)"
            },
              {
                id: 1, data: "Services for working with Web Audio Api"
              }, {id: 2, data: "VPS deploy supporting HTTPS, HTTP/2"}, {id: 3, data: "Web Sockets"}, {
                id: 4,
                data: "CI with autodeploy on VPS"
              }],
            technologies: ["Javascript", "Typescript", "ES6", "Webpack", "SASS", "BEM",
              "Web Audio Api", "Websockets", "Routing", "Service worker", "nginx", "HTTP/2", "HTTPS"]
          },
          {
            id: 1,
            title: 'Forum',
            tags: 'Backend',
            description: '— developed REST Api to forum according to swagger docs',
            detailedDescription: 'REST Api written in Go for Technopark.Mail.ru course about databases.',
            img: 'forum.png',
            tagColor: '#5f9ea0', features: [{
              id: 0, data: "Used PostgreSQL, Golang pq driver"
            },
              {
                id: 1, data: "Docker container"
              },
              {
                id: 2, data: "Performance test ended with 1269 RPS"
              }],
            technologies: ["Go", "PostgreSQL", "Docker"]
          },
          {
            id: 2,
            title: 'Mort',
            tags: 'Desktop',
            description: '— original desktop game',
            detailedDescription: 'Desktop platformer game used as final project for course on C++.',
            img: 'mort.png',
            tagColor: '#9aa5ea', features: [{
              id: 0, data: "Inspired by Terry Pratchett's Discworld novels"
            },
              {
                id: 1, data: "Crossplatform (Unix, Windows)"
              }],
          technologies: ["C++", "Qt", "OpenGL", "XML"]
          }
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
    padding-top: 6em;
    padding-bottom: 2em;
    font-size: 1.1em;
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
    .projects-grid {
      font-size: 1.2em;
    }
  }

</style>
