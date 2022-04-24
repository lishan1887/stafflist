<template>
  <div>
    <el-row :gutter="24" style="margin-bottom: 20px">
      <el-col :span="6">
      </el-col>
    </el-row>
    <el-row :gutter="12">
       <el-col :span="8">
        <el-card>
          <div slot="header" style="text-align:center;line-height:30px">
            <span>本年入职概况</span>
          </div>
          <div style="margin-left:20%">
            <span>合同制：3325人</span>
            <span style="margin-left:50px">劳务派遣：3325人</span>
          </div>
          <div style="margin-left:20%">
            <span>全口径：3325人</span>
            <span style="margin-left:50px">仍在职人数：3325人</span>
          </div>
           <div style="margin-left:20%">
            <span>保有率：3325人</span>
            <span style="margin-left:50px">紧密型外包：3325人</span>
          </div>
          <div ref="onboarding" style="height:240px"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <div slot="header" style="text-align:center;line-height:30px">
            <span>实有人数概况</span>
          </div>
          <div style="margin-left:20%">
            <span>合同制：</span>
            <span style="margin-left:50px">劳务派遣：</span>
          </div>
          <div style="margin-left:20%">
            <span>全口径：</span>
            <span style="margin-left:50px">本年净增：</span>
          </div>
           <div style="margin-left:20%">
            <span>增幅：</span>
            <span style="margin-left:50px">紧密型外包：</span>
          </div>
          <div ref="analysis" style="height: 240px"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <div slot="header" style="text-align:center;line-height:30px">
            <span>本年离职概况</span>
          </div>
          <div style="margin-left:20%">
            <span>合同制：</span>
            <span style="margin-left:50px">劳务派遣：</span>
          </div>
          <div style="margin-left:20%">
            <span>全口径：</span>
            <span style="margin-left:50px">待离职：</span>
          </div>
           <div style="margin-left:20%">
            <span>紧密型外包：</span>
            <!-- <span style="margin-left:50px">紧密型外包：</span> -->
          </div>
          <div ref="percent" style="height:240px"></div>
        </el-card>
      </el-col>
    </el-row>
    
      <div class="mt">
        <el-table
          :data="tableData"
          border
          :header-cell-style="{background:'#f5f7fa'}"
          align='center'
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column prop="name" label="区分" width="120"></el-table-column>
          <el-table-column prop="name" label="入职人数（占比）" width="120"></el-table-column>
          <el-table-column prop="type" label="在职人数（占比）" width="120"></el-table-column>
          <el-table-column prop="rate" label="离职人数（占比）" width="120"></el-table-column>
          <el-table-column prop="date" label="男性人数（占比）" width="120"></el-table-column>
          <el-table-column prop="date" label="女性人数（占比）"  width="120"></el-table-column>
          <el-table-column prop="date" label="平均年龄" width="120"></el-table-column>
          <el-table-column prop="date" label="平均工龄" width="120"></el-table-column>
          <el-table-column prop="date" label="平均司龄"  width="120"></el-table-column>
          <el-table-column prop="date" label="研究生学历及以上（占比）" width="120"></el-table-column>
          <el-table-column prop="date" label="本科人数（占比）" width="120"></el-table-column>
          <el-table-column prop="date" label="大学专科学历及以下（占比）" width="120"></el-table-column>
          <el-table-column prop="date" label="共产党员（占比）" fixed="right" align='center'></el-table-column>
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
export default {
    name: 'management',
  data() {
    return {
      tableData: [],
      pageNum: 1,
      pageSize: 20,
      pageSizes: [20, 40, 60],
      total:0,
    };
  },
  mounted() {
    this.drawline();
    this.drawPie()
    this.onboardingPie()
  },
  methods: {
     onboardingPie(){
      let myChart = this.$echarts.init(this.$refs["onboarding"]);
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          itemHeight: 13,
          itemWidth: 13,
          orient: "rect",
          x: 'right',
          y: 'center',
          textStyle: {
            color: "#02D3E9",
            fontSize: 12,
          },
        },
        series: [
          {
            name: "入职概况",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 335, name: "校招" },
              { value: 310, name: "社招" },
              { value: 234, name: "其他" },
              // { value: 135, name: "待入职" },
              // { value: 1548, name: "其他" },
            ],
          },
        ],
      };

      // 绘制图表
      myChart.setOption(option);
    },
    drawline() {
      //初始化容器
      var myChart = this.$echarts.init(this.$refs["analysis"]);
      //初始化图标配置选项
      var option = {
        xAxis: {
          type: "category",
          // boundaryGap: false,
          data: ["20-01", "20-02", "20-03", "20-04", "20-05", "20-06", "20-07"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [30, 84, 56, 47, 84, 61, 90],
            type: "line",
            smooth: true,
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#4f88ff", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "white", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            lineStyle: {
              color: "#4f88ff",
            },
          },
        ],
      };

      //设置成功
      myChart.setOption(option);
    },
    drawPie(){
      let myChart = this.$echarts.init(this.$refs["percent"]);
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          itemHeight: 13,
          itemWidth: 13,
          orient: "rect",
          x: 'right',
          y: 'center',
          textStyle: {
            color: "#02D3E9",
            fontSize: 12,
          },
        },
        series: [
          {
            name: "离职概况",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 335, name: "离职" },
              { value: 310, name: "退休" },
              { value: 234, name: "退出" },
              { value: 135, name: "待离职" },
              // { value: 1548, name: "其他" },
            ],
          },
        ],
      };

      // 绘制图表
      myChart.setOption(option);
    },
    handleSelectionChange() {

    },
    handleSizeChange(size){
      this.pageSize=size
      // get("/productList",{page:current,pageSize:this.pageSize})
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      // this.loadData();
    },
  },
};
</script>

<style  scoped lang="less">
.ico {
  float: right;
  font-size: 90px;
  color: rgba(255, 255, 255, 0.3);
}
.in {
  background: #4f88ff;
}
p {
  line-height: 30px;
  color: #fff;
  font-size: 16px;
}
.allin {
  background: #5050ff;
}
.allout {
  background: #f49b3b;
}
.out {
  background: #f26075;
}
.time p {
  color: #666666;
}
.block {
  margin-top: 30px;
  text-align: center;
}
</style>