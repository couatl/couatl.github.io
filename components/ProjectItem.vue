<template>
  <div class="project-item">
    <div class="project-item__up">
      <div class="project-item__up-left">
        <div class="project-item__title">
          {{ project.title }}
        </div>
        <div class="project-item__description">
          {{ project.description }}
        </div>
        <div class="project-item__tag" :style="tagStyle">
          {{ project.tags }}
        </div>
        <div class="project-item__detailed-description">
          Browser game based on the broken phone game. Supporting multiplayer mode and offline singleplayer. You sing -
          we reverse your song - your friend guess what it was.
        </div>
        <div class="project-item__up-subtitle">
          Features:
          <div class="project-item__up-feature-item" v-for="item in project.features" v-bind:key="item.id">
            {{ item.data }}
          </div>
        </div>
        <div class="project-item__up-subtitle">
          Technologies:
          <div class="project-item__up-tech-item" v-for="(item, index) in project.technologies" v-bind:key="index">
            {{ item }}
          </div>
        </div>
      </div>
    </div>

    <div class="project-item__right">
      <div class="project-item__browser-tab-bar">
        <ul class="window-controls">
          <li class="window-control window-control-red"></li>
          <li class="window-control window-control-orange"></li>
          <li class="window-control window-control-green"></li>
        </ul>
      </div>
      <img class="project-item__img" v-bind:src="project.img"/>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['project'],
    computed: {
      tagStyle() {
        return 'background-color: ' + this.project.tagColor;
      }
    }
  }
</script>
<style>

  .project-item__right {
    display: block;
    width: 90%;
  }

  .project-item__tag {
    color: white;
    display: inline;
    font-weight: 600;
    margin-left: 0.3em;
    padding-left: 0.3em;
    padding-right: 0.3em;
  }

  .project-item {
    margin: 1em;
    display: block;
    display: flex;
    justify-content: space-between;
    /*width: 45%;*/
  }

  .project-item__title {
    font-weight: 700;
    font-size: 2em;
    display: block;
  }

  .project-item__up {
    display: flex;
    margin-bottom: 1em;
    justify-content: space-between;
    margin-right: 1em;
  }

  .project-item__up-right {
    margin: auto 0 auto auto;
  }

  .project-item__description {
    display: inline;
    line-height: 1.7em;
    color: rgba(0, 0, 0, 0.6);
  }

  .project-item__detailed-description {
    color: rgba(0, 0, 0, 0.6);
    margin-top: 1em;
  }

  .project-item__img {
    filter: none;
    position: relative;
    transition: all .3s ease;
    width: 100%;
    /*box-shadow: -1px 15px 30px -12px #00000047;*/
    /*border-bottom-left-radius: 6px;*/
    /*border-bottom-right-radius: 6px;*/
    border: 10px solid #EEEEEE;
    border-top: none;
  }

  .project-item__more {
    display: inline-block;
    margin-top: -3em;
    color: white;
    font-size: 1.2em;
    border: 2px solid rgba(255, 255, 255, 0.63922);
    border-radius: 40px;
    width: 4.5em;
    text-align: center;
    font-weight: 600;
    margin-left: 1em;
    cursor: pointer;
    transition: all .3s ease;

    display: none;
  }

  .project-item__up-subtitle {
    display: block;

    color: rgba(0, 0, 0, 0.6);
    font-weight: 700;
    margin-top: 1em;
  }

  .project-item__more:hover {
    opacity: 0.7;
  }

  .project-item__up-feature-item {
    display: block;
    font-weight: normal;
  }

  .project-item__up-tech-item {
    display: inline;
    color: #370f10;
    font-weight: normal;
    background: rgba(111, 79, 82, 0.14118);
    margin-left: 10px;
    padding: 3px 5px;
    line-height: 2.2em;
  }

  .project-item__img:hover {
    /*filter: contrast(50%) grayscale(1);*/
  }

  .project-item__browser-tab-bar {
    height: 25px;
    line-height: 20px;
    background-color: #EEEEEE;
    /*border-top-left-radius: 6px;*/
    /*border-top-right-radius: 6px;*/
    margin-top: 5px;
  }

  .project-item__browser-tab-bar .window-controls {
    list-style: none;
    padding: 0;
    margin: 0 0 0 5px;
  }

  .project-item .window-control {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
    box-sizing: border-box;
  }

  .project-item .window-control:last-child {
    margin-right: 0;
  }

  .project-item .window-control.window-control-red {
    background-color: #EE5C55;
    border: 1px solid #e93027;
  }

  .project-item .window-control.window-control-orange {
    background-color: #F8BC32;
    border: 1px solid #efa908;
  }

  .project-item .window-control.window-control-green {
    background-color: #62CB43;
    border: 1px solid #4cac2f;
  }

  @media (max-width: 680px) {
    .project-item {
      width: 100%;
      flex-direction: column;
    }
  }
</style>
