<template>
  <div class="login">
    <div class="myform">
      <h3>Login Form</h3>
      <el-form :model="formdata" :rules="rules" >
        <el-form-item prop="name">
          <el-input v-model="formdata.name" placeholder="请输入用户名">
          </el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            type="password"
            v-model="formdata.pass"
            placeholder="请输入密码"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="fun">login</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script>
import instance from "../api/index";
export default {
  name: "login",
  data() {
    var namefun = (rule, value,callback)=>{
      let rg =  /^\w{5,10}$/   
      if(rg.test(value)) return;
      return callback(new Error('用户名格式不对'));
      
    }
    var passfun = (rule, value,callback)=>{
      let rg =  /^\d{6,10}$/
      if(rg.test(value)) return
      return  callback(new Error('密码格式不对'));
    }
    return {
      formdata: {
        name: "admin",
        pass: "123456",
      },
      rules:{
        name:[{validator:namefun,trigger:"blur"}],
        pass:[{validator:passfun,trigger:"blur"}],
      }
    };
  },
  methods: {
    async fun() {
      let name = this.formdata.name;
      let pass = this.formdata.pass;
      let { data } = await instance.post("/login", { name, pass });
      console.log(data);
      if (data.message == "fail") {
        return this.$message.error("登录失败");
      } else if (data.message == "success") {

        // 对登录数据进行保存
        localStorage.setItem("token", data.data.token);

        // 成功后的操作
        this.$message({
          type: "success",
          message: "登录成功",
          duration: 2000,
          onClose: () => {
            this.$router.push({ name: "table" });
          },
        });
      }
    },
  },
};
</script>


<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: #2d3a4b;
}
.myform {
  width: 400px;
  padding-top: 200px;
  margin: 0 auto;
}

.login h3 {
  width: 400px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  color: #ffffff;
}

.btn{
  width: 100%;
  height: 40px;
}
</style>
