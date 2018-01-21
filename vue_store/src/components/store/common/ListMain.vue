<template>
  <div>
    <div class="section">
      <div class="wrapper">
        <div class="wrap-box">
          <!--类别菜单-->
          <div class="left-220" style="margin:0;">
            <div class="banner-nav">
              <ul>
                <!--此处声明下面可重复循环-->
                <li v-for="item in all.catelist" :key="item.id">
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>{{item.title}}</span>
                    <p>
                      <span v-for="subitem in item.subcates" :key="subitem.id">{{subitem.title}}</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <!--如有三级分类，此处可循环-->
                    <dl>
                      <dt>
                        <a href="/goods/40.html">{{item.title}}</a>
                      </dt>
                      <dd>
                        <app-category :list="item.subcates"></app-category>
                      </dd>
                    </dl>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--/类别菜单-->

          <!--幻灯片-->
          <div class="left-705">
            <div class="banner-img">
              <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in all.sliderlist" :key="item.id">
                  <img style="height:100%" :src="item.img_url" alt="">
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <!--/幻灯片-->

          <!--推荐商品-->
          <div class="left-220">
            <ul class="side-img-list">
              <li v-for="(item,index) in all.toplist" :key="item.index">
                <div class="img-box">
                  <label>{{index+1}}</label>
                  <img :src="item.img_url">
                </div>
                <div class="txt-box">
                  <router-link :to="{ name: 'goodsDetail', params: { id: item.id } }">{{ item.title }}</router-link>
                  <span>{{item.add_time | date}}</span>
                </div>
              </li>
            </ul>
          </div>
          <!--/推荐商品-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appCategory from "./Category";
export default {
  data() {
    return {
      all: {
        catelist: [],
        sliderlist: [],
        toplist: []
      }
    };
  },
  methods: {
    getGoods() {
      this.$http.get(this.$api.goodsTop).then(res => {
        this.all.catelist = res.data.message.catelist;
        this.all.sliderlist = res.data.message.sliderlist;
        this.all.toplist = res.data.message.toplist;
      });
    }
  },
  created() {
    this.getGoods();
  },
  components: {
    appCategory
  }
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>