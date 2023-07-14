<template>
  <div class="body">
    <a href="/" class="title">Rocket Skin</a>
    <div class="content">
      <p class="subtitle">注册一个帐号</p>
      <el-input v-model="input" placeholder="电子邮箱" :suffix-icon="Message" />
      <el-input v-model="input" placeholder="密码" :suffix-icon="Lock" />
      <el-input v-model="input" placeholder="重复密码" />
      <el-input v-model="input" placeholder="游戏内角色名" />
      <el-line style="display: flex; justify-content: space-between;">
        <router-link to="/auth/login">已经有帐号了？登录！</router-link>
        <el-button type="success" class="register">注册</el-button>
      </el-line>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Message, Lock } from '@element-plus/icons-vue'
let input = ref('');

</script>

<style lang="less" scoped>
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.title {
  font-size: 33px;
  font-family: minecraft;
  margin-bottom: 30px;
  color: #fff;
}

.content {
  background: #1a2029;
  border: 1px solid #30363d;
  border-radius: 10px;
  padding: 28px 20px;
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  width: 340px;
}

@media (max-width: 370px  ) {
  .content {
    width: calc(100vw - 20px);
  }
}

.content>* {
  height: 38px;
  margin-bottom: 16px;
}

.subtitle {
  text-align: center;
  margin-bottom: 10px;
}
</style>
