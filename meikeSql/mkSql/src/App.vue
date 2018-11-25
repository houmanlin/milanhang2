<template>
  <div id="app">
    <div class="nav">
      <div class="nav-left">美课优选后台管理系统<span>v1.0.0</span></div>
      <div class="nav-right" v-if="showLogin">
        <span @click="gotoLogin">登录</span>
        <span @click="gotoRegister">注册</span>
      </div>
    </div>
    <ul class="oul" v-if="!showLogin">
      <div class="oul-box">
        <li v-for="(item, index) in navList" :key="index" @click="routerLink(index)">
          <router-link :to="item.path">
            <div :class="navIndex === index ? 'li-hover' : 'li-nohover'">{{item.title}}</div>
          </router-link>
        </li>
      </div>
    </ul>
    <div class="login" v-if="showLoginBox">
      <div class="login-box">
        <div class="login-top"></div>
        <div class="login-title">
          <h1>管理员登录</h1>
        </div>
        <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
          <el-form-item
            label="手机号"
            prop="adminId">
            <el-input type="adminId" v-model.number="loginForm.adminId" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="passWord">
            <el-input type="password" v-model="loginForm.passWord" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="loginForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <div class="gotoRegister">没有账号？<span @click="gotoRegister">去注册</span></div>
          <el-button type="primary" @click="submitLogin('loginForm')">确定</el-button>
        </el-form>
      </div>
    </div>
    <div class="login" v-if="showRegisterBox">
      <div class="login-box">
        <div class="login-top"></div>
        <div class="login-title">
          <h1>管理员注册</h1>
        </div>
        <el-form :model="registerForm" status-icon ref="registerForm" label-width="100px" class="demo-ruleForm">
          <el-form-item
            label="用户名"
            prop="adminName"
            :rules="[
              { required: true, message: '用户名不能为空'},
            ]">
            <el-input type="text" v-model="registerForm.adminName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="手机号"
            prop="adminId"
            :rules="[
              { required: true, message: '手机号不能为空'},
              { type: 'type', message: '手机号必须为数字'}
            ]">
            <el-input type="adminId" v-model.number="registerForm.adminId" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="密码"
            prop="passWord"
            :rules="[
              { required: true, message: '密码不能为空'}
            ]">
            <el-input type="password" v-model="registerForm.passWord" autocomplete="off"></el-input>
          </el-form-item>
          <div class="gotoRegister">已有账号？<span @click="gotoLogin">去登录</span></div>
          <el-button type="primary" @click="submitRegister('registerForm')">确定</el-button>
        </el-form>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.loginForm.checkPass !== '') {
          this.$refs.loginForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.loginForm.passWord) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      showLogin: true,
      showLoginBox: true,
      showRegisterBox: false,
      navList: [
        {title: '活动', path: '/activity'},
        {title: '课程', path: '/course'},
        {title: '视频', path: '/video'},
        {title: '用户信息', path: '/user'},
        {title: '会员信息', path: '/member'},
        {title: '代理', path: '/agent'},
      ],
      navIndex: 0,
      loginForm: {
        adminId: '',
        passWord: '',
        checkPass: ''
      },
      registerForm: {
        adminName: '',
        adminId: '',
        passWord: ''
      },
      rules: {
        adminId: [
          { required: true, message: '手机号不能为空'},
          { type: 'number', message: '手机号必须为数字'}
        ],
        passWord: [
          { required: true },
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true },
          { validator: validatePass2, trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    routerLink(index) {
      this.navIndex = index;
    },
    submitLogin(formName) {
      var vm = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('登陆成功！');
        } else {
          console.log('error submit!!');
          return false;
        }
      })
      axios.get('/rest/admin/loginAdministrator',
      {
        params: {
          adminId: vm.loginForm.adminId,
          passWord: vm.loginForm.passWord
        }
      }).then(function(res){
        vm.showLogin = false
        vm.showLoginBox = false
        vm.showRegisterBox = false
      }).catch(function(res){
      })
    },
    submitRegister(formName) {
      var vm = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('注册成功！');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
      axios.get('/rest/admin/addAdministrator',
      {
        params: {
          adminId: vm.registerForm.adminId,
          passWord: vm.registerForm.passWord,
          adminName: vm.registerForm.adminName
        }
      }).then(function(res){
        vm.showLoginBox = true
      }).catch(function(res){
      })
    },
    gotoRegister() {
      var vm = this
      vm.showLoginBox = false
      vm.showRegisterBox = true
   
    },
    gotoLogin() {
      var vm = this
      vm.showLoginBox = true
      vm.showRegisterBox = false
   
      
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
a{
  text-decoration: none;
}
.nav{
  width: 100%;
  height: 50px;
  background-color: #438eb9;
  overflow: hidden;
  color: #fff;
  line-height: 50px;
  padding: 0px 30px;
  box-sizing: border-box;
  .nav-left{
    float: left;
    font-size: 18px;
    span{
      font-size: 14px;
      margin-left: 10px;
      color: #ff9900;
      font-style: italic;
    }
  }
  .nav-right{
    float: right;
    font-size: 14px;
    span{
      color: #fff;
      margin-left: 20px;
    }
  }
}
.oul{
  list-style: none;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  text-align: right;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  .oul-box{
    width: 100%;
    text-align: right;
    display: flex;
    display: flex;
    justify-content: space-around;
    li{
      width: 100px;
      height: 38px;
      line-height: 38px;
      color: #000;
      text-align: center;
      display: block;
      padding: 0 8px;
      border-radius: 100px;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
      .li-nohover{
        padding: 0 8px;
        border-radius: 100px;
        color: #0e071c;
      }
      .li-hover{
        background-color: #438eb9;
        color: #fff;
        border-radius: 100px;
      }
      .li-nohover:hover{
        background-color: #438eb9;
        color: #fff;
        text-decoration: none;
      }
    }
    li:hover{
      padding: 0 4rpx;
      background-color: #438eb9;
      color: #fff;
      text-decoration: none;
    }
  }
  a{
    color: #fff;
  }
  // .li-nohover{
  //   height: 45px;
  //   line-height: 45px;
  //   border-bottom: 2px solid #fff;
  //   margin-right: 40px;
  //   color: #0e071c;
  // }
  // .li-hover{
  //   height: 45px;
  //   line-height: 45px;
  //   border-bottom: 2px solid #ff9900;
  //   margin-right: 40px;
  //   color: #ff9900;
  // }
}
.login{
  width: 100%;
  height: 840px;
  background: url('../src/assets/bgc.jpg') no-repeat;
  background-size: 100% 100%;
  position: relative;
  .login-box{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    background-color: #fff;
    opacity: 0.6;
    width: 450px;
    padding-bottom: 20px;
    .login-top{
      background-color: #3b3127;
      height: 6px;
      width: 90%;
      margin: 0 auto;
    }
    .login-title{
      font-weight:bold;
      font-size: 12px;
    }
  }
  .gotoRegister{
    margin-bottom: 30px;
    span{
      color: blue;
    }
  }
}
.el-input{
  width: 90%;
}
</style>
