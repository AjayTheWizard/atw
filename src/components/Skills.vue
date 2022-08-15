<template>
  <div class="box" id="skill">
    <div class="list">
      <h1 id="skills">Skills</h1>
      <div class="item">
        Proficiency with Modern Programming languages, Frameworks and Libraries
        like Vue, React, Svelte
      </div>
      <div class="item">
        Learning concepts and applying them to other problems with
        Problem-solving capability and Mathematical skills
      </div>
      <div class="item">Good in Communication and writing skills</div>
    </div>
  </div>
</template>
<style lang="postcss">
.box#skill {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: center;
  scroll-margin-top: 5rem;
  margin-bottom: 4rem;
  & > #skills {
    font-size: var(--font-size-3);
  }
  & > .list {
    padding-inline: 10%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: var(--font-size-4);
    & > .item {
      font-weight: 400;
      line-height: var(--font-lineheight-3);
      font-size: var(--font-size-1);
      @media (min-width: 450px) {
        font-size: var(--font-size-3);
      }
      @media (min-width: 1024px) {
        font-size: var(--font-size-4);
      }
    }
  }
}
</style>
