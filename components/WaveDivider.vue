
<template>
  <div class="wave-divider">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1170 193">
      <path d="M1175 131.2c0 0-81-89.4-224.3-103.4S713 72 665 97c-86 46-148 63-271 7C221.7 25.5 56 104.5-4 197.4 -4 58.7-3.3 0.3-3.3 0.3L1175 0V131.2z"></path>
    </svg>
  </div>
</template>

<style>
  .wave-divider svg path {
    fill: #732a2f;
  }

  .wave-divider svg {
    transform: scale(1.1);
  }

  .wave-divider {
    overflow: hidden;
    background-color: #e6e6e6;
  }

  @media screen and (min-width: 1024px) {
    .wave-divider svg {
      transform: scale(1.3);
    }
  }
</style>

