<template>
  <el-container>
      <!--    左侧-->
    <el-aside width="200px">
      <img src="../assets/a.png">
      <p class="imgTitle">欢迎使用动力云客系统</p>
    </el-aside>
    <!--右侧-->
    <el-main>
      <div class="loginTile">欢迎登录</div>

      <el-form :model="user" ref="loginRefForm" label-width="120px" :rules="loginRules">

        <el-form-item label="账号" prop="loginAct">
          <el-input v-model="user.loginAct" />
        </el-form-item>

        <el-form-item label="密码 " prop="loginPaw" >
          <el-input v-model="user.loginPaw" type="password" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>

        <el-form-item>
          <el-checkbox label="记住我 " name="rememberMe">
          </el-checkbox>
        </el-form-item>

      </el-form>
    </el-main>
  </el-container>
</template>

<script>
import {doPost} from "../http/httpRequest.js"
export default {
  //组件名
  name: "LoginView",
  data(){
    return{
      //对象变量定义,是{}
      user :{ },
      loginRules:{
        //定义账号的验证规则
        loginAct:[
          { required: true, message: '账号不能为空', trigger: 'blur' },
        ],
        //定义验证密码的验证规则
        loginPaw:[
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min:6 ,max: 16, message: '登录密码长度为6-16位', trigger: 'blur'}
        ]
      },
    }
  },
  methods:{
    //登录
    login(){
      //提交前验证输入框的合法性
      this.$refs.loginRefForm.validate( (isValid) => {
        //isValid是验证后的结果，如果是true为验证通过，否则未通过
        if(isValid){
          //验证通过可以提交
          let formData = new FormData();
          formData.append("loginAct",this.user.loginAct);
          formData.append("loginPwd",this.user.loginPaw);
          doPost("/api/login",formData)
              .then(res =>{
                console.log(res)
              })
        }
      })
    }
  }
}
</script>

<style scoped>
.el-aside{
  background-color: #646cff;
  width: 40%;
  text-align: center;
}
.el-main{
  height: calc(100vh);
}
img{
  height: 380px;
}
.imgTitle{
  color: #f9f9f9;
  font-size: 28px;
  margin-bottom: 25px;
}
.loginTile{
  text-align: center;
  margin-top: 100px;
  margin-bottom: 25px;
  font-weight: bold;
}
.el-from{
  width: 60%;
  margin: auto;
}
.el-button{
  width: 100%;
}
</style>
