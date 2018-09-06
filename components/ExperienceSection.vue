<template>
  <section class="resume">
    <div class="resume__title">Experience & Education</div>

    <div class="resume__timeline">
      <div class="resume__timeline_block">
        <div class="resume__timeline-img resume__timeline-picture">
        </div>

        <div class="resume__timeline_content">
          <h2>Sberbank Technologies</h2>
          <div class="timeline-content-info">
          <div class="timeline-content-info-title">
            <font-awesome-icon icon="certificate"/>Front End Developer
          </div>
            <div class="timeline-content-info-date">
              <font-awesome-icon icon="calendar-alt"/>June 2018 - August 2018
          </div>
          </div>
          <p>Created web app for clustering analysis from scratch. Besides default pages app included dashboard page with analytic graphs and search interface for Elasticsearch. <br/> Another part of the job was creating rest-interface for django-backend using django-rf and connecting to MongoDB. </p>
          <ul class="content-skills">
            <li>TypeScript</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>ElasticSearch</li>
            <li>Django Rest Framework</li>
          </ul>
        </div> <!-- cd-timeline-content -->
      </div>

      <div class="resume__timeline_block">
        <div class="resume__timeline-img resume__timeline-picture">
        </div>

        <div class="resume__timeline_content">
          <h2>Technopark Mail.ru</h2>
          <div class="timeline-content-info">
            <div class="timeline-content-info-title">
              <font-awesome-icon icon="certificate"/>Student of System Architect
            </div>
            <div class="timeline-content-info-date">
              <font-awesome-icon icon="calendar-alt"/>2017 - 2018
            </div>
          </div>
          <p>Technopark included two semesters of studying web development, each semester considered final project created in a team. You can check projects in section Projects.</p>
          <ul class="content-skills">
            <li>Web</li>
            <li>Highload</li>
            <li>PostgreSQL</li>
            <li>C++</li>
            <li>Python</li>
          </ul>
        </div> <!-- cd-timeline-content -->

      </div>

      <div class="resume__timeline_block">
        <div class="resume__timeline-img resume__timeline-picture">
        </div>

        <div class="resume__timeline_content">
          <h2>Bauman Moscow State University</h2>
          <div class="timeline-content-info">
            <div class="timeline-content-info-title">
              <font-awesome-icon icon="certificate"/>Information Security Student
            </div>
            <div class="timeline-content-info-date">
              <font-awesome-icon icon="calendar-alt"/>2015 - Now
            </div>
          </div>
          <p>Now I am 4th year student. Average score is 4.8 (out of 5). </p>
          <ul class="content-skills">
            <li>Algorithms & Data Structures</li>
            <li>Linear Algebra</li>
            <li>Discrete Math</li>
            <li>C++</li>
          </ul>
        </div> <!-- cd-timeline-content -->

      </div>
    </div>
  </section>
</template>

<style>
  .resume {
    background-color: rgba(102, 15, 27, 0.9);
    padding: 2em;
    color: white;
    margin-bottom: -2px;
  }

  .resume__title {
    font-family: Nickainley, sans-serif;
    text-align: center;
    margin-bottom: 0.5em;
    font-size: 3em;
  }

  .resume__timeline {
    position: relative;
    padding: 2em 0;
    margin-top: 2em;
    margin-bottom: 2em;
  }

  .resume__timeline::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 4px;
    background: white;
  }

  @media only screen and (min-width: 850px) {
    .resume__timeline {
      margin-top: 3em;
      margin-bottom: 3em;
    }

    .resume__timeline::before {
      left: 50%;
      margin-left: -2px;
    }
  }

  .resume__timeline_block {
    position: relative;
    margin: 2em 0;
  }

  .resume__timeline_block:after {
    content: "";
    display: table;
    clear: both;
  }

  .resume__timeline_block:first-child {
    margin-top: 0;
  }

  .resume__timeline_block:last-child {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 850px) {
    .resume__timeline_block {
      margin: 4em 0;
    }

    .resume__timeline_block:first-child {
      margin-top: 0;
    }

    .resume__timeline_block:last-child {
      margin-bottom: 0;
    }
  }

  .resume__timeline-img {
    position: absolute;
    top: 8px;
    left: -10px;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    background: white;
  }

  @media only screen and (min-width: 850px) {
    .resume__timeline-img {
      width: 30px;
      height: 30px;
      left: 50%;
      margin-left: -15px;
      margin-top: 15px;
      transform: translateZ(0);
    }
  }

  .resume__timeline_content {
    position: relative;
    background: #561e21;
    border-radius: 2px;
    padding: 1em;
    margin-left: 4em;
    margin-right: 0em;
  }

  .timeline-content-info {
    color: #ffffffb3;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  .timeline-content-info svg, .timeline-content-info-date svg   {
    margin-right: 10px;
  }

  .resume__timeline_content::before {
    content: '';
    position: absolute;
    top: 16px;
    right: 100%;
    height: 0;
    width: 0;
    border: 0.5em solid transparent;
    border-right: 7px solid #561e21;
  }

  .content-skills {
    font-size: 0.9em;
    padding: 0;
    margin-bottom: 0;
    margin-top: 1em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .content-skills li {
    border-radius: 2px;
    border: solid 1px #cbbabda6;
    display: inline-block;
    padding: 2px 10px;
    margin: 3px 2px;
    text-align: center;
    flex-grow: 1;
  }

  .resume__timeline_content:after {
    content: "";
    display: table;
    clear: both;
  }

  @media only screen and (min-width: 850px) {
    .resume__timeline_content {
      color: white;
      margin: 0;
      padding: 1.6em;
      width: 45%;
    }

    .resume__timeline_content::before {
      top: 24px;
      left: 100%;
      border-color: transparent;
      border-left-color: #561e21;
    }

    .resume__timeline_block:nth-child(even) .resume__timeline_content {
      float: right;
    }

    .resume__timeline_block:nth-child(even) .resume__timeline_content::before {
      top: 24px;
      left: auto;
      right: 100%;
      border-color: transparent;
      border-right-color: #561e21;
    }
  }
</style>
