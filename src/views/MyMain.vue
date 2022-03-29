<template>
  <div class="main">
    <el-container>
      <el-aside  style="background-color: #222D32" class="aside">
        <el-menu
          background-color="#222D32"
          text-color="#fff"
          :router="true"
        >
          <el-menu-item class="item" index="1-1">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-submenu index="2" class="item">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/"><i class="el-icon-help"></i>文章列表</el-menu-item>
              <el-menu-item index="2-1"><i class="el-icon-help"></i>多层路由实例</el-menu-item>
            </el-menu-item-group>
          </el-submenu>


        
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <h3>{{this.$route.meta}}</h3>
        </el-header>
        <el-main>
            <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>




<script>
export default {
  name: "Main",
  data() {
    return {};
  },
  methods: {},
 
};
</script>


<style scoped>
.aside {
  height: 100vh;
}
.aside .item{
  background: #222D32;
  color: #ffffff;
}
.aside .item span {
  color: #ffffff;
}


</style>
