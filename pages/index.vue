<template>
  <div class="main">
    <header class="header"></header>
    <article class="ads"></article>
    <nav class="nav"></nav>
    <div class="content">
      <TheBoard/>
      <!--    <Tutorial/>-->
    </div>
    <footer class="footer"></footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheBoard from "~/components/templates/TheBoard.vue";

export default Vue.extend({
  name: 'IndexPage',
  components: {TheBoard}
})
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.main {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav content ads"
    "footer footer footer";
  grid-template-rows: 10% 0fr 10%;
  grid-template-columns: 10% 0fr 10%;
  grid-gap: 1rem;
  justify-content: center;
  align-content: center;
  margin: 0;
  height: 100vh;

  .header {
    grid-area: header;
  }
  .nav {
    grid-area: nav;
  }
  .content {
    grid-area: content;
    display: flex;
    align-content: center;
    justify-content: center;
    align-self: center;
    justify-self: center;
  }
  .ads {
    grid-area: ads;
  }
  .footer {
    grid-area: footer;
  }
}

header, footer, article, nav, div {
  background: #ffd7005c;
}
</style>
