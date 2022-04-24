import Vue from 'vue'
// import Router from 'vue-router'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (location) {

return originalPush.call(this, location).catch(err => err)

}

const routesMap = [
  {
    path:"/",
    name:'Layout',
    component:() => import('../views/Layout.vue'),
    redirect:"/management",
    children:[
      // {
      //   path:"/index",
      //   name:"index",
      //   meta:{
      //     roles:["admin","user"]
      //   },
      //   component:()=>import("../views/index/index.vue")
      // },
      {
        path:"/management",
        name:"management",
        // meta:{
        //   roles:["admin","user"]
        // },
        meta:{
          bread:["管理概况","管理概况"],
          roles:["admin","user"]
        },
        component:()=>import("../views/management/management.vue")
      },
      {
        path:"/compileInformation/compile",
        name:"compile",
        meta:{bread:["编制信息","编制信息查询"]},
        component:()=>import("../views/compileInformation/compile.vue")
      },
      {
        path:"/transferRecord/transferRecord",
        name:"transferRecord",
        meta:{bread:["调动记录","调动记录查询"]},
        component:()=>import("../views/transferRecord/transferRecord.vue")
      },
      {
        path:"/jobInformation/job",
        name:"job",
        meta:{bread:["岗位信息","岗位信息查询"]},
        component:()=>import("../views/jobInformation/job.vue")
      },
      {
        path:"/resignation/resignation",
        name:"resignation",
        meta:{bread:["离职信息","离职信息查询"]},
        component:()=>import("../views/resignation/resignation.vue")
      },
      {
        path:"/personnel/personnel",
        name:"personnel",
        meta:{bread:["人员信息","人员信息查询"]},
        component:()=>import("../views/personnel/personnel.vue")
      },
      {
        path:"/onboarding/onboarding",
        name:"onboarding",
        meta:{bread:["入职信息","入职信息查询"]},
        component:()=>import("../views/onboarding/onboarding.vue")
      },
      {
        path:"/report/report",
        name:"report",
        meta:{bread:["报表管理","报表管理"]},
        component:()=>import("../views/report/report.vue")
      },
    ]
    }
   
]

const router = new VueRouter({
  routes:routesMap
})

export default router