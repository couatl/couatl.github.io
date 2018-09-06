<template>
  <!-- Skills Section -->
  <section id="skills" class="skills">
    <div class="skills__title wow fadeInUp">Skills</div>

    <ul class="skills-list">
      <li>
        <div class="skills-list__icon wow zoomIn"><i class="fa fa-globe"></i></div>
        <div class="skills-list__head">Frontend / Advanced</div>
        <div class="skills-list__body">
          <div class="skills-list__body_item">
            <i class="devicon-nodejs-plain colored"></i>
            ES6, Typescript
          </div>

          <div class="skills-list__body_item">
            <i class="devicon-react-original colored"></i>
            React, Redux
          </div>

          <div class="skills-list__body_item">
            <i class="devicon-react-original colored"></i>
            Vue.js
          </div>

          <div class="skills-list__body_item">
            <i class="devicon-sass-original colored"></i>
            CSS3.0, Sass
          </div>

          <div class="skills-list__body_item">
            <i class="devicon-webpack-plain colored"></i>
            <i class="devicon-babel-plain colored"></i>
            Webpack, Babel
          </div>

          <div class="skills-list__body_item">
            <i class="devicon-webpack-plain colored"></i>
            <i class="devicon-babel-plain colored"></i>
            Photoshop, Illustrator
          </div>
        </div>
      </li>
      <li>
        <div class="skills-list__icon wow zoomIn"><i class="fa fa-code"></i></div>
        <div class="skills-list__head">Backend / Very good</div>
        <div class="skills-list__body">
          <div class="skills-list__body_item">
            <i class="devicon-javascript-plain colored"></i>
            Python, Golang
          </div>
          <div class="skills-list__body_item">
            <i class="devicon-typescript-plain colored"></i>
            Node.js
          </div>
          <div class="skills-list__body_item">
            <i class="devicon-go-line colored"></i>
            PostgreSQL
          </div>
          <div class="skills-list__body_item">
            <i class="devicon-python-plain colored"></i>
            MongoDB
          </div>
          <div class="skills-list__body_item">
            <i class="devicon-cplusplus-plain colored"></i>
            Elasticsearch
          </div>
        </div>
      </li>
      <li>
        <div class="skills-list__icon wow zoomIn"><i class="fa fa-desktop"></i></div>
        <div class="skills-list__head">DevOPS / Good</div>
        <div class="skills-list__body">
          <div class="skills-list__body_item">
            <i class="devicon-github-plain colored"></i>
            Github, Bitbucket
          </div>
          <div class="skills-list__body_item">
            <i class="devicon-docker-plain colored"></i>
            Docker
          </div>
          <div class="skills-list__body_item">
            <i class="devicon-travis-plain colored"></i>
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

  .skills-list__icon {
    color: #b8641f;
    font-size: 3em;
    text-align: center;
  }

  .skills-list__head {
    margin-top: 0.5em;
    margin-bottom: 1em;
    text-align: center;
    font-weight: 500;
    color: #4f504f;
  }

  .skills-list__body {
    text-align: center;
    color: #4f504f;
    background-color: #fdf9f9eb;
    border-radius: 40px;
    padding: 1em 1em 1em 2em;
    margin: auto;
    margin-bottom: 1em;
    width: 15em;
    max-width: 80%;
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
