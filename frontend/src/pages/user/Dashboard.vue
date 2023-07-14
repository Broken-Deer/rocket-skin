<template>
  <div class="content">
    <div class="line1">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>使用情况</span>
          </div>
        </template>
        <div style="display: flex; justify-content: space-around; padding: 18px 0px 28px; margin-left: -20px;">
          <div style="display: flex;flex-direction: column;">
            <RouterLink to="user/role">
              <el-button plain class="info-block">
                <i class="fa users"></i>
                <div><span>角色数量</span><span class="count">1 / 114</span></div>
              </el-button>
            </RouterLink>
            <RouterLink to="user/closet">
              <el-button plain class="info-block" style="margin-top: 10px;">
                <i class="fa hdd"></i>
                <div><span>存储空间</span><span class="count">1 / 514 KB</span></div>
              </el-button>
            </RouterLink>
          </div>
          <div style="display: flex;flex-direction: column;align-items: center; margin-left: -50px;">
            <span style="font-size: 16px; font-weight: 700; margin-top: 10px;">当前积分</span>
            <span class="count" style="font-size: 60px; margin: 10px 0;">1200</span>
            <span style="color: rgb(201, 209, 217); font-size: 13.3px;">点击积分查看说明</span>
          </div>
        </div>
        <el-button type="primary" style="float: right; margin-bottom: 20px; margin-right: 10px;"><i class="fa calendar-check" style="margin-right: 6px; font-weight: 400;"></i> 签到</el-button>
      </el-card>
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>快速配置启动器</span>
          </div>
        </template>
        <div class="markdown" v-html="launcherConfig"></div>
        <el-button type="primary">将此按钮拖动至启动器</el-button>
        <el-button>启动器配置教程</el-button>
      </el-card>
    </div>
    <div class="line2">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>告示牌</span>
            <el-button class="button" text><i class="fa edit"></i></el-button>
          </div>
        </template>
        <div class="markdown" v-html="board"></div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { Marked } from '@ts-stack/markdown'
const launcherConfig = `
<p>本站的 Yggdrasil API 认证服务器地址：<code>https://bs.btlcraft.top/api/yggdrasil</code></p>

<p>点击下方按钮复制 API 地址，或者将按钮拖动至启动器的任意界面即可快速添加认证服务器。</p>

`;
const board = `

`


</script>

<style lang="less" scoped>
div.content {
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 100%;
  column-gap: 20px;
}

.box-card {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.info-block {
  width: 200px;
  height: 80px;
  margin-left: 0;
}

.info-block i {
  font-weight: 200;
  margin-right: 18px;
  font-size: 26px;
}

.info-block div {
  display: flex;
  flex-direction: column;
  margin-top: -4px;
}

.info-block span {
  margin-top: 6px;
}

.count {
  font-family: minecraft_ten;
}
</style>