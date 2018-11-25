<template>
  <div id="app">
    <div class="header">
      <!-- <div class='header-div-box' style='overflow:hidden'>
        <div class="header-div">
          <div class="div-nologin">
            <div class="nologin-login">
              <div class="nologin-login-img">
                <img src="../src/assets/login.png" alt="">
              </div>
              <div class="nologin-login-text">登录</div>
            </div>
            <div class="nologin-login nologin-login-other">
              <div class="nologin-login-img">
                <img src="../src/assets/register.png" alt="">
              </div>
              <div class="nologin-login-text">注册</div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="header-box">
        <div class="header-box-nav">
          <div class="box-nav-left">
            <div class="nav-left-img">
              <img src="../src/assets/logo.png" alt="">
            </div>
          </div>
          <ul class="oul">
            <li v-for="(item, index) in navList" :key="index" @click="routerLink(index)">
              <router-link :to="item.path">
                <div :class="navIndex === index ? 'li-hover' : 'li-nohover'">{{item.title}}</div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      navList: [
        {title: '首页', path: '/'},
        {title: '关于美课', path: '/about'},
        // {title: '活动', path: '/activity'},
        // {title: '课程', path: '/'},
        // {title: '实践', path: '/'},
      ],
      navIndex: 0,
    }
  },
  methods: {
    routerLink(index) {
      this.navIndex = index;
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Arial,Avenir,Helvetica,sans-serif;
  -webkit-font-smoothing: antialiased;
}
ul{
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 40px;
}
a{
  text-decoration: none;
}
// 头部导航栏
.header{
  .header-div-box{
    width: 100%;
    // width: 1367px;
    height: 45px;
    background-color: #0e071c;
    // background: url('../src/assets/bg.jpg') no-repeat;
    // background-size: 100%;
    margin: 0 auto;
    .header-div{
      font-size: 20px;
      color: #fff;
      display: flex;
      float: right;
      display: block;
      // margin-right: 278px;
      margin-right: 50px;
      .div-nologin{
        display: flex;
        .nologin-login{
          width: 60px;
          height: 45px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: center;
          font-size: 15px;
          cursor: pointer;
          .nologin-login-img{
            width: 20px;
            height: 20px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .nologin-login-text{
            font-size: 15px;
            cursor: pointer;
          }
        }
        .nologin-login-other{
          margin-left: 60px;
        }
      }
    }
  }
  .header-box{
    width: 100%;
    // box-shadow: 1px 3px #f6f5f1;
    .header-box-nav{
      // width: 1367px;
      width: 100%;
      background-color: #0e071c;
      height: 100px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      .box-nav-left{
        display: flex;
        align-items: center;
        .nav-left-img img{
          width: 240px;
          height: 240px;
          margin: 130px;
        }
        .nav-left-span{
          font-size: 20px;
          font-weight: 600;
        }
      }
      .oul{
        list-style: none;
        margin-right: 50px;
        // margin-right: 10px;
        padding: 0;
        width: auto;
        align-self: center;
        display: flex;
        justify-content: space-around;
        // font-size: 16/7.5vw;
        a{
          color: #fff;
        }
        .li-nohover{
          // width: 100%;
          height: 45px;
          line-height: 45px;
          border-bottom: 2px solid #0e071c;
          margin-right: 40px;
          color: #fff;
          text-align: center;
        }
        .li-hover{
          // width: 100%;
          height: 45px;
          line-height: 45px;
          border-bottom: 2px solid #0bffff;
          margin-right: 40px;
          color: #0bffff;
          text-align: center;
        }
        // li{
        //   width: 100px;
        //   height: 38px;
        //   line-height: 38px;
        //   color: #000;
        //   text-align: center;
        //   display: block;
        //   padding: 0 8px;
        //   border-radius: 100px;
        //   text-decoration: none;
        //   white-space: nowrap;
        //   cursor: pointer;
        //   .li-nohover{
        //     padding: 0 8px;
        //     border-radius: 100px;
        //   }
        //   .li-hover{
        //     background-color: #0bffff;
        //     color: #fff;
        //   }
        //   .li-nohover:hover{
        //     background-color: #0bffff;
        //     color: #fff;
        //     text-decoration: none;
        //   }
        // }
        // li:hover{
        //   padding: 0 4rpx;
        //   background-color: #0bffff;
        //   color: #fff;
        //   text-decoration: none;
        // }
      }
    }
  }
}
</style>
