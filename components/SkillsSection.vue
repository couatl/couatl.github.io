<template>
  <!-- Skills Section -->
  <section id="skills" class="skills">
    <div class="skills__title wow fadeInUp">Skills</div>

    <ul class="skills-list">
      <li>
        <div class="skills-list__icon wow zoomIn"><i class="fa fa-globe"></i></div>
        <div class="skills-list__head">Frontend</div>
        <div class="skills-list__body">
          <div class="skills-list__body_item">
            <font-awesome-icon style="color: #f0db4f" :icon="['fab', 'js-square']"/>
            ES6, Typescript
          </div>

          <div class="skills-list__body_item">
            <font-awesome-icon style="color: #61dafb" :icon="['fab', 'react']"/>
            React, Redux
          </div>

          <div class="skills-list__body_item">
            <font-awesome-icon style="color: #54b882" :icon="['fab', 'vuejs']"/>
            Vue.js
          </div>

          <div class="skills-list__body_item">
            <font-awesome-icon style="color: #1f71b6" :icon="['fab', 'css3']"/>
            CSS3.0, Sass
          </div>

          <div class="skills-list__body_item">
            <font-awesome-icon style="color: #2178c0" icon="boxes"/>
            Webpack, Babel
          </div>

          <div class="skills-list__body_item">
            <font-awesome-icon icon="desktop"/>
            Photoshop, Illustrator
          </div>
        </div>
      </li>
      <li>
        <div class="skills-list__icon wow zoomIn"><i class="fa fa-code"></i></div>
        <div class="skills-list__head">Backend</div>
        <div class="skills-list__body">
          <div class="skills-list__body_item">
            <font-awesome-icon style="color: #ffd845" icon="code"/>
            Python, Golang
          </div>
          <div class="skills-list__body_item">
            <font-awesome-icon style="color: #83CD29" :icon="['fab', 'node-js']"/>
            Node.js
          </div>
          <div class="skills-list__body_item">
            <font-awesome-icon style="color: #336691" icon="file-code"/>
            PostgreSQL
          </div>
          <div class="skills-list__body_item">
            <font-awesome-icon style="color: #50aa41" icon="file-code"/>
            MongoDB
          </div>
          <div class="skills-list__body_item">
            <font-awesome-icon style="color: #51bcb3" icon="file-code"/>
            Elasticsearch
          </div>
        </div>
      </li>
      <li>
        <div class="skills-list__icon wow zoomIn"><i class="fa fa-desktop"></i></div>
        <div class="skills-list__head">DevOPS</div>
        <div class="skills-list__body">
          <div class="skills-list__body_item">
            <font-awesome-icon style="color: #ee4e30" :icon="['fab', 'git']"/>
            Github, Bitbucket
          </div>
          <div class="skills-list__body_item">
            <font-awesome-icon style="color: #019bc6" :icon="['fab', 'docker']"/>
            Docker
          </div>
          <div class="skills-list__body_item">
            <font-awesome-icon icon="file-code"/>
            Travis CI
          </div>
        </div>
      </li>
    </ul>
  </section><!-- End Skills Section -->
</template>

<style>
  .skills {
    z-index: 10;
    position: relative;
    background-color: #e6e6e6;
    padding-bottom: 1em;
  }


  .skills__title {
    font-family: Nickainley, sans-serif;
    text-align: center;
    margin-bottom: 0.5em;
    font-size: 3em;
  }

  .skills-list {
    display: flex;
    font-size: 1.1em;
    z-index: 3;
    position: relative;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }

  .skills-list li {
    margin: auto;
    width: 20em;
  }

  .skills-list__body svg {
    margin-right: 0.3em;
  }

  .skills-list__icon {
    color: #b8641f;
    font-size: 3em;
    text-align: center;
  }

  .skills-list__head {
    margin-top: 0.5em;
    margin-bottom: 1em;
    text-align: center;
    font-weight: 600;
    font-size: 1.2em;
  }

  .skills-list__body {
    text-align: center;
    background-color: rgba(253, 249, 249, 0.92157);
    border-radius: 0.5em;
    padding: 1em 1em 1em 2em;
    margin: auto;
    margin-bottom: 1em;
    width: 25em;
    max-width: 80%;
    box-shadow: -1px 15px 30px -12px #00000047;
  }

  .skills-list__body_item {
    margin-bottom: 0.5em;
    display: flex;
    justify-content: left;
    align-items: center;
  }

  .skills-list__body_item i {
    margin-right: 0.5em;
  }

  @media (max-width: 680px) {
    .skills {
      font-size: 1.3em;
    }

    .skills-list {
      flex-direction: column;
    }

    .skills-list li {
      width: 90%;
    }

    .skills-list__icon {
      font-size: 3em;
    }
  }

</style>
