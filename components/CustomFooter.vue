<template>
  <footer class="custom-footer">
    <div class="custom-footer__grid">
      <div class="custom-footer__links">
        email, github
      </div>
      <div class="custom-footer__thanks">
        Thanks <a href="https://www.behance.net/seniorsstudio">Seniors Studio</a> for <a
        href="http://www.fontfabric.com/nickainley-free-font">Nickainley free font</a>
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

  }

  .custom-footer__thanks {

  }
</style>
