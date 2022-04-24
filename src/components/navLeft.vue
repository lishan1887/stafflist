<template>
  <div>
    <h1 class="title">上海联通人力资源数据管理系统</h1>
    <el-menu background-color="#001529" text-color="#fff" :router="true" >
      <menus v-for="(item,index) in menuData" :menu="item" :key="index"></menus>
    </el-menu>
  </div>
</template>

<script>
import { get } from "@/util/http";
import menus from "./menu";
export default {
  data() {
    return {
      menuData: [],
    };
  },
  mounted() {
    get("/menu").then((res) => {
      // debugger
      this.menuData = res.data.data;
    });
  },
  components: {
    menus,
  },
};
</script>

<style scoped lang="less">
.title {
  line-height: 50px;
  color: #fff;
  text-align: center;
}
.el-menu{border: none;}
</style>