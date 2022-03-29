import Vue from "vue";
import VueRouter from "vue-router";
import MyMain from "../views/MyMain"
import Login from "../views/Login"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: MyMain,
    children:[
      {path:"1-1",meta:"首页",component:()=>import("../views/second/ShouYe.vue")},
      {path:"",meta:"文章列表",name:"table",component:()=>import("../views/second/Son1.vue")},
      {path:"2-1",meta:"多层路由列表",component:()=>import("../views/second/Son2.vue")},
     
    ]
    
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    
  },
];

const router = new VueRouter({
  routes,
});


export default router;
