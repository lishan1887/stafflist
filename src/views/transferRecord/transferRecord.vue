<template>
  <div>
    <el-breadcrumb separator="/" class="bread">
      <el-breadcrumb-item v-for="(item, index) in breadlist" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :inline="true">
      <el-form-item label="员工号" >
        <el-input v-model="formInline.processType" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="姓名" >
        <el-input v-model="formInline.processType" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="调动前部门" >
        <el-input v-model="formInline.processType" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="调动后部门" >
        <el-input v-model="formInline.processType" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="调动日期">
            <el-date-picker
                type="datetimerange"
                v-model="payTime"
                start-placeholder="开始日期"
                range-separator="至"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd HH:mm:ss">
            </el-date-picker>
        </el-form-item>
      <el-form-item >
        <el-button type="primary" @click="onSubmit" >查询</el-button>
        <el-button type="primary"  @click="reset">重置</el-button>
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
        <el-table-column prop="name" label="变动日期" width="120"></el-table-column>
        <el-table-column prop="name" label="员工号" width="120"></el-table-column>
        <el-table-column prop="type" label="姓名" width="120"></el-table-column>
        <el-table-column prop="rate" label="用工类型" width="120"></el-table-column>
        <el-table-column prop="date" label="新二级部门" width="120"></el-table-column>
        <el-table-column prop="date" label="新三级部门"  width="120"></el-table-column>
        <el-table-column prop="date" label="新岗位名称" width="120"></el-table-column>
        <el-table-column prop="date" label="新岗位标准等级" width="120"></el-table-column>
        <el-table-column prop="date" label="新岗位序列"  width="120"></el-table-column>
        <el-table-column prop="date" label="新直属主管" width="120"></el-table-column>
        <el-table-column prop="date" label="新职级" width="120"></el-table-column>
        <el-table-column prop="date" label="新职务层次" fixed="right" align='center'></el-table-column>
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
  name: 'transferRecord',
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