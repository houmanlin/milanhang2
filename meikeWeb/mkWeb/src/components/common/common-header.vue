<template>
  <div class="header">
    <div class='header-div-box' style='overflow:hidden'>
      <div class="header-div">
        <div class="div-nologin">
          <div class="nologin-login">
            <div class="nologin-login-img">
              <img src="../../assets/login.png" alt="">
            </div>
            <div class="nologin-login-text">登录</div>
          </div>
          <div class="nologin-login nologin-login-other">
            <div class="nologin-login-img">
              <img src="../../assets/register.png" alt="">
            </div>
            <div class="nologin-login-text">注册</div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-box">
      <div class="header-box-nav">
        <div class="box-nav-left">
          <div class="nav-left-img">
            <img src="../../assets/logo_other.png" alt="">
          </div>
          <div class="nav-left-span">美课优选</div>
        </div>
        <ul class="oul">
          <li><div class="li-nohover li-hover"><a href="aaa">首页</a></div></li>
          <li><div class="li-nohover">活动</div></li>
          <li><div class="li-nohover">课程</div></li>
          <li><div class="li-nohover">实践</div></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="less">
// 头部导航栏
.header{
  .header-div-box{
    width: 100%;
    height: 45px;
    background-color: #f09d00;
    .header-div{
      font-size: 20px;
      color: #fff;
      display: flex;
      float: right;
      display: block;
      margin-right: 278px;
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
    box-shadow: 1px 3px #f6f5f1;
    .header-box-nav{
      width: 1117px;
      height: 100px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      .box-nav-left{
        display: flex;
        align-items: center;
        .nav-left-img img{
          width: 38px;
          height: 38px;
          margin: 10px;
        }
        .nav-left-span{
          font-size: 20px;
          font-weight: 600;
        }
      }
      .oul{
        list-style: none;
        margin: 0;
        padding: 0;
        width: auto;
        align-self: center;
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
          }
          .li-hover{
            background-color: #f09d00;
            color: #fff;
          }
          .li-nohover:hover{
            background-color: #f09d00;
            color: #fff;
            text-decoration: none;
          }
        }
        li:hover{
          padding: 0 4rpx;
          background-color: #f09d00;
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
}
</style>

