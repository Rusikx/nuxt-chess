<template>
  <div class="main">
<!--    <header class="header"></header>-->
<!--    <div class="content">-->
      <TheBoard/>
      <!--    <Tutorial/>-->
    </div>
<!--    <div class="left-bar"></div>-->
<!--    <div class="right-bar"></div>-->
<!--    <footer class="footer"></footer>-->
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

<style scoped>
.main {
  display: grid;
  /*grid-gap: 1rem;*/
  /*grid-template-columns: 1fr;*/
  /*grid-template-rows: 60px 300px 150px 150px 60px;*/
  /*grid-template-areas: "header" "content" "leftside" "rightside" "footer";*/
  /*margin: 1rem 1rem 8rem 1rem;*/
  /*padding: 1rem;*/
  /*border: 5px solid gray;*/
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.header {
  grid-area: header;
}
.left-bar {
  grid-area: leftside;
}
.content {
  grid-area: content;
  display: flex;
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: center;
}
.right-bar {
  grid-area: rightside;
}
.footer {
  grid-area: footer;
}
</style>
