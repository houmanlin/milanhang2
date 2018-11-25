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
    width: 500px;
    height: 500px;
  }
}
.footer{
  width: 100%;
  height: 350px;
  overflow: hidden;
  display: flex;
  background: url("http://video.milanhang.com/image/wangzhan/photo/4.jpg");
  position: relative;
  // margin-top: 100px;
  .footer-right{
    position: absolute;
    right: 20px;
    top: 50px;
    display: -webkit-flex;
    img{
      width: 150px;
      height: 170px;
      margin-left: 30px;
      margin-right: 30px;
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
    right: 20%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 18px;
  }
  .company-name{
    width: 100%;
    height: 65px;
    background: #4a446e;
    opacity: 0.8;
    line-height: 65px;
    text-align: center;
    color: #fff;
    position: absolute;
    left: 0px;
    bottom: 0px;
  }
}
</style>

