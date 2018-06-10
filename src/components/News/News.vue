<template>
  <!-- 资讯动态-行业动态 -->
  <div class="wrap">
    <div class="menu">
      <div class="menu-title">
        <div class="title">资讯动态</div>
        <div class="subtitle">NEWS</div>
      </div>
      <ul>
        <li>
          <router-link to="/news" class="active">行业动态</router-link>
        </li>
        <li>
          <router-link to="/news">行业前景</router-link>
        </li>
        <li>
          <router-link to="/news">公司动态</router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="trail clearfix">
        <strong>资讯动态</strong>
        <div class="line-group">
          <div class="line line-a"></div>
          <div class="line line-b"></div>
          <div class="line line-c"></div>
        </div>
      </div>
      <div class="main">
        <ul class="news">
          <li>
            <router-link to="/newsdet">
              <span>01</span>
              <div>
                <h2>低温蜡和中温蜡的物理性能有什么区别</h2>
                <p>
                  1.中温蜡配合的是硅溶胶制壳工艺，而低温蜡一般配合的是水玻璃制壳工艺。2.中温蜡的收缩比低温蜡的要大，因为低温蜡蜡膏中含有水汽。中温蜡由于其特性， 因而应用范围比低温蜡广，更适合铸造用户。
                </p>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/newsdet">
              <span>02</span>
              <div>
                <h2>我国精密铸造蜡的发展现状</h2>
                <p>
                  目前我国精密铸造用蜡90%从欧美进口，成品蜡的质量和性能与欧美的同类材料相比亦有较大差距。我国拥有生产这些产品的大部分原料，但缺乏生产技 术和配方。而国际上只有美国、英国和日本的四家企业掌握着高端精密铸造蜡的生产技术和配方...
                </p>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/newsdet">
              <span>03</span>
              <div>
                <h2>精密铸造蜡在制模方面的几个核心工序</h2>
                <p>
                  失蜡铸造法，又称熔模法、拔蜡法、出蜡法等多种称法。其原理很简单，就是人们用了逆向思维——不是青铜器很复杂，做模翻范很困难嘛，那么就先用 蜂蜡一类的虫蜡，做出一个与计划铸造出的青铜器一模一样的蜡样，由于蜡很软，可以雕琢得很精细...
                </p>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/newsdet">
              <span>04</span>
              <div>
                <h2>为什么国内的精密铸造蜡一般都生产成珠状</h2>
                <p>
                  国内的铸造蜡，通常都是呈珠状的，当然也有另外的，比如美国的FREEMAN，成片状，这种蜡目前在市场上价格高，所以，国内的产家一般使用珠状，因为 其价格适中，性能良好.铸造蜡，高、中温精密铸造粒，珠状，硬度高，线收缩率小，韧性好，稳定性好，可反复使用...
                </p>
              </div>
            </router-link>
          </li>
        </ul>
        <ul class="pager">
          <li class="first">
            <a href="#">首页</a>
          </li>
          <li class="prev">
            <a href="#">上一页</a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li>
            <a href="#">6</a>
          </li>
          <li>
            <a href="#">7</a>
          </li>
          <li>
            <a href="#">8</a>
          </li>
          <li>
            <a href="#">9</a>
          </li>
          <li>
            <a href="#">10</a>
          </li>
          <li class="next">
            <a href="#">下一页</a>
          </li>
          <li class="last">
            <a href="#">尾页</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News"
};
</script>

<style scoped>
.news {
  width: 940px;
  padding-top: 42px;
  padding-bottom: 30px;
}
.news a {
  display: block;
  width: 100%;
  height: 68px;
  margin-bottom: 22px;
  cursor: pointer;
}
.news li:hover span {
  background-color: #3838b0;
}
.news span {
  display: block;
  width: 42px;
  height: 56px;
  background-color: #969696;
  color: #fff;
  font-size: 30px;
  padding-left: 14px;
  line-height: 56px;
  margin-right: 32px;
  float: left;
  margin-top: 6px;
}
h2 {
  margin: 0;
  font-weight: normal;
  font-size: 14px;
  margin-bottom: 12px;
  color: #333;
}
.news div {
  width: 846px;
  height: 68px;
  float: left;
  border-bottom: 1px solid #ababab;
}
.news p {
  font-size: 12px;
  color: #646464;
  font-family: "YouYuan";
  line-height: 18px;
  margin-top: -6px;
  overflow: hidden;
  height: 36px;
}
.pager {
  border: 1px solid #dddddd;
  border-radius: 4px;
  overflow: hidden;
  zoom: 1;
  max-width: 570px;
  margin: 0 auto;
}
.pager a {
  border-right: 1px solid #dddddd;
  float: left;
  width: 32px;
  height: 32px;
  color: #858585;
  font-size: 14px;
  text-align: center;
  line-height: 32px;
}
.pager li:last-child > a {
  border: none;
}
.pager a:hover {
  background-color: #eee;
  color: #333;
}
.pager .first > a,
.pager .last > a {
  width: 52px;
}
.pager .prev > a,
.pager .next > a {
  width: 66px;
}
.main {
  margin-bottom: 94px;
}
</style>
