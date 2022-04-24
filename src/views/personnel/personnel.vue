<template>
  <div>
    <el-breadcrumb separator="/" class="bread">
      <el-breadcrumb-item v-for="(item, index) in breadlist" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :inline="true">
      <el-form-item label="基本条件" >
        <el-select v-model="formInline.processType"
          filterable
          clearable
          placeholder="姓名"
        >
          <el-option
              v-for="item in applyType"
              :key="item.value"
              size="small"
              :label="item.label"
              :value="item.code">
          </el-option>
        </el-select>
        <el-select v-model="formInline.processType"
          filterable
          clearable
          placeholder="等于"
        >
          <el-option
              v-for="item in applyType"
              :key="item.value"
              size="small"
              :label="item.label"
              :value="item.code">
          </el-option>
        </el-select>
        <el-select v-model="formInline.processType"
          filterable
          clearable
          placeholder="张三"
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
      <el-form-item label="经历条件" >
         <el-select v-model="formInline.processType"
          filterable
          clearable
          placeholder="毕业院校"
        >
          <el-option
              v-for="item in applyType"
              :key="item.value"
              size="small"
              :label="item.label"
              :value="item.code">
          </el-option>
         </el-select>
         <el-select v-model="formInline.processType"
          filterable
          clearable
          placeholder="包含"
        >
          <el-option
              v-for="item in applyType"
              :key="item.value"
              size="small"
              :label="item.label"
              :value="item.code">
          </el-option>
         </el-select>
         <el-select v-model="formInline.processType"
          filterable
          clearable
          placeholder="上海大学"
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
      <el-form-item >
        <el-button type="primary" @click="onSubmit" >查询</el-button>
        <el-button type="primary" @click="reset">重置</el-button>
        <el-button type="primary" @click="onSubmit" >查询</el-button>
        <el-button type="primary" @click="onSubmit" >查询</el-button>
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
        <el-table-column prop="name" label="序号" width="120"></el-table-column>
        <el-table-column prop="name" label="员工号" width="120"></el-table-column>
        <el-table-column prop="type" label="姓名" width="120"></el-table-column>
        <el-table-column prop="date" label="二级部门" width="120"></el-table-column>
        <el-table-column prop="date" label="职务层级"  width="120"></el-table-column>
        <el-table-column prop="date" label="个人职级" width="120"></el-table-column>
        <el-table-column prop="date" label="身份证号" width="120"></el-table-column>
        <el-table-column prop="date" label="性别"  width="120"></el-table-column>
        <el-table-column prop="date" label="出生日期" width="120"></el-table-column>
        <el-table-column prop="date" label="年龄" width="120"></el-table-column>
        <el-table-column prop="date" label="加入本企业日起" width="120"></el-table-column>
        <el-table-column prop="date" label="司龄" fixed="right" align='center'></el-table-column>
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
  name: 'personnel',
  mixins: [breadCrumb],
  data() {
    return {
      date: [],
      tableData: [],
      pageNum: 1,
      pageSize: 20,
      pageSizes: [20, 40, 60],
      total:0,
       formInline: {
        processType: '',
      },
      payTime:[],
    };
  },
  mounted() {
    this.list();
    console.log("我执行了")
  },
  methods: {
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
.block {
  margin-top: 200px;
  text-align: center;
}
</style>