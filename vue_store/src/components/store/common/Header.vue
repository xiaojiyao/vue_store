<template>
  <div id="header" class="header">
    <div class="head-top">
      <div class="section">
        <div class="left-box">
          <span>vue2.0单页应用</span>
          <a target="_blank" href="#"></a>
          <a target="_blank" href="#"></a>
        </div>
        <div id="menu" class="right-box">
          <a href="/">登录</a>
          <a href="/">注册</a>
          <strong>|</strong>
        </div>
      </div>
    </div>
    <div class="head-nav">
      <div class="section">
        <div id="menu2" class="nav-box menuhd">
          <ul>
            <li class="index">
              <a href="/">
                首页
              </a>
            </li>
            <li class="news">
              <a href="/">
                学员问题汇总
              </a>
            </li>
            <li class="photo">
              <a href="/">
                重难点专区
              </a>
            </li>
            <li class="video">
              <a href="/">
                前端常用功能
              </a>
            </li>
            <li class="down">
              <a href="/">
                资源下载
              </a>
            </li>
            <li>
              <a target="_blank" href="/">
                问题提交
              </a>
            </li>
          </ul>
        </div>
        <div class="search-box">
          <div class="input-box">
            <input id="keywords" name="keywords" type="text" onkeydown="if(event.keyCode==13){SiteSearch('/search.html', '#keywords');return false};" placeholder="输入关健字" x-webkit-speech="">
          </div>
          <a href="javascript:;" onclick="SiteSearch('/search.html', '#keywords');">
            <i class="iconfont icon-search"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

</style>