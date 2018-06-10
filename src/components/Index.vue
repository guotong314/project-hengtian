<template>
  <div class="wrap">
    <div class="conbg">
      <div class="con">
        <div class="con-us">
          <h3>关于我们</h3>
          <span>—— ABOUT US ——</span>
          <div class="us-info">
            <img src="../assets/us.jpg" />
            <div class="us-intro">
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
        <div class="con-intro">
          <h3>产品介绍</h3>
          <span>—— PRODUCT ——</span>
          <div class="product-info">
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
              <div class="pro-ma">
                <span class="pro-mfetr">主要特点:</span>
                <p class="pro-mfetr-item">1.收缩率小，流动性好，凝固速度快，模料表面平整度光洁度好，产品精密度高。</p>
                <p class="pro-mfetr-item">2.塑性好，能反复使用，性能稳定。</p>
                <p class="pro-mfetr-item">3.受热膨胀均匀稳定，膨胀力小，不易涨坏型壳。</p>
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
          <div class="coo-deu">
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
  width: 1190px;
  padding-right: 34px;
  margin: 0 auto 30px;
}

.con-bg {
  width: 1365px;
  height: 1340px;
}
.con {
  width: 1092px;
  margin: 0 auto;
}
.con-us {
  width: 1092px;
  height: 420px;
  margin-top: 48px;
}
.con-us h3,
.con-intro h3,
.coop h3 {
  font-size: 31px;
  font-family: "华文细黑";
  font-weight: normal;
  text-align: center;
  color: #4348e2;
}
.con-us span,
.con-intro span,
.coop span {
  display: inline-block;
  width: inherit;
  font-size: 18px;
  /*color: rgb(161,161,161);*/
  color: #999999;
  text-align: center;
}
.con-us .us-info {
  width: 1092px;
  height: 320px;
  overflow: hidden;
  margin-top: 34px;
}
.con-us .us-info img {
  float: left;
  margin-right: 40px;
}
.con-us .us-info .us-intro {
  float: left;
  width: 655px;
  line-height: 35px;
}
.con-us .us-info .us-intro p {
  font-size: 14px;
  font-family: "幼圆";
  color: #444444;
  text-indent: 2em;
}
.con-us .us-info .us-intro p:first-child {
  margin-top: 10px;
}
.con-us .us-info .us-intro span {
  display: inline-block;
  width: 114px;
  height: 36px;
  line-height: 36px;
  margin-top: 40px;
  font-size: 14px;
  font-family: "微软雅黑";
  color: rgb(0, 40, 214);
  border: 1px solid rgb(0, 40, 214);
  background-color: rgb(245, 245, 252);
  float: right;
}
.devi {
  margin-left: -15px;
  margin-right: -15px;
  color: rgb(223, 223, 223);
  margin-bottom: 20px;
}
.con-intro {
  width: 1092px;
  height: 550px;
  margin-bottom: 40px;
}
.con-intro .product-info {
  width: 1092px;
  height: 440px;
  overflow: hidden;
  margin-top: 44px;
}
.con-intro .product-info .pro-area {
  width: 560px;
  height: 374px;
  float: left;
  margin-right: 30px;
}
.con-intro .product-info .pro-area img {
  width: 560px;
  height: 374px;
}
.con-intro .product-info .pro-intro {
  width: 450px;
  height: 420px;
  float: left;
}
.pro-intro .pro-title {
  font-size: 34px;
  font-family: "华文细黑";
  color: #4c4c4c;
  margin-bottom: 30px;
  /*line-height: 20px;*/
}
.pro-intro .pro-title > span {
  font-size: 34px;
  padding-bottom: 18px;
  font-family: "华文细黑";
  color: #4c4c4c;
  border-bottom: 1px solid rgb(0, 40, 214);
}
.pro-intro .pro-val {
  font-size: 18px;
  font-family: "幼圆";
  color: #4a4a4a;
  line-height: 35px;
}
.pro-intro .pro-val img {
  vertical-align: middle;
  margin-right: 15px;
}
.pro-ma {
  width: 410px;
  height: 160px;
  margin-left: 2em;
}
.pro-intro .pro-mfetr {
  display: inline-block;
  text-align: left;
  font-size: 18px;
  font-family: "幼圆";
  color: #4348e2;
  line-height: 30px;
  margin-top: 30px;
}
.pro-intro .pro-mfetr-item {
  font-size: 14px;
  font-family: "幼圆";
  color: #4a4a4a;
  line-height: 30px;
}
.prom {
  width: 114px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 14px;
  font-family: "微软雅黑";
  color: rgb(0, 40, 214);
  border: 1px solid rgb(0, 40, 214);
  background-color: rgb(245, 245, 252);
  margin: 0 auto;
}
.coop {
  margin-top: 50px;
  width: 1092px;
  height: 180px;
}
.coo-deu {
  width: 1092px;
  height: 92px;
  margin-top: 24px;
  margin-bottom: 40px;
}
.coo-deu img {
  margin-right: 28px;
}
.coo-deu img:last-child {
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
