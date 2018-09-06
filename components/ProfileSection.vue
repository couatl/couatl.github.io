<template>
  <section class="profile">
    <div class="profile__photo"/>
    <div class="profile__info">
      <div class="profile__title">About</div>

      <div class="profile__info_text">
        <div style="font-weight: normal">Hola!</div>
        <div style="margin-bottom: 1em; margin-bottom: 1em;
    background-color: #5d191e;
    padding-left: 2px;
    padding-top: 0.5em;
    padding-bottom: 0.5em;">
          I am Web Developer with knowledge of Cybersecurity. <br/> Currently living in
          <font-awesome-icon icon="map-marker-alt"/>
          Moscow.
        </div>
        <div style="font-weight: normal">
          <cathedral-icon class="profile__cathedral-icon"/>

          I started studying Web development during course on highload systems by Mail.ru a year ago and found myself
          really passionate about it.
          Especially I loved frontend development.
          <br/> Later I continued learning modern frameworks on my own which I liked. So I always prefer using them in
          my projects.
          <br/>
          <br/>
          Also I am now an Information Security student.
        </div>
      </div>

      <div class="profile__info_buttons">
        <!--Социальные сети!-->
        <div class="social-icons">
          <a href="https://www.facebook.com/nadia.svoykina">
            <font-awesome-icon :icon="['fab', 'facebook-f']"/>
          </a>
          <a href="https://vk.com/po_dushka">
            <font-awesome-icon :icon="['fab', 'vk']"/>
          </a>
          <a href="https://github.com/couatl">
            <font-awesome-icon :icon="['fab', 'github']"/>
          </a>
          <a href="https://t.me/couatl">
            <font-awesome-icon :icon="['fab', 'telegram']"/>
          </a>
        </div>

        <div class="download-button">
          <a href="svoykina_ru.pdf"><font-awesome-icon style="margin-right: 0.5em" icon="file-pdf"/>Download Resume</a>
        </div>
      </div>
    </div>
  </section>
</template>
<!--<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>-->

<script>
  // TODO: click download in new tab!
  // TODO: MOBILE
  import CathedralIcon from '~/components/CathedralIcon.vue'

  export default {
    components: {
      CathedralIcon
    }
  }
</script>


<style>
  .profile {
    display: flex;
    background-color: #732a2f;
    color: white;
    padding: 0;
  }

  .profile__title {
    font-family: Nickainley, sans-serif;
    text-align: center;
    margin-bottom: 0.5em;
    font-size: 3em;
  }

  .profile__photo {
    width: 50%;
    min-height: 40em;
    background: url('../static/profile-photo.png') no-repeat top center;
    background-size: cover;
  }

  .profile__info {
    margin: auto;
    padding: 2em;
    width: 50%;
  }

  .profile__info_text {
    display: flex;
    flex-direction: column;
    font-weight: 600;
  }

  .profile__info_text div {
    margin-bottom: 0.5em;
  }

  .profile__cathedral-icon {
    height: 10em;
    float: right;
    margin: 10px;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    font-size: 1.5em;
  }

  .social-icons a {
    color: white;
    margin: 0.5em;
  }

  .download-button {
    margin: 1em;
    text-align: center;
    font-weight: bold;
  }

  .download-button a:hover {
    background-color: white;
    color: #732a2f;
  }

  .download-button a {
    padding: 0.5em;
    letter-spacing: 1px;
    border-radius: 5px;
    border: solid 1px white;
    color: white;
    transition: all 0.3s;
  }

  .download-button a i {
    margin-right: 0.4em;
  }

  @media (max-width: 680px) {
    .profile {
      flex-direction: column;
    }

    .profile__photo {
      display: block;
      width: 100%;
      min-height: 25em;
      margin-top: 0.5em;
    }

    .profile__info {
      width: 100%;
    }
  }
</style>
