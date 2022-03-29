let Mock = require("mockjs")
let data = [
    {name:"fengmk",text:"中国镜像npm升级广告",num:"43456",response:"8"},
    {name:"atian",text:"汪走至，求扩散 淘宝npm",num:"77341",response:"11"},
    {name:"itdsii",text:"[2011/11/26]亲大家遵纪守法",num:"165254",response:"33"},
    {name:"yudjie",text:"js详细介绍",num:"9544",response:"56"},
    {name:"dyfmri",text:"vue+js+MySQL全站实践，动态菜单，web",num:"10247",response:"100"},
    {name:"imapkh",text:"汪走至，求扩散 淘宝npm",num:"100091",response:"23"},
    {name:"inkii",text:"Node.js 2021年开发者报告解读，健康稳步的发张中",num:"17891",response:"13"},
    {name:"dahuanzhou",text:"冒个泡，今年是虎年",num:"22446",response:"6"},
    
]

// 获取
Mock.mock("/api/table","get",function(config){
    console.log(config)
    return data
})

// 删除
Mock.mock(/\/api\/table\/\d/,"delete",function(config){
    console.log(config.url)
    let arr = config.url.split("/")
    let id = arr.pop()
    data.splice(id,1)
    data = data.map(function(item){
        return {
            name:item.name,
            text:item.text,
            num:item.num,
            response:item.response
        }
    })
    return data
})

