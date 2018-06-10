<template>
  <div id="app">
    <div class="common-header">
      <div class="header-top-con">
        <div class="header-top">
          <div class="tel">
            <span>全国服务热线：</span>
            <a href="tel:0769-22892701">0769-22892701</a>
          </div>
          <div class="welcome-msg">欢迎来到东莞恒天新材料有限公司官方网站！</div>
        </div>
      </div>
      <div class="toolbar">
        <ul>
          <li class="logo">
            <img src="./assets/logo.jpg" alt="logo">
          </li>
          <li>
            <router-link to="/index">首页</router-link>
          </li>
          <li>
            <router-link to="/about">关于我们</router-link>
            <ul class="dropdown">
              <li>
                <router-link to="/about">公司介绍</router-link>
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
          </li>
          <li>
            <router-link to="/product">产品介绍</router-link>
            <ul class="dropdown">
              <li>
                <router-link to="/product">核心产品</router-link>
              </li>
              <li>
                <router-link to="/product">质量保证</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/culture">企业文化</router-link>
            <ul class="dropdown">
              <li>
                <router-link to="/culture">经营理念</router-link>
              </li>
              <li>
                <router-link to="/culture">企业文化</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/news">资讯动态</router-link>
            <ul class="dropdown">
              <li>
                <router-link to="/news">行业动态</router-link>
              </li>
              <li>
                <router-link to="/news">行业前景</router-link>
              </li>
              <li>
                <router-link to="/news">公司动态</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/commit">客户服务</router-link>
            <ul class="dropdown">
              <li>
                <router-link to="/commit">产品销售</router-link>
              </li>
              <li>
                <router-link to="/commit">解决方案</router-link>
              </li>
              <li>
                <router-link to="/commit">咨询留言</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/connect">联系我们</router-link>
          </li>
        </ul>
      </div>
      <div class="banner">
        <img src="./assets/banner.jpg" alt="banner">
      </div>
    </div>
    <router-view/>
    <div class="common-footer">
      <div class="top">
        <div class="link">
          <ul>
            <li class="title">关于我们</li>
            <li>
              <router-link to="/about">公司介绍</router-link>
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
          <ul>
            <li class="title">产品介绍</li>
            <li>
              <router-link to="/product">核心产品</router-link>
            </li>
            <li>
              <router-link to="/product">质量保证</router-link>
            </li>
          </ul>
          <ul>
            <li class="title">企业文化</li>
            <li>
              <router-link to="/culture">经营理念</router-link>
            </li>
            <li>
              <router-link to="/culture">企业文化</router-link>
            </li>
          </ul>
          <ul>
            <li class="title">资讯动态</li>
            <li>
              <router-link to="/news">行业动态</router-link>
            </li>
            <li>
              <router-link to="/news">行业前景</router-link>
            </li>
            <li>
              <router-link to="/news">公司动态</router-link>
            </li>
          </ul>
          <ul>
            <li class="title">客户服务</li>
            <li>
              <router-link to="/commit">产品销售</router-link>
            </li>
            <li>
              <router-link to="/commit">解决方案</router-link>
            </li>
            <li>
              <router-link to="/commit">咨询留言</router-link>
            </li>
          </ul>
        </div>
        <ul class="connect">
          <li class="title">联系我们</li>
          <li>东莞恒天新材料有限公司</li>
          <li>地址：东莞市松山湖高新技术产业开发区大学创新城D2栋6楼</li>
          <li>电话：0769-22892701</li>
          <li class="tel-block">
            <div>商务合作：</div>
            <ul>
              <li>13826166288</li>
              <li>13973668021</li>
            </ul>
          </li>
        </ul>
        <div class="qrcode">
          <div class="wechat">
            <img src="./assets/wechat.jpg">
            <div class="wechat-label">微信公众号</div>
          </div>
          <div class="phone">
            <img src="./assets/phone.jpg">
            <div class="phone-label">手机版</div>
          </div>
        </div>
      </div>
      <div class="bottom">
        版权所有（C）东莞恒天新材料有限公司 粤ICP备********号-1
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: Helvetica, Arial,"Microsoft Yahei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/*页头*/
.common-header a {
  color: #4b4b4b;
}

.header-top-con {
  width: 100%;
  height: 46px;
  background-color: #eeeeee;
}

.header-top {
  width: 1230px;
  height: 46px;
  margin: 0 auto;
}

.welcome-msg {
  float: left;
  line-height: 46px;
  font-size: 14px;
}

.tel {
  float: right;
  margin-top: 12px;
}

.tel span {
  font-size: 18px;
}

.tel a {
  font-size: 20px;
  color: #2e3191;
}

.toolbar {
  width: 100%;
  height: 88px;
}

.toolbar > ul {
  width: 1246px;
  height: 88px;
  padding-left: 40px;
  margin: 0 auto;
}

.toolbar > ul > li {
  width: 110px;
  height: 88px;
  float: left;
  position: relative;
}

.toolbar > ul > li > a:hover {
  background-color: #363ab2;
  color: #fff;
}

.toolbar > ul > li > a {
  display: block;
  width: 110px;
  height: 88px;
  line-height: 88px;
  text-align: center;
  font-size: 18px;
  color: #4b4b4b;
}

.toolbar .logo {
  width: 436px;
}

.dropdown {
  position: absolute;
  top: 88px;
  left: 0;
  width: 110px;
  background-color: #fff;
  display: none;
}

.dropdown a {
  display: block;
  width: 110px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  font-size: 15px;
  color: #1c1c1c;
}

.dropdown a:hover {
  background-color: #fff;
}

.dropdown a:hover {
  background-color: #363ab2;
  color: #fff;
}

.banner {
  width: 100%;
  font-size: 0;
}

.banner img {
  width: 100%;
}
/*页脚*/
.common-footer {
  width: 100%;
  height: 306px;
  background-color: #333;
}

.top {
  width: 1200px;
  height: 206px;
  padding-top: 24px;
  margin: 0 auto;
}

.top .link ul {
  display: block;
  float: left;
  width: 60px;
  margin-right: 54px;
}

.top .link li {
  margin-bottom: 20px;
}

.link ul:first-child li {
  margin-bottom: 14px;
}

.bottom {
  width: 100%;
  height: 76px;
  border-top: 1px dashed #575757;
  text-align: center;
  line-height: 76px;
  clear: both;
}

.connect {
  width: 326px;
  float: left;
}

.connect .title {
  margin-bottom: 20px;
}

.connect li {
  margin-bottom: 10px;
}

.tel-block {
  height: 36px;
}

.tel-block div,
.tel-block ul {
  float: left;
}

.tel-block ul {
  width: 80px;
  margin-right: 0;
  line-height: 20px;
}

.tel-block li {
  margin-bottom: 6px;
}

.qrcode {
  width: 230px;
  height: 130px;
  float: right;
}

.qrcode img {
  display: block;
  width: 100px;
}

.qrcode > div {
  width: 100px;
  height: 130px;
  float: left;
}

.wechat {
  margin-right: 30px;
}

.wechat-label,
.phone-label {
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 42px;
}

.common-footer * {
  color: #e6e6e6;
  font-size: 12px;
}
/*菜单等公共样式*/

.wrap {
    width: 1190px;
    padding-right: 34px;
    margin: 0 auto;
}

.menu {
  width: 184px;
  float: left;
}

.menu-title {
  width: 120px;
  height: 52px;
  background-color: #363ab2;
  border-bottom: 3px solid #eee;
  color: #fff;
  padding: 28px 36px 12px 28px;
}

.menu-title .title {
  font-size: 30px;
}

.menu-title .subtitle {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 18px;
}

.menu a {
  display: block;
  width: calc(100% - 36px);
  height: 35px;
  border-bottom: 1px solid #fff;
  line-height: 35px;
  padding-left: 36px;
  background-color: #eee;
  color: #2d2d2d;
  font-size: 15px;
  font-family: "YouYuan";
}

.menu a:hover,
.menu .active {
  background-color: #363ab2;
}

.menu a:hover,
.menu .active {
  color: #fff;
}

.content {
  margin-left: 184px;
  width: 952px;
  padding-left: 54px;
  overflow: hidden;
}

.trail {
  width: 100%;
  height: 18px;
  margin-top: 22px;
}

.trail strong {
  color: #2e3191;
  font-weight: normal;
  display: block;
  float: left;
  margin-right: 8px;
}

.line-group {
  width: 880px;
  height: 18px;
  display: inline-block;
}

.line {
  height: 8px;
  border-bottom: 9px solid #e6e6e6;
  float: left;
}

.line-a {
  width: 6px;
  border-color: #16578f;
}

.line-b {
  width: 12px;
  border-color: #f6f6f6;
}

.line-c {
  width: 854px;
}

.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
</style>
