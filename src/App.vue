<template>
  <div>
    <el-container>
      <el-header >Header</el-header>
      <el-container>
        <el-aside width="200px" style="height: calc(100vh - 80px);">
          <el-menu
            :default-active="$route.path"
            :router="true"
          >
            <el-submenu v-for="item in menuLtst" :key="item.id" :index="item.id">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{ item.title }}</span>
              </template>
              <template>
                <el-menu-item v-for="childItem in item.child" :key="childItem.path" :index="childItem.path">
                  <i :class="item.icon"></i>
                  <span slot="title">{{ childItem.title }}</span>
                </el-menu-item>
              </template>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <div><router-view></router-view></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      menuLtst: [
        {
          id: '1',
          title: '音乐管理',
          icon: '',
          child: [
            {
              path: '/home/upload',
              title: '音乐上传',
              icon: '',
            }
          ]
        }
      ]
    }
  },
  created() {
    console.log('-----', this.$route);
  }
}
</script>

<style>
.el-menu {
  height: 100%;
}
.el-header {
  border-bottom: 1px solid #f5f5f5;
}
</style>
