<template>
  <div class="arrow-down">
    <div class="arrow-down__text">
      About
    </div>
    <img src="up.png" class="arrow-down__icon"/>
  </div>
</template>
<style>
  .arrow-down {
    display: flex;
    position: absolute;
    left: 1em;
    bottom: 1.5em;
    flex-direction: column;
    cursor: pointer;
    z-index: 100;
  }

  .arrow-down:hover {
    color: darkred;
  }

  .arrow-down__icon {
    width: 50px;
    height: 50px;
    transform: rotate(180deg);
    transition: all 250ms ease;
  }

  .arrow-down__icon:hover {
    transform: rotate(180deg) translateY(-10px);
  }

  .arrow-down__text {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 300;
    font-size: 0.7em;
    writing-mode: vertical-rl;
    text-orientation: inherit;
    margin-bottom: 10px;
    line-height: 50px;
    -webkit-transform: rotate(180deg);
    transition: all 250ms ease;
  }
</style>
