<template>
  <footer>
    <div class="mask" v-if="imgShow" @click="closeXiaochegnxu">
      <img src="../../assets/xiaochengxu.jpg" alt="">
    </div>
    <div class="mask" v-if="imgShowTwo" @click="closeGongzhong">
      <img src="../../assets/gongzhonghao.jpg" alt="">
    </div>
    <div class="footer">
      <div class="footer-right">
        <div>
          <img src="http://video.milanhang.com/image/wangzhan/photo/6.jpg" alt="" @click="openXiaochengxu">
          <div class="imageBottomOne">小程序</div>
        </div>
        <div>
          <img src="http://video.milanhang.com/image/wangzhan/photo/5.jpg" alt="" @click="openGongzhong">
          <div class="imageBottomTwo">公众号</div>
        </div>
      </div>
      <div class="company-name">沈阳市米篮航科技有限公司 Copyright © 2018 辽ICP备18004599号-1 版权声明 网站声明 网站地图</div>
      <div class="footer-one">
        客服电话：024-31507533
        <br>
        公司地址：沈阳市和平区三好街87号三好SOHO 1003
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return{
      imgShow: false,
      imgShowTwo: false
    }
  },
  methods:{
    openXiaochengxu: function() {
      this.imgShow = true
    },
    closeXiaochegnxu: function() {
      this.imgShow = false
    },
    openGongzhong: function() {
      this.imgShowTwo = true
    },
    closeGongzhong: function() {
      this.imgShowTwo = false
    }
  }
}
</script>

<style lang="less">
.mask{
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background-color: black;
  opacity: 0.9;
  z-index: 999;
  img{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 500/7.5vw;
    height: 500/7.5vw;
  }
}
.footer{
  width: 100%;
  height: 350/7.5vw;
  overflow: hidden;
  display: flex;
  background: url("http://video.milanhang.com/image/wangzhan/photo/4.jpg") no-repeat;
  background-size: 100% 100%;
  position: relative;
  // margin-top: 100px;
  .footer-right{
    position: absolute;
    right: 20/7.5vw;
    top: 50/7.5vw;
    display: -webkit-flex;
    font-size: 14/7.5vw;
    img{
      width: 100/7.5vw;
      height: 120/7.5vw;
      margin-left: 30/7.5vw;
      margin-right: 30/7.5vw;
    }
    .imageBottomOne{
      text-align: center;
      color: #fff;
    }
    .imageBottomTwo{
      text-align: center;
      color: #fff;
    }
  }
  .footer-one{
    position: absolute;
    bottom: 19%;
    left: 30%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 16/7.5vw;
    width: 400/7.5vw;
  }
  .company-name{
    width: 100%;
    height: 65/7.5vw;
    background: #4a446e;
    opacity: 0.8;
    line-height: 65/7.5vw;
    text-align: center;
    color: #fff;
    position: absolute;
    left: 0px;
    bottom: 0px;
    font-size: 14/7.5vw;
  }
}
</style>

