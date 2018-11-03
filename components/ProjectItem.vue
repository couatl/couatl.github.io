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
      </div>
      <div class="project-item__up-right">
        <div class="project-item__more" :style="tagStyle">More</div>
      </div>
    </div>

    <div class="project-item__browser-tab-bar">
      <ul class="window-controls">
        <li class="window-control window-control-red"></li>
        <li class="window-control window-control-orange"></li>
        <li class="window-control window-control-green"></li>
      </ul>
    </div>
    <img class="project-item__img" v-bind:src="project.img"/>
  </div>
</template>
<script>
  export default {
    props: ['project'],
    computed: {
      tagStyle () {
        return 'background-color: ' + this.project.tagColor;
      }
    }
  }
</script>
<style>
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
    width: 45%;
  }

  .project-item__title {
    font-weight: 700;
    display: inline;
  }

  .project-item__up {
    display: flex;
    justify-content: space-between;
  }

  .project-item__description {
    display: inline;
  }

  .project-item__img {
    filter: none;
    position: relative;
    transition: all .3s ease;
    width: 100%;
    box-shadow: -1px 15px 30px -12px #00000047;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
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
  }

  .project-item__more:hover {
    opacity: 0.7;
  }


  .project-item__img:hover {
    /*filter: contrast(50%) grayscale(1);*/
  }

  .project-item__browser-tab-bar {
    height: 20px;
    line-height: 20px;
    background-color: #EEEEEE;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
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
    margin-right: 3px;
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
    }
  }
</style>
