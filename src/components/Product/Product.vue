<template>
  <!-- 产品介绍-核心产品 -->
  <div class="wrap">
    <div class="menu">
      <div class="menu-title">
        <div class="title">产品介绍</div>
        <div class="subtitle">PRODUCT</div>
      </div>
      <ul>
        <li>
          <router-link to="/product" class="active">核心产品</router-link>
        </li>
        <li>
          <router-link to="/product">质量保证</router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="trail">
        <strong>产品介绍</strong>
        <div class="line-group">
          <div class="line line-a"></div>
          <div class="line line-b"></div>
          <div class="line line-c"></div>
        </div>
      </div>
      <div class="product-item">
        <div class="item-info">
          <h1 class="item-name">NFW-198中温非填料精密铸造模型腊</h1>
          <div class="divide"></div>
          <div class="item-detail">
            <em>专利配方全新蜡</em>
            <p class="feature">适用于一般工业零件五金件、管阀件、针车件等各种结构、尺寸规格精度要求比较高的蜡模制作</p>
            <router-link to="/productdet" class="more">查看更多</router-link>
          </div>
        </div>
        <div class="item-pic">
          <img src="../../assets/product1.jpg">
        </div>
      </div>

      <div class="product-item">
        <div class="item-info">
          <h1 class="item-name">NFW-298中温非填料精密铸造模型蜡</h1>
          <div class="divide"></div>
          <div class="item-detail">
            <em>专利配方全新蜡</em>
            <p class="feature">适用于重要要求准确、尺寸精度高的产品，如高尔夫球头、航空航天铸件、针车零件等。</p>
            <router-link to="/productdet" class="more">查看更多</router-link>
          </div>
        </div>
        <div class="item-pic">
          <img src="../../assets/product2.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product"
};
</script>

<style scoped>
.product-item {
  margin-top: 50px;
  margin-left: 26px;
  margin-bottom: 25px;
  width: 904px;
  height: 300px;
}
.product-item .item-info {
  float: left;
  width: 448px;
  height: 297px;
}
.divide {
  border-top: 2px solid #0072af;
  width: 108px;
  height: 38px;
}
.product-item .item-info .item-detail {
  padding-left: 14px;
  width: 410px;
  height: 90px;
  line-height: 30px;
}
.product-item .item-info .item-name {
  margin: -10px 0 16px;
  font-family: "STXihei";
  font-weight: normal;
  font-size: 32px;
  color: rgb(76, 76, 76);
}
.product-item .item-info em {
  font-family: "YouYuan";
  font-size: 18px;
  color: rgb(26, 66, 241);
}
.product-item .item-info .feature {
  font-family: "YouYuan";
  font-size: 14px;
  color: rgb(121, 121, 121);
}
.product-item .item-info .more {
  display: block;
  margin-top: 18px;
  border: 1px solid rgb(0, 40, 214);
  width: 118px;
  height: 39px;
  line-height: 39px;
  text-align: center;
  color: rgb(0, 40, 214);
  background-color: rgb(245, 245, 252);
}
.content {
  margin-bottom: 120px;
}
.item-pic {
  float: left;
}
.item-pic img {
  border: 2px solid #dcdcdc;
  box-shadow: 1px 1px 1px #3b3b3b;
  width: 420px;
  height: 292px;
}
</style>
