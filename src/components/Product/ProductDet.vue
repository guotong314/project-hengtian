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
    <div class="intro-detail">
      <p class="detail-title">产品介绍</p>
      <div class="detail-con-bg">
        <div class="detail-con">
          <p class="mapoint">主要特点</p>
          <p class="point-list">1.收缩率小，流动性好，凝固速度快，模料表面平面度光洁度好，产品精密度高。</p>
          <p class="point-list">2.塑性好，能反复使用，性能稳定。</p>
          <p class="point-list">3.受热膨胀均匀稳定膨胀力小，不易涨环型壳。</p>
          <p class="mapoint">技术指标</p>
          <img src="../../assets/qualify.jpg" />
          <div class="nominate">
            <p class="mapoint">推荐使用参数</p>
            <p class="point-list indent">
              <span>化蜡温度：110<i class="tiny">℃</i>-120<i class="tiny">℃</i></span>搅拌时间： ≥8小时
            </p>
            <p class="point-list indent">
              <span>静置温度：85<i class="tiny">℃</i>-95<i class="tiny">℃</i></span>静置时间： ≥12小时</p>
            <p class="point-list indent">
              <span>保温温度：55-65<i class="tiny">℃</i></span>保温时间： ≥8小时</p>
            <p class="point-list indent">射蜡温度：膏状：53<i class="tiny">℃</i>-58<i class="tiny">℃</i></p>
            <p class="no-return">
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
  width: auto;
  height: 68px;
  background-color: rgb(237, 237, 237);
  line-height: 30px;
  padding-left: 38px;
  padding-top: 32px;
  padding-bottom: 32px;
}

.titleNav > p {
  font-size: 34px;
  font-family: "华文细黑";
  color: #4c4c4c;
}

.titleNav > p > span {
  display: inline-block;
  border-bottom: 3px solid rgb(0, 114, 175);
}

.titleNav .return a,
.no-return a {
  display: inline-block;
  margin-top: 16px;
  font-size: 18px;
  font-family: "幼圆";
  color: #4a4a4a;
}

.intro {
  height: 380px;
  position: relative;
}

.intro img {
  width: 372px;
  height: 326px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: block;
}

.intro-detail .detail-title {
  height: 84px;
  line-height: 84px;
  width: auto;
  font-size: 32px;
  font-family: "华文细黑";
  color: #333399;
  padding-left: 128px;
  border-top: 1px solid rgb(213, 213, 213);
  border-bottom: 1px solid rgb(213, 213, 213);
}

.detail-con-bg {
  width: auto;
  height: 1010px;
  position: relative;
}

.detail-con {
  width: 678px;
  line-height: 40px;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
}

.detail-con .nominate {
  width: 376px;
  height: 290px;
  margin-top: 100px;
  letter-spacing: 2.4px;
}

.detail-con .mapoint {
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
  text-indent: 0;
  display: inline-block;
  width: 180.6px;
}

.detail-con .no-return {
  font-size: 18px;
  font-family: "幼圆";
  color: #4c4c4c;
  text-align: right;
  margin-top: 70px;
}

a {
  text-decoration: none;
}

a:hover {
  cursor: pointer;
}

.tiny {
  font-style: normal;
  font-size: 12px;
}
</style>
