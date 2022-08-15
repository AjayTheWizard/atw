<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
</script>

<template>
  <Sidebar />
  <div class="mainbar">
    <Home />
    <About/>
    <div class="spacer"></div>
    <Skills/>
  </div>
</template>

<style lang="postcss">
.mainbar {
  margin-right: 0;
  position: absolute;
  scroll-snap-type: y proximity;
  box-shadow: var(--shadow-3);
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%) translateY(15%);
  width: 90vw;
  overflow-y: auto;
  height: 47vh;
  display: grid;
  gap: 1rem;
  color: var(--gray-1);
  scrollbar-color: pink;
  scroll-behavior: smooth;
  border-radius: 8px;

  @media (min-width: 1024px) {
    width: 55vw;
    height: 90vh;
    right: 10%;
    top: 50%;
    transform: translateX(-15%) translateY(-50%);
  }
}
.spacer{
  left: 50%;
  scroll-snap-align: start;
  width: 50vw;
  height: 10vh;
    @media (min-width: 1024px) {
      height: 10vh;
    }
}
.mainbar > .box {
  left: 50%;
  scroll-snap-align: start;
  width: 50vw;
  height: 47vh;
    @media (min-width: 1024px) {
      height: 90vh;
    }
}
</style>
