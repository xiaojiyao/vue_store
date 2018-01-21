<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="/index.html">首页</a> &gt;
        <a href="/goods.html">购物商城</a>
      </div>
    </div>
    <list-main></list-main>
    <list-top></list-top>
  </div>
</template>

<script>
import ListMain from '../common/ListMain'
import ListTop from '../common/ListTop'
export default {
  components: {
    ListMain,
    ListTop
  }
};
</script>

<style scoped>

</style>