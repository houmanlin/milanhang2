<template>
  <div class="box">
    <div class="box-content">
      <div class="title">美课优选是一个什么样的平台</div>
      <div class="detail">人的成长是多元的、立体的、多方面的，社会希望每一个毕业的大学生都能够具备批判性思维、具备解决复杂问题的能力，这也是每一个大学生的诉求。美课优选是国内第一个专注大学生个人成长的平台。美课优选考察各大公司的对高端职位的要求，结合当前学术界的最新研究成果，总结了最珍贵的几种批判性思维并给出了培养解决方案。</div>
      <div class="detail">复杂的世界需要复杂的人才，美课优选培养你成为一个“复杂”的人才。</div>
      <div class="title">美课优选的愿景——帮助每一个大学生成长</div>
      <div class="detail-box">
        <div class="detail-box-li">
          <div class="detail-img"><img src="../assets/company.png" /></div>
          <div class="detail-first">做一个可以信赖的公司</div>
          <div class="detail">谨慎对用户做出的每一个承诺，同时落实对用户的每一个承诺。</div>
        </div>
        <div class="detail-box-li">
          <div class="detail-img"><img src="../assets/chanpin.png" /></div>
          <div class="detail-first">做专业的产品</div>
          <div class="detail">不迎合用户的浅层需求，专注于社会与用户的深层需求，提供最好最专业的产品，最终靠质量赢得用户信任。</div>
        </div>
        <div class="detail-box-li">
          <div class="detail-img"><img src="../assets/world.png" /></div>
          <div class="detail-first">依靠教育改变世界</div>
          <div class="detail">培养学生工作的能力，培养学生终生受益的能力，培养学生改变世界的能力！</div>
        </div>
      </div>
    </div>
    <commonFooter></commonFooter>
  </div>
</template>
<script>
import commonFooter from '../components/common/common-footer';
export default {
  components:{
    commonFooter
  },
}
</script>
<style lang="less" scoped>
.box{
  width: 100%;
  .box-content{
    width: 85%;
    margin: 0 auto;
    padding-top: 80/7.5vw;
    padding-bottom: 80/7.5vw;
    box-sizing: border-box;
    .detail-box{
      width: 100%;
      display: flex;
      justify-content: space-between;
      .detail-box-li{
        width: 25%;
        .detail-img{
          margin: 0 auto;
          text-align: center;
          width: 100%;
          img{
            width: 80/7.5vw;
            height: 80/7.5vw;
          }
        }
        .detail-first{
          font-size: 20/7.5vw;
          margin-bottom: 30/7.5vw;
          margin-top: 10/7.5vw;
          width: 100%;
          text-align: center;
        }
      }
    }
    .title{
      font-size: 30/7.5vw;
      margin-top: 40/7.5vw;
      margin-bottom: 40/7.5vw;
    }
    .detail{
      font-size: 14/7.5vw;
      line-height: 30/7.5vw;
    }
  }
}
</style>
