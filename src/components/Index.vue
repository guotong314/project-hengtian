<template>
  <div class="wrap">
    <div class="conbg">
      <div class="con">
        <div class="aboutUs">
          <h3>关于我们</h3>
          <span>—— ABOUT US ——</span>
          <div class="us-info">
            <img src="../assets/us.jpg" />
            <div class="us-text">
              <p>东莞恒天新材料有限公司位于风景优美的广东省东菀市松山湖同家高新产业园区，是专业的蜡制品自主研发、生产、销售相结合的科技创新企业。公司现拥有两项蜡模料生产加工核心发明专利。</p>
              <p>公司以东莞理工学院、华南理工大学为依托，现拥有一批精干的生产管理人员和一支高素质的专业技术队伍，技术开发力量雄厚。技术攻关、个性化产品定制与客户服务跟踪是研发团队的核心职责。</p>
              <p>我们的产品，广泛应用于一般工业零件、管阀件、针车件、航空航天等精密铸造行业蜡模制作</p>
              <span class="more">
                <router-link to="/about">查看更多</router-link>
              </span>
            </div>
          </div>
        </div>
        <hr class="devi" />
        <div class="product">
          <h3>产品介绍</h3>
          <span>—— PRODUCT ——</span>
          <div class="pro-cont">
            <div class="pro-area">
              <img src="../assets/pro-area.jpg" />
            </div>
            <div class="pro-intro">
              <p class="pro-title">NFW-198中温非填料精密铸造
                <span>模型蜡</span>
              </p>
              <p class="pro-val"><img src="../assets/feature.jpg" />专利配方全新蜡</p>
              <p class="pro-val"><img src="../assets/feature.jpg" />品质一流、性能稳定</p>
              <p class="pro-val"><img src="../assets/feature.jpg" />产品可以但用亦可混用</p>
              <div class="pro-main">
                <span class="pao-feat">主要特点:</span>
                <p class="main-item">1.收缩率小，流动性好，凝固速度快，模料表面平整度光洁度好，产品精密度高。</p>
                <p class="main-item">2.塑性好，能反复使用，性能稳定。</p>
                <p class="main-item">3.受热膨胀均匀稳定，膨胀力小，不易涨坏型壳。</p>
              </div>

            </div>
          </div>

        </div>
        <div class="prom more">
          <router-link to="/product">查看更多</router-link>
        </div>
        <div class="coop">
          <h3>合作机构</h3>
          <span>—— COOPERATIVE INSTITUTION ——</span>
          <div class="coo-edu">
            <img src="../assets/edu-dw.jpg" />
            <img src="../assets/edu-gd.jpg" />
            <img src="../assets/edu-hn.jpg" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Index"
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.wrap {
  margin: 0 auto 30px;
  padding-right: 34px;
  width: 1190px; 
}

.con-bg {
  width: 1365px;
  height: 1340px;
}
.con {
  width: 1092px;
  margin: 0 auto;
}
.aboutUs {
  margin-top: 48px;
  width: 1092px;
  height: 420px;
}
.aboutUs h3,
.product h3,
.coop h3 {
  font-family: "华文细黑";
  font-weight: normal;
  font-size: 31px;
  text-align: center;
  color: #4348e2;
}
.aboutUs span,
.product span,
.coop span {
  display: inline-block;
  width: inherit;
  font-size: 18px;
  text-align: center;
  color: #999999;
}
.aboutUs .us-info {
  overflow: hidden;
  margin-top: 34px;
  width: 1092px;
  height: 320px;
}
.aboutUs .us-info img {
  float: left;
  margin-right: 40px;
}
.aboutUs .us-info .us-text {
  float: left;
  width: 655px;
  line-height: 35px;
}
.aboutUs .us-info .us-text p {
  font-family: "幼圆";
  font-size: 14px;
  text-indent: 2em;
  color: #444444;
}
.aboutUs .us-info .us-text p:first-child {
  margin-top: 10px;
}
.aboutUs .us-info .us-text span {
  display: inline-block;
  float: right;
  margin-top: 40px;
  border: 1px solid rgb(0, 40, 214);
  width: 114px;
  height: 36px;
  line-height: 36px;
  font-family: "微软雅黑";
  font-size: 14px;
  color: rgb(0, 40, 214);
  background-color: rgb(245, 245, 252);
}
.devi {
  margin-right: -15px; 
  margin-bottom: 20px;
  margin-left: -15px;
  color: rgb(223, 223, 223);
}
.product {
  margin-bottom: 40px;
  width: 1092px;
  height: 550px; 
}
.product .pro-cont {
  overflow: hidden;
  margin-top: 44px;
  width: 1092px;
  height: 440px;
}
.product .pro-cont .pro-area {
  float: left;
  margin-right: 30px;
  width: 560px;
  height: 374px;
}
.product .pro-cont .pro-area img {
  width: 560px;
  height: 374px;
}
.product .pro-cont .pro-intro {
  float: left;
  width: 450px;
  height: 420px;
}
.pro-intro .pro-title {
  margin-bottom: 30px;
  font-family: "华文细黑";
  font-size: 34px;
  color: #4c4c4c;
}
.pro-intro .pro-title > span {
  border-bottom: 1px solid rgb(0, 40, 214);
  padding-bottom: 18px;
  font-family: "华文细黑";
  font-size: 34px;
  color: #4c4c4c; 
}
.pro-intro .pro-val {
  font-family: "幼圆";
  font-size: 18px;
  line-height: 35px;
  color: #4a4a4a;
}
.pro-intro .pro-val img {
  margin-right: 15px;
  vertical-align: middle;
}
.pro-main {
  margin-left: 2em;
  width: 410px;
  height: 160px;
}
.pro-intro .pao-feat {
  display: inline-block;
  margin-top: 30px;
  font-family: "幼圆";
  font-size: 18px;
  line-height: 30px;
  text-align: left;
  color: #4348e2;
}
.pro-intro .main-item {
  font-family: "幼圆";
  font-size: 14px;
  line-height: 30px;
  color: #4a4a4a;
}
.prom {
  margin: 0 auto;
  border: 1px solid rgb(0, 40, 214);
  width: 114px;
  height: 36px;
  font-family: "微软雅黑";
  font-size: 14px;
  line-height: 36px;
  text-align: center;
  color: rgb(0, 40, 214);
  background-color: rgb(245, 245, 252);
}
.coop {
  margin-top: 50px;
  width: 1092px;
  height: 180px;
}
.coo-edu {
  margin-top: 24px;
  margin-bottom: 40px;
  width: 1092px;
  height: 92px;
}
.coo-edu img {
  margin-right: 28px;
}
.coo-edu img:last-child {
  margin-right: 0;
}
.more a {
  text-decoration: none;
  color: rgb(0, 40, 214);
}
.more:hover {
  cursor: pointer;
}
</style>
