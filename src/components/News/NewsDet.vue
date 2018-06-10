<template>
  <!-- 资讯动态-行业动态-新闻详细 -->
  <div class="con-bg">
    <div class="con">
      <h3>我国精密铸造蜡的发展状况</h3>
      <hr />
      <p class="art-note">阅读：
        <span>302</span>发布时间：2018-01-12 10：32：00</p>

      <div class="article">
        <p>我国目前精密铸造用蜡80%是从欧美进口废料进行二次加工提纯生产而来，精密铸造蜡的质量和性能与欧美的同类材料相比有较大差距。我国拥有生产这些产品的大部分原料，但缺乏生产技术和配方。而国际上只有没过、英国和日本的四家企业掌握着高端精密铸造蜡的生产技术和配方。</p>
        <p>
          <span>NEW-198中温非填料精密铸造模型蜡</span>，是东莞恒天新材料有限公司，经过长达六七年的研发试验，研发成本的一种专利配方全新蜡，该产品的性能稳定，收缩率小，流动性好，凝固速度好。</p>
        <p class="last">中温蜡由于快速成型蜡模的熔化温度高，不能使用蒸汽脱蜡工艺为此设计了专用工艺，首先利用车间现有的坭芯烘烤炉脱去模组中的中温蜡料制作的浇冒口，然后将模壳装入一自制的简易工装，放入并式电阻炉，在开放的环境中对其进行烘烤，脱掉快速成型蜡模。通过脱蜡后的目视检查，同时参考浇注后的铸件表面质量，发现脱模（烘烤）后快速成型蜡模基本能够挥发干净，其残留物对最终铸件没有影响。</p>
        <img class="new-hand" src="../../assets/hand.jpg" />
      </div>

      <div class="operate">
        <span class="print" id="print">
          <a>[打印本页]</a>
        </span>
        <span class="close" id="close">
          <a>[关闭窗口]</a>
        </span>
      </div>

      <hr />
      <div class="pn">
        <span class="prev-art">
          <a href="#">上一篇：低温蜡和中温蜡的物理性能有什么区别</a>
        </span>
        <span class="next-art">
          <a href="#">下一篇：精密铸造蜡在制模方面的几个核心工序</a>
        </span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "NewsDet"
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: "幼圆";
  color: #787878;
}

.con-bg {
  width: auto;
  height: 1000px;
  position: relative;
}

.con {
  width: 1065px;
  height: 941px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  padding-left: 55px;
  padding-right: 55px;
}

.con h3 {
  font-size: 24px;
  font-weight: normal;
  font-family: "微软雅黑";
  color: #333333;
  text-align: center;
  margin-top: 42px;
  margin-bottom: 25px;
}

hr {
  color: rgb(190, 190, 190);
  margin-left: -30px;
  margin-right: -30px;
}

.con .art-note {
  text-align: center;
  font-size: 18px;
  margin-bottom: 55px;
  margin-top: 20px;
}

.con .art-note span {
  color: #ff0000;
  margin-right: 65px;
}

.article {
  width: 1059px;
  overflow: hidden;
  position: relative;
}

.article .last {
  width: 799px;
  text-indent: 0;
  padding-left: 2em;
}

.article p {
  text-indent: 2em;
  line-height: 40px;
  margin-bottom: 30px;
  width: 831px;
  float: left;
  margin-right: 15px;
}

.article p > span {
  color: #000000;
  font-weight: 550;
}

.new-hand {
  position: absolute;
}

.operate {
  margin-top: 140px;
  margin-bottom: 40px;
  text-align: center;
}
.operate span:hover {
  cursor: pointer;
}
.operate .print {
  margin-right: 80px;
}

.pn {
  height: 100px;
  line-height: 100px;
  overflow: hidden;
}

.pn .prev-art {
  float: left;
}

.pn .next-art {
  float: right;
}

a {
  text-decoration: none;
}

a:hover {
  cursor: pointer;
}
</style>
