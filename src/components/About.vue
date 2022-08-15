<template>
  <div class="box" id="about">
    <h1>About</h1>
    <h3>
      Hi I'm Ajay Raja from India. I'm 16. I had been coding till 15. My Role
      model is <a href="https://github.com/yyx990803">Evan You</a>, The Creator of Vue
    </h3>
  </div>
</template>
<style lang="postcss">
.box#about {
  font-size: var(--font-size-5);
  width: 100%;
  @media (min-width: 1024px){
    scroll-margin-bottom: unset;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline: 1rem;
  & > h1 {
    margin-top: 1rem;
    font-size: var(--font-size-5);
  }
  & a {
    color: inherit;
    text-decoration: none;
    font-weight: 800;
  }
  & > h3::first-letter {
    font-size: var(--font-size-3);
    color: var(--orange-5);
    @media (min-width: 450px) {
      font-size: var(--font-size-5);
    }
    @media (min-width: 1024px) {
      font-size: var(--font-size-6);
    }
  }
  & > h3 {
    font-weight: 400;
    line-height: var(--font-lineheight-3);
    font-size: var(--font-size-2);
    @media (min-width: 450px) {
      font-size: var(--font-size-4);
    }
    @media (min-width:1024px) {
      font-size: var(--font-size-5);
    }
  }
}
</style>
