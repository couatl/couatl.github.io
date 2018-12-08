<template>
  <div class="root">
    <section class="contact">
      <div class="contact__body">
        <div class="contact__title">Contact</div>
        <div class="contact__description">— say hi!</div>
        <div class="contact__info">
          I love to develop and always eager to learn something new. If you want to discuss a project or want to find out more about me or my work, get in touch!
          <br/>
          <br/>
          Svoykina Nadya <br/>
          Moscow, Russia
        </div>
        <br/>
        <b>Email</b>
        <a class="contact__email" href="mailto:nadya.svojkina@gmail.com">nadya.svojkina@gmail.com</a>
        <div class="contact__links">
          <div class="contact__links_item">
            <a href="https://www.facebook.com/nadia.svoykina">
              <font-awesome-icon :icon="['fab', 'facebook-f']"/>
            </a>
          </div>
          <div class="contact__links_item">
            <a href="https://t.me/couatl">
              <font-awesome-icon :icon="['fab', 'telegram']"/>
            </a>
          </div>
          <div class="contact__links_item">
            <a href="https://github.com/couatl">
              <font-awesome-icon :icon="['fab', 'github']"/>
            </a>
          </div>

          <div class="contact__links_item">
            <a href="https://www.instagram.com/couatl/">
              <font-awesome-icon :icon="['fab', 'instagram']"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import ProjectsSection from '~/components/ProjectsSection.vue'
  import CustomFooter from '~/components/CustomFooter.vue'

  export default {
    components: {
      CustomFooter
    }
  }
</script>

<style>
  .contact {
    display: flex;
    /*background: #f3f5f7;*/

    height: 100vh;
    width: 100vw;
    font-size: 1.2em;

    padding: 4em;
    /*box-shadow: inset 0 0 0 0.3em #732a2f;*/
  }

  .contact__body {
    display: block;
    margin: auto;
    padding: 4em;
    width: -moz-fit-content;
    width: fit-content;
    color: white;
    max-width: 55em;
    background: #732a2f;
  }

  .contact__title {
    display: block;
    font-family: Nickainley, sans-serif;
    text-align: left;
    font-size: 3em;
  }

  .contact__main {
    display: block;
  }

  .contact__email {
    display: block;
  }
  .contact__description {

    letter-spacing: 2px;
    margin-bottom: 1em;
  }

  .contact__links {
    display: flex;
    flex-direction: row;
    font-size: 1.8em;
  }

  .contact__links a {
    color: white;
  }

  .contact__links_item {
    margin-top: 0.5em;
    margin-right: 0.7em;
    text-align: left;
  }

  .contact__body a{
    color: white;
    width: fit-content;
  }

  @media (max-width: 680px) {
    .contact {
      padding: 0;
    }
  }
</style>
