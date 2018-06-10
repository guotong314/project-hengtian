<template>
  <div class="wrap">
    <div class="menu">
      <div class="menu-title">
        <div class="title">关于我们</div>
        <div class="subtitle">ABOUT US</div>
      </div>
      <ul>
        <li>
          <router-link to="/about" class="active">公司介绍</router-link>
        </li>
        <li>
          <router-link to="/about">组织架构</router-link>
        </li>
        <li>
          <router-link to="/about">资质荣誉</router-link>
        </li>
        <li>
          <router-link to="/about">管理团队</router-link>
        </li>
        <li>
          <router-link to="/about">研发团队</router-link>
        </li>
        <li>
          <router-link to="/about">生产基地</router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="trail clearfix">
        <strong>关于我们</strong>
        <div class="line-group">
          <div class="line line-a"></div>
          <div class="line line-b"></div>
          <div class="line line-c"></div>
        </div>
      </div>
      <div class="main">
        <div class="text">
          <p>东莞恒天新材料有限公司位于风景优美的广东省东莞市松山湖同家高新产业园区，是专业的蜡制品自主研发、生产、销售相结合的科技创新企业。公司现拥有两项蜡模料生产加工核心发明专利。</p>
          <p>公司以东莞理工学院、华南理工大学为依托，现拥有一批精干的生产管理人员和一支高素质的专业技术队伍，技术开发力量雄厚。技术攻关、个性化产品定制与客户服务跟踪是研发团队的核心职责。</p>
          <p>我们的产品，广泛应用于一般工业零件五金件、管阀件、针车件、航空航天等精密铸造行业蜡模制作。</p>
        </div>
        <img src="../../assets/aboutus.jpg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
.text {
  width: 100%;
  padding-top: 44px;
  margin-bottom: 26px;
  width: 640px;
  margin-right: 16px;
  float: left;
  clear: both;
}

.text p {
  text-indent: 36px;
  font-size: 14px;
  line-height: 36px;
}
.main {
  min-height: 300px;
}
.main img {
  width: 296px;
  float: right;
  margin-top: 54px;
}
</style>
