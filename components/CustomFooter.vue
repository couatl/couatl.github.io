<template>
  <footer class="custom-footer">
    <div class="custom-footer__grid">
      <div class="custom-footer__name">
        Svoykina <br/>
        Nadya
      </div>
      <div class="custom-footer__thanks">
        <div class="custom-footer__thanks-title">Thanks:</div>
        <div>
          <a href="https://www.behance.net/seniorsstudio">Seniors Studio</a> - <a
          href="http://www.fontfabric.com/nickainley-free-font">Nickainley font</a>
        </div>
<div><a href="http://www.fontfabric.com/nickainley-free-font">Cathedral Icon</a>
</div>
      </div>
      <div class="custom-footer__links">
        <div class="custom-footer__links_item">
          <a href="https://www.facebook.com/nadia.svoykina">
            <font-awesome-icon :icon="['fab', 'facebook-f']"/>
          </a>
        </div>
        <div class="custom-footer__links_item">
          <a href="https://t.me/couatl">
            <font-awesome-icon :icon="['fab', 'telegram']"/>
          </a>
        </div>
        <div class="custom-footer__links_item">
          <a href="https://github.com/couatl">
            <font-awesome-icon :icon="['fab', 'github']"/>
          </a>
        </div>
        <div class="custom-footer__links_item">
          <a href="https://www.instagram.com/couatl/">
            <font-awesome-icon :icon="['fab', 'instagram']"/>
          </a>
        </div>

      </div>
    </div>
  </footer>
</template>


<style>
  footer {
    background-color: #732a2f;
    color: white;
    padding: 2em;
    text-align: center;
  }

  footer a {
    color: rgba(255, 255, 255, .6);
  }

  footer a:hover {
    color: rgba(255, 255, 255, .8);
  }

  .custom-footer {
    color: rgba(255, 255, 255, .6);
  }

  .custom-footer__name {
    text-transform: uppercase;
    color: rgba(255, 255, 255, .4);
    letter-spacing: 8px;
    text-align: left;
    font-size: 1.2em;
    cursor: default;
  }

  .custom-footer__grid {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .custom-footer__links {
    display: flex;
    justify-content: center;
    flex-direction: row;
    font-size: 1.8em;
  }

  .custom-footer__thanks {
    width: 60%;
    text-align: left;
  }

  .custom-footer__links_item {
    margin-top: 0.5em;
    margin-left: 0.7em;
    text-align: left;
  }

  .custom-footer__thanks-title {
    font-style: italic;
  }

  @media (max-width: 680px) {
    .custom-footer__name {
      display: none;
    }
  }
</style>
