<template>
  <div class="wrap">
    <el-carousel height="820px" width="100%">
      <el-carousel-item v-for="item in swiperList" :key="item.id">
        <img :src='item.src' alt="">
      </el-carousel-item>
    </el-carousel>
    <!-- 专家团队 -->
    <div class="expert">
      <div class="expert-box">
        <div class="title">
          <div class="title-top">
            <img src="../assets/zhuanjia.png" alt="" class="title-top-img">
            <div>美课 <span>专家团队</span></div>
          </div>
          <div class="title-content">MK Expert Team</div>
          <div class="title-bottom">美课专家团队来自不同领域，专注于大学生的深层需求，提供最好最专业的产品，最终靠质量赢得用户信任。</div>
        </div>
        <div class="expert-content">
          <div class="expert-content-box" v-for="item in expertList" :key="item.id">
            <div class="ec-box-top">
              <img :src='item.img' alt="">
            </div>
            <div class="ec-box-content">{{item.name}}</div>
            <div class="ec-box-bottom">{{item.introduce}}</div>
          </div>
        </div>
        <div class="expert-footer">
          <div class="div-a">查看更多</div>
          <div class="div-span"></div>
        </div>
      </div>
    </div>
    <div class="content">
      <!-- 活动部分 -->
      <div class="activity">
        <div class="activity-box">
          <div class="title">
            <div class="title-top">
              <img src="../assets/lvxing.png" alt="" class="title-top-img">
              <div>美课 <span>推荐活动</span></div>
            </div>
            <div class="title-content">MK Weekend Getaway</div>
            <div class="title-bottom">定期组织多高校活动，拓展不同维度人脉圈，让你的大学生活更加缤纷多彩！</div>
          </div>
          <div class="activity-content">
            <div class="activity-content-box" v-for="item in activityList" :key="item.id">
              <div class="activity-img">
                <img :src="item.img" alt="">
              </div>
              <div class="activity-detail">
                <div class="activity-detail-title">{{item.title}}</div>
                <div class="activity-detail-text">
                  <div>{{item.desrc}}</div>
                </div>
                <div class="activity-detail-bottom">
                  <div class="detail-bottom-left">满{{item.min}}人活动开启</div>
                  <div class="detail-bottom-right">{{item.min}}/{{item.max}}人</div>
                </div>
              </div>
              <div class="btn-box" v-on:click="openErweima">
                <a href="###">
                  <div>报名</div>
                </a>
              </div>
            </div>
          </div>
          <div class="expert-footer">
            <div class="div-a">查看更多</div>
            <div class="div-span"></div>
          </div>
        </div>
      </div>
      <!-- 课程部分 -->
      <div class="activity activity-other">
        <div class="activity-box">
          <div class="title">
            <div class="title-top">
              <img src="../assets/kecheng.png" alt="" class="title-top-img">
              <div>美课 <span>推荐课程</span></div>
            </div>
            <div class="title-content">MK Preferred Course</div>
            <div class="title-bottom">以更低的价格，享受更高质量的第三方考证培训服务！</div>
          </div>
          <div class="activity-content">
            <div class="activity-content-box" v-for="item in courseList" :key="item.id">
              <div class="activity-img">
                <img :src="item.img" alt="">
              </div>
              <div class="activity-detail">
                <div class="activity-detail-title">{{item.title}}</div>
                <div class="activity-detail-text">
                  <div>{{item.desrc}}</div>
                </div>
                <div class="activity-detail-bottom">
                  <div class="detail-bottom-left">满{{item.min}}人活动开启</div>
                  <div class="detail-bottom-right">{{item.min}}/{{item.max}}人</div>
                </div>
              </div>
              <div class="btn-box" v-on:click="openErweima">
                <a href="###">
                  <div>报名</div>
                </a>
              </div>
            </div>
          </div>
          <div class="expert-footer">
            <div class="div-a">查看更多</div>
            <div class="div-span"></div>
          </div>
        </div>
      </div>
      <!-- 实践部分 -->
      <div class="activity">
        <div class="activity-box">
          <div class="title">
            <div class="title-top">
              <img src="../assets/shijian.png" alt="" class="title-top-img">
              <div>美课 <span>社会实践</span></div>
            </div>
            <div class="title-content">MK Social Practice</div>
            <div class="title-bottom">提供高端兼职服务，组织各类公益活动，体验不一样的人生，增长阅历，帮助别人，成长自己！</div>
          </div>
          <div class="activity-content">
            <div class="activity-content-box" v-for="item in practiceList" :key="item.id">
              <div class="activity-img">
                <img :src="item.img" alt="">
              </div>
              <div class="activity-detail">
                <div class="activity-detail-title">{{item.title}}</div>
                <div class="activity-detail-text">
                  <div>{{item.desrc}}</div>
                </div>
                <div class="activity-detail-bottom">
                  <div class="detail-bottom-left">满{{item.min}}人活动开启</div>
                  <div class="detail-bottom-right">{{item.min}}/{{item.max}}人</div>
                </div>
              </div>
              <div class="btn-box" v-on:click="openErweima">
                <a href="###">
                  <div>报名</div>
                </a>
              </div>
            </div>
          </div>
          <div class="expert-footer">
            <div class="div-a">查看更多</div>
            <div class="div-span"></div>
          </div>
        </div>
      </div>
      <!-- 会员图片 -->
      <div class="img">
        <img src="http://video.milanhang.com/image/wangzhan/photo/3.jpg" alt="">
      </div>
      <!-- 会员专享部分 -->
      <div class="member">
        <div class="member-box">
          <div class="title">
            <div class="title-top">
              <img src="../assets/zhuanxiang.png" alt="" class="title-top-img">
              <div>美课 <span>会员专享</span></div>
            </div>
            <div class="title-content">MK Member Exclusive</div>
            <div class="title-bottom">不同高校人脉拓展、课程折扣、高端兼职、就业推荐、社会公益，帮助别人、成长自己！</div>
          </div>
          <div class="member-content">
            <div class="member-content-li" v-for="(item,index) in memberList" :key="index" v-if="index<=2">
              <div class="mc-li-top">
                <div class="mc-li-top-num">{{item.num}}</div>
                <div class="mc-li-top-sym">/{{item.sym}}</div>
              </div>
              <div class="mc-li-bottom">{{item.title}}</div>
            </div>
          </div>
          <div class="member-content">
            <div class="member-content-li" v-for="(item,index) in memberList" :key="index" v-if="2<index">
              <div class="mc-li-top">
                <div class="mc-li-top-num">{{item.num}}</div>
                <div class="mc-li-top-sym">/{{item.sym}}</div>
              </div>
              <div class="mc-li-bottom">{{item.title}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mask" v-if="imgShow" @click="closeErweima">
      <img src="../assets/xiaochengxu.jpg" alt="">
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
  data() {
    return {
      imgShow: false,
      swiperList:[{
        id: 1, 
        src: 'http://video.milanhang.com/image/wangzhan/photo/1.jpg'
      },{
        id: 2,
        src: 'http://video.milanhang.com/image/wangzhan/photo/1.jpg'
      },{
        id: 3,
        src: 'http://video.milanhang.com/image/wangzhan/photo/1.jpg'
      }], // 大图滚动
      expertList:[
        {
          id: 1,
          img: 'http://video.milanhang.com/image/wangzhan/photo/r1.jpg',
          name: '李姚',
          introduce: '东北大学计算机专业博士 曾在Google美国加利福尼亚州圣克拉拉县山景市总部基地访问及学习，曾就职于东软、中科院、国家电网等公司，主持并参与多个千万级项目具备深入的理论基础及丰富的项目经验。'
        },
        {
          id: 2,
          img: 'http://video.milanhang.com/image/wangzhan/photo/r2.jpg',
          name: '佟海滨',
          introduce: '东北大学计算机专业博士 现在东北大学物联网实验室工作，曾参与武汉地铁施工数字化监控系统、轧钢实验室无线传感系统等多个大型项目,具备丰富的知识储备及带零编程能力本科及硕士生的经验。'
        },
        {
          id: 3,
          img: 'http://video.milanhang.com/image/wangzhan/photo/r3.jpg',
          name: '杨东兴',
          introduce: '美国NLP学院认证NLP (神经语言程序学)专业执行师，美国企业教练协会(IAPC)企业管理教练企业管理专业教练 中国NLP大学网络平台联合创始人、润才教育副校长及联合创始人、米篮航科技有限公司创始人。'
        },
        {
          id: 4,
          img: 'http://video.milanhang.com/image/wangzhan/photo/r4.jpg',
          name: '秦嘉欣',
          introduce: '毕业于大连理工大学软件工程专业，超过五年的开发和项目管理经验曾在东软集团等数家知名IT企业任职，参与多个大型项目平台系统的设计与开发。Oracle认证javaWeb组件专家，现致力于Java技术培训，将理论、实践、趣味三者完美集合，经验丰富。'
        },
      ], // 专家团队
      activityList:[
        {
          "id": 1,
          "img": 'http://img.milanhang.com/image/huodong/lvxing/001/%E5%B0%81%E9%9D%A2.png',
          "title": '万圣节重生之夜主题派对',
          "desrc": '10月22日开启【已开启】',
          "min": 30,
          "max": 50
        },
        {
          "id": 2,
          "img": 'http://img.milanhang.com/image/huodong/lvxing/002/fm.png',
          "title": '11.11单身派对',
          "desrc": '11月1日开启【未开启】',
          "min": 30,
          "max": 50
        },
        {
          "id": 3,
          "img": 'http://img.milanhang.com/image/huodong/lvxing/003/2023903165.jpg',
          "title": '圣诞节狂欢',
          "desrc": '12月1日开启【未开启】',
          "min": 30,
          "max": 50
        }
      ],
      courseList:[
        {
          "id": 1,
          "img": 'http://img.milanhang.com/image/huodong/kecheng/004/fm02.png',
          "title": '小程序开发课程',
          "desrc": '微信小程序',
          "min": 30,
          "max": 100
        },
        {
          "id": 2,
          "img": 'http://img.milanhang.com/image/huodong/kecheng/002/fm01.png',
          "title": 'java短期就业课程（3015教学模式）',
          "desrc": '参与真是项目开发',
          "min": 30,
          "max": 100
        },
        {
          "id": 3,
          "img": 'http://img.milanhang.com/image/huodong/kecheng/005/fm01.jpg',
          "title": '计算机等级考试',
          "desrc": '计算机二级',
          "min": 30,
          "max": 200
        }
      ],
      practiceList:[
        {
          "id": 1,
          "img": 'http://img.milanhang.com/image/huodong/kecheng/003/fm01.jpg',
          "title": '美课兼职（会员免费）',
          "desrc": '会员兼职',
          "min": 30,
          "max": 100
        },
        {
          "id": 2,
          "img": 'http://img.milanhang.com/image/huodong/gongyi/001/fm.png',
          "title": '美课公益-积小善成大爱',
          "desrc": '积小善成大爱',
          "min": 30,
          "max": 200
        },
        {
          "id": 3,
          "img": 'http://img.milanhang.com/image/huodong/gongyi/013/fm.png',
          "title": '美课公益-关爱空巢老人',
          "desrc": '美课公益-关爱空巢老人',
          "min": 30,
          "max": 200
        }
      ],
      memberList:[
        {
          title: '周末拓展活动',
          num: 10000,
          sym: '人'
        },
        {
          title: '活动、课程折扣积累',
          num: 300000,
          sym: '元'
        },
        {
          title: '考证、就业通过人',
          num: 20000,
          sym: '人'
        },
        {
          title: '推荐高端兼职实习人',
          num: 30000,
          sym: '人'
        },
        {
          title: '参与社会公益人',
          num: 5000,
          sym: '人'
        },
        {
          title: '毕业论文指导人',
          num: 20000,
          sym: '人'
        },
      ]
    }
  },
  methods:{
    openErweima: function() {
      var that = this
      that.imgShow = true
    },
    closeErweima: function() {
      var that = this
      that.imgShow = false
    }
  }
}
</script>
<style lang="less" scoped>
.wrap{
  width: 100%;
}
// 中间部分
.el-carousel{
  width: 100%;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
}
#content .el-carousel__button{
  width: 18px !important;
  height: 18px !important;
  border-radius: 50% !important;
}
// 专家部分
.expert{
  width: 100%;
  background: url('http://video.milanhang.com/image/wangzhan/photo/2.jpg');
  background-size: 100%;
  // background: url('../../static/img/bgc.jpg');
  // background-color: #dadada;
  padding-top: 30px;
  padding-bottom: 20px;
  box-sizing: border-box;
  .expert-box{
    width: 90%;
    margin: 0 auto;
    .title{
      width: 100%;
      text-align: center;
      .title-top{
        position: relative;
        font-size: 30px;
        color: #0bffff;
        .title-top-img{
          width: 30px;
          height: 30px;
          position: absolute;
          left: 38%;
          top: 15%;
        }
        span{
          color: #fff;
        }
      }
      .title-content{
        color: #fff;
        font-size: 16px;
        margin-top: 5px;
      }
      .title-bottom{
        color: #fff;
        font-size: 16px;
        margin-top: 25px;
      }
    }
    .expert-content{
      background-color: black;
      opacity: 0.8;
      width: 100%;
      margin-top: 20px;
      padding: 25px 50px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .expert-content-box{
        color: #ffffff;
        width: 23%;
        .ec-box-top{
          text-align: center;
          width: 130px;
          height: 150px;
          border-radius: 50%;
          border: 2px solid #0bffff;
          overflow: hidden;
          margin: 0 auto;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .ec-box-content{
          font-size: 18px;
          color: #ffffff;
          margin-top: 10px;
          margin-bottom: 15px;
          text-align: center;
        }
        .ec-box-bottom{
          font-size: 14px;
        }
      }
    }
    .expert-footer{
      margin-top: 10px;
      font-size: 14px;
      text-align: center;
      width: 100%;
      .div-a{
        color: #fff;
        padding-bottom: 5px;
      }
      .div-span{
        width: 50px;
        height: 2px;
        background-color: #0bffff;
        margin: 0 auto;
      }
    }
  }
}
.content{
  max-width: 1367px;
  margin: auto;
  // 活动部分
  .activity{
    width: 100%;
    background-color: #f6f6f6;
    padding-top: 30px;
    padding-bottom: 20px;
    box-sizing: border-box;
    .activity-box{
      width: 90%;
      margin: 0 auto;
      .title{
        width: 100%;
        text-align: center;
        .title-top{
          position: relative;
          font-size: 30px;
          color: #3a3a3a;
          .title-top-img{
            width: 30px;
            height: 30px;
            position: absolute;
            left: 38%;
            top: 15%;
          }
          span{
            color: #3d58f0;
          }
        }
        .title-content{
          color: #3a3a3a;
          font-size: 16px;
          margin-top: 5px;
        }
        .title-bottom{
          color: #3a3a3a;
          font-size: 16px;
          margin-top: 25px;
        }
      }
      .activity-content{
        width: 100%;
        display: flex;
        padding: 25px 50px;
        box-sizing: border-box;
        justify-content: space-between;
        margin-top: 20px;
        .activity-content-box{
          background-color: #fff;
          box-shadow: 3px 5px #fef8f1;
          // width: 24%;
          width: 32%;
          position: relative;
          .btn-box{
            position: absolute;
            left: 0px;
            top: 0px;
            bottom: 0px;
            right: 0px;
            z-index: 100;
            // background-color: #f39500;
            background: linear-gradient(to right, #9e2cc8, #4a63f1);
            opacity: 0.6;
            display: none;
            div{
              border-radius: 20px;
              border: 2px solid #fff;
              width: 60%;
              text-align: center;
              height: 40px;
              line-height: 35px;
              box-sizing: border-box;
              color: #fff;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              z-index: 999;
              font-size: 18px;
            }
          }
          .activity-img{
            width: 100%;
            height: 220px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .activity-detail{
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            .activity-detail-title{
              margin-top: 5px;
              margin-bottom: 5px;
              font-size: 20px;
            }
            .activity-detail-text{
              margin-bottom: 10px;
              position: relative;
              font-size: 16px;
              div{
                width:80%;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
                margin-bottom:15px;
              }
            }
            .activity-detail-bottom{
              display: flex;
              justify-content: space-between;
              font-size: 14px;
            }
          }
        }
        .activity-content-box:hover .btn-box{
          display: block;
        }
      }
      .expert-footer{
        margin-top: 30px;
        font-size: 14px;
        text-align: center;
        width: 100%;
        .div-a{
          color: #737373;
          padding-bottom: 5px;
        }
        .div-span{
          width: 50px;
          height: 2px;
          background-color: #3d58f0;
          margin: 0 auto;
        }
      }
    }
  }
  .activity-other{
    background-color: #fff;
  }
  .img{
    width: 100%;
    height: 333px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  // 会员专享
  .member{
    width: 100%;
    background-color: #f6f6f6;
    padding-top: 30px;
    padding-bottom: 70px;
    box-sizing: border-box;
    .member-box{
      width: 80%;
      margin: 0 auto;
      .title{
        width: 100%;
        text-align: center;
        .title-top{
          position: relative;
          font-size: 30px;
          color: #3a3a3a;
          .title-top-img{
            width: 30px;
            height: 30px;
            position: absolute;
            left: 38%;
            top: 15%;
          }
          span{
            color: #3d58f0;
          }
        }
        .title-content{
          color: #3a3a3a;
          font-size: 16px;
          margin-top: 5px;
        }
        .title-bottom{
          color: #3a3a3a;
          font-size: 16px;
          margin-top: 25px;
        }
      }
      .member-content{
        display: flex;
        justify-content: space-between;
        width: 75%;
        margin: 0 auto;
        margin-top: 20px;
        .member-content-li{
          width: 30%;
          text-align: center;
          color: #3a3a3a;
          .mc-li-top{
            background: url('../assets/yuanquan.png') no-repeat;
            background-size: 100% 100%;
            width: 100px;
            height: 100px;
            position: relative;
            margin: 0 auto;
            .mc-li-top-num{
              position: absolute;
              left: 48%;
              top: 50%;
              transform: translate(-50%, -50%);
              font-size: 20px;
            }
            .mc-li-top-sym{
              position: absolute;
              right: 2%;
              top: 30%;
              transform: translate(-50%, -50%);
              font-size: 12px;
            }
          }
          .mc-li-bottom{
            margin-top: 10px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
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
</style>



