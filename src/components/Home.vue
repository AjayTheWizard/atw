<template>
  <div class="box" id="home">
    <div class="hero">
      <p>Learn Something new Everyday</p>
      <p>Until Death</p>
    </div>
    <svg
      class="volt"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
</template>
<style lang="postcss">
.box#home {
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-inline:var(--size-4) ;
    @media (min-width: 450px) {
      padding-inline: var(--size-7);
    }
  font-weight: 700;
  flex-direction: column;
  font-size: var(--font-size-4);
  @media (min-width: 450px) {
    font-size: var(--font-size-5);
  }
  @media (min-width: 1024px) {
    font-size: var(--font-size-6);
  }
  & .hero {
    line-height: 1.3;
    margin-block: auto;
  }
  & > .volt {
    --svg-size-1: 4rem;
    left: 40%;
    position: relative;
    margin-inline: auto;
    bottom: 10%;
    width: var(--svg-size-1);
    height: var(--svg-size-1);
    color: var(--yellow-5);
    stroke: #000;
    @media (min-width: 1024px) {
      --svg-size-1: 50%;
      left: unset;
    }
  }
}
</style>
