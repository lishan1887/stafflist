import Mock from "mockjs";
const menuList = [
    // {
    //     name: "首页",
    //     icon: "el-icon-s-home",
    //     url: "/index",
    // },
    {
        name: "管理概况",
        icon: "el-icon-coin",
        url: "/management",
        children: [
            {
                name: "管理概况",
                icon: "el-icon-user",
                url: "/management/management",
            },
            
        ]
    },
    {
        name: "编制信息",
        icon: "el-icon-menu",
        url: "/compileInformation",
        children: [
            {
                name: "编制信息查询",
                icon: "el-icon-notebook-2",
                url: "/compileInformation/compile",
            },
        ]
    },
    {
        name: "岗位信息",
        icon: "el-icon-s-order",
        url: "/jobInformation",
        children: [
            {
                name: "岗位信息查询",
                icon: "el-icon-tickets",
                url: "/jobInformation/job",
            },
            // {
            //     name: "新建订单",
            //     icon: "el-icon-document",
            //     url: "/orders/create",
            // },
        ]
    },
    {
        name: "人员信息",
        icon: "el-icon-user",
        url: "/personnel",
        children: [
            {
                name: "人员信息查询",
                icon: "el-icon-chat-square",
                url: "/personnel/personnel",
            },
        ]
    },
    {
        name: "入职信息",
        icon: "el-icon-chat-dot-square",
        url: "/onboarding",
        children: [
            {
                name: "入职信息查询",
                icon: "el-icon-chat-square",
                url: "/onboarding/onboarding",
            },
        ]
    },
    {
        name: "离职信息",
        icon: "el-icon-user",
        url: "/resignation",
        children: [
            {
                name: "离职信息查询",
                icon: "el-icon-chat-square",
                url: "/resignation/resignation",
            },
        ]
    },
    {
        name: "调动记录",
        icon: "el-icon-user",
        url: "/transferRecord",
        children: [
            {
                name: "调动记录查询",
                icon: "el-icon-chat-square",
                url: "/transferRecord/transferRecord",
            },
        ]
    },
    {
        name: "报表管理",
        icon: "el-icon-user",
        url: "/report",
        children: [
            {
                name: "报表管理",
                icon: "el-icon-chat-square",
                url: "/report/report",
            },
        ]
    }
]
//左侧菜单接口
Mock.mock('http://localhost:8080/menu', 'get', () => {
    return {
        code: 200,
        success: true,
        message: "成功",
        data: menuList
    }
});
//登录接口
Mock.mock('http://localhost:8080/login', 'post', (req) => {
    const { password, username } = JSON.parse(req.body)
    if (username === 'user' && password === '123456') {
        return {
            code: 200,
            success: true,
            message: "登录成功",
            token: "3arc9h0vhcr0f8iprpnscmfo8s",
            nickname: "赵铁柱"
        }
    } else {
        return {
            code: 100,
            success: false,
            message: "账号或者密码有误",

        }
    }
})
//记录入职时间
Mock.mock('http://localhost:8080/in', 'get', () => {

    return {
        code: 200,
        success: true,
        message: "操作成功",
        time: "2020-07-01 00:00:00"
    }
})
//所有人员
Mock.mock('http://localhost:8080/all', 'get', () => {
    // const { password, username } = JSON.parse(req.body)
    return {
        code: 200,
        success: true,
        message: "成功",
        data: Mock.mock({
            "list|20-40": [{
                'account|100000-999999': 1,
                'id|+1': 1,
                'name': "@cname",
                'character|1': ["业务人员", "审核人员", "风控经理", "管理员"],
                'remark|5-20': '@cword',
                'reason|1': ["需要进系统录入进件补充资料", "对进件进行风险审核", "对放款进行风险审核"],
                'status|1': [1, 2],
               
            }],
            "total|1":[10,20,30,40,50]
        })
    }
})
//产品管理--全部产品   
Mock.mock('http://localhost:8080/productList', 'get', () => {
    // const { password, username } = JSON.parse(req.body)
    return {
        code: 200,
        success: true,
        message: "成功",
        data: Mock.mock({
            "list|8-20": [{
                'id|+1': 10000,
                'type|1': ["汽车消费","房产消费","抵押贷款"],
                'name|1':["巴贝拉贷款","麦穗金融","日借款","爱猫借贷","樱花分期","小熊金融","借乐花","星星钱袋"],
                'limit|1': [100,200,300],
                'rate|1':[4.1,4.3,3.8,3.9,5,3] ,
                'number':Mock.Random.integer(30,200),
                'total': Mock.Random.integer(10000000,500000000),
                'average': Mock.Random.integer(10000000,250000000),
                'status|1':[1,2],
                'highest|1':[36,60,24,360],
                'date':Mock.Random.date()
            }],
            "total|1":[10,20,30,40,50]
        })
    }
})