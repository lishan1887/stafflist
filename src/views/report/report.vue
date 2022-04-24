<template>
  <div>
    <el-breadcrumb separator="/" class="bread">
      <el-breadcrumb-item v-for="(item, index) in breadlist" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="mt">
      <el-table
        :data="tableData"
        border
        :header-cell-style="{background:'#f5f7fa'}"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column prop="name" label="报表类型" align='center'></el-table-column>
        <el-table-column label="操作" fixed="right" align='center'>
            <template :scope="scope">
                <el-button type="text">导出</el-button>
                <!-- <span v-else :loading="scope.row.loading || false" type="type">
                生成中
                </span> -->
            </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
            :current-page.sync="pageNum"
            :total="total"
            :page-size="pageSize"
            :pager-count="5"
            :page-sizes="pageSizes"
            layout="total, prev, pager, next, sizes, jumper"
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "@/util/http";
import breadCrumb from "@/mixins/breadCrumb.js";
export default {
  name: 'report',
  mixins: [breadCrumb],
  data() {
    return {
      date: [],
      tableData: [
          {
              name: '报表'
          }
      ],
      pageNum: 1,
      pageSize: 20,
      pageSizes: [20, 40, 60],
      total:0,
    };
  },
  mounted() {
    // this.list();
    // console.log("我执行了")
  },
  methods: {
    // list() {
    //   get("/productList").then((res) => {
    //     this.tableData = res.data.list;
    //     this.total = res.data.total;
    //   });
    // },
    // onSubmit(){

    // },
    // reset(){

    // },
    handleSelectionChange() {},
    handleCurrentChange(current){
     this.current=current
      // get("/productList",{page:current,pageSize:this.pageSize})
    },
    handleSizeChange(size){
      this.pageSize=size
      // get("/productList",{page:current,pageSize:this.pageSize})
    },
    handleSizeChange(val) {
      this.pageSize = val;
      // this.loadData();
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      // this.loadData();
    },
  },
};
</script>

<style scoped  lang="less">
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  margin-left: 10px;
}
/deep/.el-button--text{
    color: #409EFF !important;
}
.block {
  margin-top: 200px;
  text-align: center;
}
</style>