<template>
  <div>
    <el-breadcrumb separator="/" class="bread">
      <el-breadcrumb-item v-for="(item, index) in breadlist" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :inline="true">
      <el-form-item label="二级部门" >
        <el-select v-model="formInline.processType"
          filterable
          clearable
          placeholder="全部"
        >
          <el-option
              v-for="item in applyType"
              :key="item.value"
              size="small"
              :label="item.label"
              :value="item.code">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="人员类型" >
        <el-select v-model="formInline.finalStatus"
          filterable
          clearable
          placeholder="全部"
        >
          <el-option
              v-for="item in progressStatus"
              size="small"
              :key="item.value"
              :label="item.label"
              :value="item.code">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item >
        <el-button type="primary" size="small" @click="onSubmit" >查询</el-button>
        <el-button type="primary" size="small" @click="reset">导出</el-button>
      </el-form-item>
      <div class="content-block" style="margin-top:20px"></div>
    </el-form>
    <div class="mt">
      <el-table
        :data="tableData"
        border
        :header-cell-style="{background:'#f5f7fa'}"
        align='center'
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column prop="name" label="二级部门" width="120"></el-table-column>
        <el-table-column prop="name" label="合：动态编制" width="120"></el-table-column>
        <el-table-column prop="type" label="合：固定编制" width="120"></el-table-column>
        <el-table-column prop="rate" label="合：编制总数" width="120"></el-table-column>
        <el-table-column prop="date" label="合：实有人数" width="120"></el-table-column>
        <el-table-column prop="date" label="合：空编数"  width="120"></el-table-column>
        <el-table-column prop="date" label="派：编制总数" width="120"></el-table-column>
        <el-table-column prop="date" label="派：实有人数" width="120"></el-table-column>
        <el-table-column prop="date" label="派：空编数"  width="120"></el-table-column>
        <el-table-column prop="date" label="外：编制总数" width="120"></el-table-column>
        <el-table-column prop="date" label="外：实有人数" width="120"></el-table-column>
        <el-table-column prop="date" label="外：空编数" fixed="right" align='center'></el-table-column>
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
  name: 'compile',
  mixins: [breadCrumb],
  data() {
    return {
      searchValue: "",
      date: [],
      leibie: "",
      status: "",
      fenqi: "",
      advanced: false,
      params: {},
      tableData: [],
      pageNum: 1,
      pageSize: 20,
      pageSizes: [20, 40, 60],
      total:0,
       formInline: {
        processType: '',　　// 申请类型
        finalStatus: '',　　// 当前状态
      },
      progressStatus:[],　　//当前状态
      applyType: []
    };
  },
  mounted() {
    this.list();
    console.log("我执行了")
  },
  methods: {
    expand() {
      this.advanced = !this.advanced;
    },
    search() {
      console.log(this.date);
    },
    list() {
      get("/productList").then((res) => {
        this.tableData = res.data.list;
        this.total = res.data.total;
      });
    },
    onSubmit(){

    },
    reset(){

    },
    handleSelectionChange() {},
    handleCurrentChange(current){
     this.current=current
      // get("/productList",{page:current,pageSize:this.pageSize})
    },
    handleSizeChange(size){
      this.pageSize=size
      // get("/productList",{page:current,pageSize:this.pageSize})
    },
    detail(name){
      sessionStorage.setItem("name",name)
      this.$router.push("/product/detail");
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

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  margin-left: 10px;
}
.block {
  margin-top: 200px;
  text-align: center;
}
</style>