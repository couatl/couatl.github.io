<template>
  <footer class="custom-footer">
    <div class="custom-footer__grid">
      <div class="custom-footer__links">
        <div class="custom-footer__links_github">
          <a href="https://www.facebook.com/nadia.svoykina">
            <font-awesome-icon :icon="['fab', 'facebook-f']"/>
            nadia.svoykina
          </a>
        </div>
        <div class="custom-footer__links_github">
          <a href="https://t.me/couatl">
            <font-awesome-icon :icon="['fab', 'telegram']"/>
            couatl
          </a>
        </div>
      </div>
      <div class="custom-footer__thanks">
        <div class="custom-footer__thanks-title">Thanks:</div>
        <div>
          <a href="https://www.behance.net/seniorsstudio">Seniors Studio</a> for <a
          href="http://www.fontfabric.com/nickainley-free-font">Nickainley free font</a>
        </div>
<div>
  <a href="https://www.behance.net/seniorsstudio">???</a> for <a
  href="http://www.fontfabric.com/nickainley-free-font">cathedral Icon</a>
</div>
      </div>
    </div>
  </footer>
</template>


<style>
  footer {
    background-color: #292929;
    color: white;
    padding: 2em;
    text-align: center;
  }

  footer a {
    color: white;
  }

  footer a:hover {
    text-decoration: underline;
  }

  .custom-footer {

  }

  .custom-footer__grid {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .custom-footer__links {

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .custom-footer__thanks {
    width: 60%;
  }

  .custom-footer__links_github {
    margin-top: 0.5em;
    text-align: left;
  }

  .custom-footer__thanks-title {
    font-style: italic;
  }
</style>
