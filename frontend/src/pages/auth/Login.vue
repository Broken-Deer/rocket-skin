<template>
  <div class="body">
    <a href="/" class="title">Rocket Skin</a>
    <div class="content">
      <p class="subtitle">登录到 Rocket Skin</p>
      <el-input v-model="input" placeholder="Email 或角色名" :suffix-icon="User" />
      <el-input v-model="input" placeholder="密码" :suffix-icon="Key" />
      <el-line style="display: flex; justify-content: space-between; margin-bottom: 4px;">
        <div>
          <el-checkbox v-model="check">记住我</el-checkbox>
        </div>
        <router-link to="/auth/forgot">忘记密码?</router-link>
      </el-line>
      <el-button type="success" class="register" style="margin-bottom: 18px;">登录</el-button>
      <router-link to="/auth/register">注册新帐号</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { User, Key } from '@element-plus/icons-vue'
let input = ref('');
let check = ref(false);
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
}

.content>* {
  width: 300px;
  height: 38px;
  margin-bottom: 16px;
}

.subtitle {
  text-align: center;
  margin-bottom: 10px;
}
</style>
