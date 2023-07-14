<template>
  <div class="body">
    <Navbar />
    <main class="main">
      <div class="user-panel">
        <div>
          <div><img src="/vite.svg" alt="head"></div>
          <div>
            <div class="user-name">Vite</div>
            <div class="desc">帐户描述
              <el-dropdown trigger="click" style="margin-left: 16px; cursor: pointer; color: #2f81f7;">
                <span class="el-dropdown-link" style="display: flex; align-items: center; font-size: 12px;">
                  <i class="arrow-right-arrow-left" style="font-family: fa-pro; margin-right: 4px;"></i> 切换到另一个帐户
                  <el-icon class="el-icon--right">
                    <arrow-down />
                  </el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item disabled>Action 4</el-dropdown-item>
                    <el-dropdown-item divided>Action 5</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
        </div>
        <div> <el-button>退出登录</el-button></div>
      </div>
      <div class="content">
        <aside>
          <ul class="group" v-for="(group, index) in aside" :key="index">
            <p>{{ group.title }}</p>
            <li v-for="(item, index) in group.items" :key="index">
              <router-link :to="item.link" tag="a"><i :class="item.icon"></i>
                <span>
                  {{ item.title }}
                </span></router-link>
            </li>
          </ul>
        </aside>
        <div>
          <router-view></router-view>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from '../../components/Navbar.vue';

interface AsideGroup {
  title: string,
  items: Array<AsideGroupItem>
}

interface AsideGroupItem {
  title: string,
  icon: string,
  link: string
}

const aside: Array<AsideGroup> = [
  {
    title: '用户中心',
    items: [
      {
        title: '仪表盘',
        icon: 'fa tachometer-alt',
        link: '/user'
      },
      {
        title: '我的衣柜',
        icon: 'fa star',
        link: '/user/closet'
      },
      {
        title: '角色管理',
        icon: 'fa users',
        link: '/user/role'
      },
      {
        title: '配置生成',
        icon: 'fa book',
        link: '/user/config'
      },
      {
        title: '我的举报',
        icon: 'fa flag',
        link: '/user/reports'
      },
      {
        title: '个人资料',
        icon: 'fa user',
        link: '/user/profile'
      }
    ]
  },
  {
    title: '浏览',
    items: [
      {
        title: '皮肤库',
        icon: 'fa archive',
        link: '/skinlib'
      }
    ]
  },
  {
    title: '管理',
    items: [
      {
        title: '管理面板',
        icon: 'fa cog',
        link: '/admin'
      }
    ]
  }
]
</script>

<style lang="less" scoped>
.body {
  display: flex;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  overflow: auto;
}

.main {
  max-width: 1280px;
  min-width: 1024px;
  width: 100vw;
  margin-right: auto;
  margin-left: auto;
  // border: 1px solid #f00;
  padding: 80px 40px 0px 40px
}

.user-panel {
  display: flex;
  align-items: center;
  line-height: 21px;
  margin-bottom: 24px;
  margin-top: 4px;
  justify-content: space-between;
}

.user-panel>div:first-child {
  display: flex;
  align-items: center;
}

.user-panel img {
  border-radius: 900px;
  box-shadow: rgba(240, 246, 252, 0.1) 0px 0px 0px 1px;
  height: 48px;
  width: 48px;
  line-height: 14px;
  margin-right: 16px;
}

.user-panel .user-name {
  color: rgb(230, 237, 243);
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  overflow-wrap: break-word;

}

.user-panel>div:first-child>div:last-child {
  display: flex;
  flex-direction: column;
}

.user-panel>div:first-child>div:last-child>div:last-child {
  display: flex;
}

.user-panel .desc {
  color: rgb(125, 133, 144);
  font-size: 14px;
  line-height: 21px;
  margin-inline-end: 16px;
  margin-right: 16px;
}

.content {
  display: flex;
}


.content aside {
  width: 236px;
  flex-shrink: 0;
  margin-right: 20px;
}

.content aside p {
  color: rgb(125, 133, 144);
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  display: flex;
  padding: 6px 8px;
  flex-direction: column;
  padding-block-end: 6px;
  padding-block-start: 6px;
  padding-bottom: 6px;
  padding-inline-end: 8px;
  padding-inline-start: 8px;
}

.content aside a {
  color: #e6edf3;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 6px 8px;
}

.content aside i {
  margin-right: 8px;
  min-height: 20px;
  overflow-wrap: break-word;
  pointer-events: none;
  font-size: 16px;
  color: rgb(125, 133, 144);
  cursor: pointer;
  font-weight: 400;
  flex-shrink: 0;
  display: flex;
  width: 20px;
  justify-content: center;
  align-items: center;
}

.content aside .group {
  border-bottom: 1px solid rgba(48, 54, 61, 0.48);
  padding: 8px 0;
}

.content aside li {
  border-radius: 8px;
  position: relative;
}

.content aside li:hover {
  background: #b1bac41f;
}

.content aside li:active {
  background: #b1bac433;
}

.content aside li.active {
  background: #b1bac414;
}

.content aside li.active::before {
  content: "";
  background: #2f81f7;
  border-radius: 6px;
  height: 24px;
  width: 4px;
  position: absolute;
  top: 6px;
  left: -8px;
}

.content aside span {
  line-height: 20px;
  font-size: 14px;
}

.content aside ul {
  list-style-type: none;
}

.content>div:last-child {
  flex-grow: 1;
}
</style>