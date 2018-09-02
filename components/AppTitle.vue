
<template>
  <div style="position: relative">
    <div class="logo__title">
      Svoykina Nadya
    </div>
    <div class="logo__text">
      Web developer
    </div>
    <div class="yellow-blurred-circle-right"/>
    <div class="yellow-blurred-circle"/>
    <div class="orange-circle"/>
    <div class="orange-circle-right"/>
  </div>
</template>

<style>
  .logo__title {
    display: inline-block;
    font-family: Nickainley, sans-serif;
    font-size: 2em;
    transition: all 250ms ease;
  }

  .logo__text {
    width: fit-content;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 300;
    font-size: 0.8em;
    margin-bottom: -4em;
  }


  .yellow-blurred-circle {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    position: absolute;
    filter: blur(5px);
    border: solid 10px darkred;
    left: -1em;
    bottom: -1.5em;
  }

  .yellow-blurred-circle-right {
    border-radius: 100%;
    position: absolute;
    filter: blur(5px);
    width: 70px;
    height: 70px;
    border: solid 20px darkred;
    bottom: -3em;
    left: 4em;
  }

  .orange-circle {
    border-radius: 100%;
    position: absolute;
    width: 100px;
    height: 100px;
    border: solid 15px orange;
    top: 5em;
    left: 0.5em;
  }

  .orange-circle-right {
    border-radius: 100%;
    position: absolute;
    width: 100px;
    height: 100px;
    border: solid 25px orange;
    left: 12em;
    top: 2em;
    opacity: 0.4;
  }

</style>
