<template>
  <!-- 产品介绍-核心产品-产品详细 -->
  <div class="ctt">
    <div class="titleNav">
      <p>
        <span>NFW-198</span>中温非填料精密铸造模型蜡</p>
      <span class="return">
        <router-link to="/product">&lt;&lt;返回列表</router-link>
      </span>
    </div>
    <div class="intro">
      <img src="../../assets/product-intro.jpg" />
    </div>
    <div class="product">
      <p class="pro-title">产品介绍</p>
      <div class="detail-wrap">
        <div class="detail-con">
          <p class="param-title">主要特点</p>
          <p class="point-list">1.收缩率小，流动性好，凝固速度快，模料表面平面度光洁度好，产品精密度高。</p>
          <p class="point-list">2.塑性好，能反复使用，性能稳定。</p>
          <p class="point-list">3.受热膨胀均匀稳定膨胀力小，不易涨环型壳。</p>
          <p class="param-title">技术指标</p>
          <img src="../../assets/qualify.jpg" />
          <div class="param">
            <p class="param-title">推荐使用参数</p>
            <p class="point-list indent">
              <span>化蜡温度：110<i class="tiny">℃</i>-120<i class="tiny">℃</i></span>搅拌时间： ≥8小时
            </p>
            <p class="point-list indent">
              <span>静置温度：85<i class="tiny">℃</i>-95<i class="tiny">℃</i></span>静置时间： ≥12小时</p>
            <p class="point-list indent">
              <span>保温温度：55-65<i class="tiny">℃</i></span>保温时间： ≥8小时</p>
            <p class="point-list indent">射蜡温度：膏状：53<i class="tiny">℃</i>-58<i class="tiny">℃</i></p>
            <p class="bott-return">
              <router-link to="/product">&lt;&lt;返回列表</router-link>
            </p>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDet"
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.titleNav {
  padding-top: 32px;
  padding-left: 38px;
  padding-bottom: 32px;
  width: auto;
  height: 68px;
  line-height: 30px;
  background-color: rgb(237, 237, 237);
}

.titleNav > p {
  font-family: "华文细黑";
  font-size: 34px; 
  color: #4c4c4c;
}

.titleNav > p > span {
  display: inline-block;
  border-bottom: 3px solid rgb(0, 114, 175);
}

.titleNav .return a,
.bott-return a {
  display: inline-block;
  margin-top: 16px;
  font-family: "幼圆";
  font-size: 18px;
  color: #4a4a4a;
}

.intro {
  position: relative;
  height: 380px;
 
}

.intro img {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 372px;
  height: 326px; 
}

.product .pro-title {
  border-top: 1px solid rgb(213, 213, 213);
  border-bottom: 1px solid rgb(213, 213, 213);
  padding-left: 128px;
  width: auto;
  height: 84px;
  line-height: 84px;
  font-family: "华文细黑";
  font-size: 32px;
  color: #333399;
}

.detail-wrap {
  position: relative;
  width: auto;
  height: 1010px;
}

.detail-con {
  position: absolute; 
  right: 0;
  left: 0;
  margin-top: 25px;
  margin-right: auto;
  margin-left: auto;
  width: 678px;
  line-height: 40px;
}

.detail-con .param {
  margin-top: 100px;
  width: 376px;
  height: 290px;
  letter-spacing: 2.4px;
}

.detail-con .param-title {
  font-family: "幼圆";
  font-size: 18px;
  color: #4a4a4a;
}

.detail-con .point-list {
  font-family: Arial, "幼圆";
  font-size: 14px;
  color: #4a4a4a;
}

.detail-con .indent {
  text-indent: 36px;
}

.detail-con .indent span {
  display: inline-block;
  width: 180.6px;
  text-indent: 0;
}

.detail-con .bott-return {
  margin-top: 70px;
  font-family: "幼圆";
  font-size: 18px;
  text-align: right;
  color: #4c4c4c;
}

.tiny {
  font-style: normal;
  font-size: 12px;
}
</style>
