<template>
  <!-- 客户服务-咨询留言 -->
  <div class="wrap">
    <div class="menu">
      <div class="menu-title">
        <div class="title">客户服务</div>
        <div class="subtitle">SERVICE</div>
      </div>
      <ul>
        <li>
          <router-link to="/commit">产品销售</router-link>
        </li>
        <li>
          <router-link to="/commit">解决方案</router-link>
        </li>
        <li>
          <router-link to="/commit" class="active">咨询留言</router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="trail clearfix">
        <strong>客户服务</strong>
        <div class="line-group">
          <div class="line line-a"></div>
          <div class="line line-b"></div>
          <div class="line line-c"></div>
        </div>
      </div>
      <form action="" method="post">
        <div class="user-info">
          <div class="con"><input type="text" placeholder="姓名"></div>
          <div class="con"><input type="text" placeholder="公司"></div>
          <div class="con"><input type="text" placeholder="您的邮箱"></div>
          <div class="con"><input type="text" placeholder="电话号码"></div>
        </div>
        <div class="message">
          <div class="con msg-con">
            <textarea placeholder="信息"></textarea>
          </div>
        </div>
        <input type="submit" value="发送">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Commit"
};
</script>

<style scoped>
form {
  float: right;
  width: 918px;
  height: 386px;
  padding: 28px 22px 0px 16px;
}
.user-info,
.message {
  float: left;
}
.user-info {
  margin-right: 46px;
}
.con {
  width: 280px;
  height: 36px;
  background-color: #f5f5f5;
  padding: 8px 28px;
  border-radius: 4px;
  margin-bottom: 30px;
}
.con input {
  height: 36px;
}

.msg-con {
  width: 480px;
  height: 260px;
  padding: 18px 28px;
}

input[type="text"],
textarea {
  border: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
  outline: none;
}
textarea {
  resize: none;
}
input[type="submit"] {
  width: 200px;
  height: 50px;
  background-color: #6c716d;
  color: #fff;
  border: none;
  border-radius: 4px;
  float: right;
  cursor: pointer;
}

input[type="submit"]:focus {
  outline: none;
}

.content {
  margin-bottom: 36px;
}
</style>
