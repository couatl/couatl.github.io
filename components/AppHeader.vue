<template>
  <header>
    <div class="navbar">
      <div class="navbar__link"><a href="#about">About</a></div>
      <span>/</span>
      <div class="navbar__link"><a href="#projects">Projects</a></div>
      <span>/</span>
      <div class="navbar__link"><a href="#contact">Contact</a></div>
    </div>
    <div class="lang">
      <div class="lang__ru">Русский</div>
      <span>/</span>
      <div class="lang__eng">eng</div>
    </div>
  </header>
</template>

<style>
  header {
    position: fixed;
    top: 1em;
    left: 1em;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .navbar {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 0.7em;
  }

  .navbar div {
    display: inline;
    margin: 0.5em;
  }

  .navbar a {
    color: black;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    transition: all 250ms ease;
  }

  .navbar a:hover {
    color: darkred;
    box-shadow: 0 2px darkred;
  }

  .lang {
    text-transform: uppercase;
    font-size: 0.6em;
    line-height: 31px;
    margin-right: 6em;
  }

  .lang div {
    display: inline;
    margin: 0.5em;
    transition: all 250ms ease;

    cursor: pointer;
  }

  .lang div:hover {
    color: darkred;
    box-shadow: 0 2px darkred;
  }
</style>
