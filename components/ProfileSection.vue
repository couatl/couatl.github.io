<template>
  <section id="about" class="profile">
    <div class="navbar__background"></div>
    <div class="profile__photo"/>
    <div class="profile__info">
      <div class="profile__name">I'm Svoykina Nadya</div>
      <div class="profile__title">Frontend developer</div>

      <div class="profile__info_text">
        <div
          style="margin-bottom: 1em; margin-bottom: 1em; background-color: #5d191e; padding-left: 2px; padding-top: 0.5em; padding-bottom: 0.5em; text-align: center;">
          I am Frontend developer with 4+ years of experience. <br/> Currently living in
          <font-awesome-icon icon="map-marker-alt"/>
          Moscow.
        </div>
        <div style="font-weight: normal">
          <cathedral-icon class="profile__cathedral-icon"/>
          I worked a lot with React & Redux, have a big experience in onboarding, mentoring and technical interviewing.
          <br/>
          <br/>
          <a class="profile__email" href="mailto:nadya.svojkina@gmail.com">nadya.svojkina@gmail.com</a>
          <a class="profile__linkedin" href="https://www.linkedin.com/in/n-svoykina/">www.linkedin.com/in/n-svoykina/</a>
          <div class="profile__links">
            <div class="profile__links_item">
              <a href="https://t.me/couatl">
                <font-awesome-icon :icon="['fab', 'telegram']"/>
              </a>
            </div>
            <div class="profile__links_item">
              <a href="https://github.com/couatl">
                <font-awesome-icon :icon="['fab', 'github']"/>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="profile__info_buttons">
        <div class="download-button">
          <a href="CvSvoykina.pdf">
            <font-awesome-icon style="margin-right: 0.5em" icon="file-pdf"/>
            Download CV</a>
        </div>
      </div>
    </div>
  </section>
</template>
<!--<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>-->

<script>
  // TODO.md: click download in new tab!
  // TODO.md: MOBILE
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
    /*padding: 1em;*/
    /*padding-top: 5em;*/
    min-height: 65em;
    height: 100vh;
    /*box-shadow: inset 0 0 0 1em #ffffff;*/
  }

  .profile__title {
    font-family: Nickainley, sans-serif;
    text-align: left;
    margin-bottom: 0.5em;
    font-size: 3em;
  }

  .profile__photo {
    width: 50%;
    background: url('../static/profile-photo.png') no-repeat center center;
    background-size: cover;
  }

  .profile__info {
    margin: auto;
    padding: 2em;
    width: 50%;
    font-size: 1.1em;
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

  .download-button {
    text-align: center;
    font-weight: bold;
    margin: 3em 1em 1em;
  }

  .download-button a:hover {
    background-color: white;
    color: #732a2f;
  }

  .download-button a {
    transition: all 0.3s;
    border: solid 1px white;
    color: white;
    padding: .85rem 1.85rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-decoration: none;
    border-radius: 5rem;
    cursor: pointer;
  }

  .download-button a i {
    margin-right: 0.4em;
  }

  .profile__email, .profile__linkedin {
    display: block;
    color: white;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .profile__links {
    display: flex;
    flex-direction: row;
    font-size: 1.8em;
  }

  .profile__links a {
    color: white;
  }

  .profile__links_item {
    margin-top: 0.5em;
    margin-right: 0.7em;
    text-align: left;
  }

  @media (max-width: 750px) {
    .profile {
      flex-direction: column;
      height: fit-content;
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

    .navbar__background {
      display: none;
    }
  }

  .navbar__background {
    height: 4em;
    margin-top: 1em;
    position: absolute;
    width: 100%;
    background: #ffffff63;
  }

  .profile__name {
    letter-spacing: 2px;
    color: rgba(255, 255, 255, .8);

  }
</style>
