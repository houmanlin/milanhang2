<template>
  <el-container style="height: 750px; border: 1px solid #eee">
    <!-- 左侧导航 -->
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-document"></i>课程管理</template>
          <el-submenu index="1-1">
            <template slot="title">优选课程</template>
            <el-menu-item v-for="(item, index) in courseList" :key="index" index="1-1-index" :data-type="item.type" @click='openCoruseList(item.type)'>{{item.name}}</el-menu-item>
          </el-submenu>
          <el-submenu index="1-2">
            <template slot="title">社会实践</template>
            <el-menu-item v-for="(item, index) in practiceList" :key="index" index="1-2-index" :data-type="item.type" @click='openPracticeList(item.type)'>{{item.name}}</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
      <el-button type="primary" @click="openAdd">新增课程</el-button>
    </el-aside>
    <!-- 右侧内容 -->
    <el-container>
      <el-main>
        <el-table :data="tableData" height="600" v-loading="tableLoading">
          <!-- 点击列表显示详情 -->
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="课程编号">
                  <el-input v-model="props.row.sn"></el-input>
                </el-form-item>
                <el-form-item label="课程标题">
                  <el-input v-model="props.row.title"></el-input>
                </el-form-item>
                <el-form-item label="课程描述">
                  <el-input v-model="props.row.desr"></el-input>
                </el-form-item>
                <el-form-item label="开始时间">
                  <el-date-picker type="date" placeholder="选择日期" v-model="props.row.startTime" style="width: 300px;"></el-date-picker>
                </el-form-item>
                <el-form-item label="结束时间">
                  <el-date-picker type="date" placeholder="选择日期" v-model="props.row.endTime" style="width: 300px;"></el-date-picker>
                </el-form-item>
                <el-form-item label="课程价格">
                  <el-input v-model="props.row.price"></el-input>
                </el-form-item>
                <el-form-item label="最大人数">
                  <el-input v-model="props.row.max"></el-input>
                </el-form-item>
                <el-form-item label="最小人数">
                  <el-input v-model="props.row.min"></el-input>
                </el-form-item>
                <el-form-item label="课程状态">
                  <el-input v-model="props.row.state"></el-input>
                </el-form-item>
                <el-form-item label="课程发起者">
                  <el-input v-model="props.row.courInitiator"></el-input>
                </el-form-item>
                <el-form-item label="课程简介">
                  <el-input v-model="props.row.courAbs"></el-input>
                </el-form-item>
                <el-form-item label="课程内容">
                  <el-input v-model="props.row.courCont"></el-input>
                </el-form-item>
                <el-form-item label="课程说明">
                  <el-input v-model="props.row.courNote"></el-input>
                </el-form-item>
                <el-form-item label="举办时间">
                  <el-input v-model="props.row.courPubTime"></el-input>
                </el-form-item>
                <el-form-item label="课程类型">
                  <el-input v-model="props.row.type"></el-input>
                </el-form-item>
                <el-form-item label="报名人数">
                  <el-input v-model="props.row.courCount"></el-input>
                </el-form-item>
                <el-form-item label="课程类型细化">
                  <el-input v-model="props.row.typeDetail"></el-input>
                </el-form-item>
                <el-form-item label="课程封面">
                  <el-input v-model="props.row.courPic"></el-input>
                </el-form-item>
                <el-form-item label="课程视频">
                  <el-input v-model="props.row.courVideo"></el-input>
                </el-form-item>
                <el-form-item label="视频封面">
                  <el-input v-model="props.row.courVideoPic"></el-input>
                </el-form-item>
                <br>
                <el-form-item style="text-align: right; width: 50%">
                  <el-button type="primary" @click="onModify(props.row)">修改</el-button>
                  <el-button>取消</el-button>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>

          <!-- table列表里显示的活动 -->
          <el-table-column prop="sn" label="课程编号" width="180">
          </el-table-column>
          <el-table-column prop="type" label="课程类型" width="180">
          </el-table-column>
          <el-table-column prop="typeDetail" label="课程类型细化" width="180">
          </el-table-column>
          <el-table-column prop="desr" label="课程描述" width="260">
          </el-table-column>
          <el-table-column prop="startTime" label="开始时间" width="220">
          </el-table-column>
          <el-table-column prop="endTime" label="结束时间" width="220">
          </el-table-column>
          <el-table-column prop="max" label="最大人数" width="220">
          </el-table-column>
          <el-table-column prop="min" label="最小人数" width="220">
          </el-table-column>
          <el-table-column label="操作" width="180">
            <template slot-scope="scope">
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>

      <!-- 点击新增活动出现的 -->
      <div class="mask" @click="closeAdd" v-if="showAdd"></div>
      <div class="addbox" v-if="showAdd">
        <el-form ref="formAddList" :model="formAddList" :rules="courseRules" label-width="100px">
          <div class="form-li">
            <el-form-item label="课程编号" prop="sn">
              <el-input v-model="formAddList.sn"></el-input>
            </el-form-item>
            <el-form-item label="课程标题" prop="title">
              <el-input v-model="formAddList.title"></el-input>
            </el-form-item>
          </div>
          <div class="form-li">
            <el-form-item label="课程描述" prop="desr">
              <el-input v-model="formAddList.desr"></el-input>
            </el-form-item>
            <el-form-item label="开始时间" prop="startTime">
              <el-input v-model="formAddList.startTime"></el-input>
            </el-form-item>
          </div>
          <div class="form-li">
            <el-form-item label="结束时间" prop="endTime">
              <el-input v-model="formAddList.endTime"></el-input>
            </el-form-item>
            <el-form-item label="课程价格" prop="price">
              <el-input v-model="formAddList.price"></el-input>
            </el-form-item>
          </div>
          <div class="form-li">
            <el-form-item label="最大值" prop="max">
              <el-input v-model="formAddList.max"></el-input>
            </el-form-item>
            <el-form-item label="最小值" prop="min">
              <el-input v-model="formAddList.min"></el-input>
            </el-form-item>
          </div>
          <div class="form-li">
            <el-form-item label="课程状态">
              <el-input v-model="formAddList.state"></el-input>
            </el-form-item>
            <el-form-item label="课程发起者">
              <el-input v-model="formAddList.courInitiator"></el-input>
            </el-form-item>
          </div>
          <div class="form-li">
            <el-form-item label="课程简介">
              <el-input v-model="formAddList.courAbs"></el-input>
            </el-form-item>
            <el-form-item label="课程内容">
              <el-input v-model="formAddList.courCont"></el-input>
            </el-form-item>
          </div>
          <div class="form-li">
            <el-form-item label="课程说明">
              <el-input v-model="formAddList.courNote"></el-input>
            </el-form-item>
            <el-form-item label="举办时间">
              <el-input v-model="formAddList.courPubTime"></el-input>
            </el-form-item>
          </div>
          <div class="form-li">
            <el-form-item label="课程类型" prop="type">
              <el-input v-model="formAddList.type"></el-input>
            </el-form-item>
            <el-form-item label="报名人数">
              <el-input v-model="formAddList.courCount"></el-input>
            </el-form-item>
          </div>
          <div class="form-li">
            <el-form-item label="课程类型细化" prop="typeDetail">
              <el-input v-model="formAddList.typeDetail"></el-input>
            </el-form-item>
            <el-form-item label="课程封面" prop="courPic">
              <el-input v-model="formAddList.courPic"></el-input>
            </el-form-item>
          </div>
          <div class="form-li">
            <el-form-item label="课程视频" prop="courVideo">
              <el-input v-model="formAddList.courVideo"></el-input>
            </el-form-item>
            <el-form-item label="视频封面" prop="courVideoPic">
              <el-input v-model="formAddList.courVideoPic"></el-input>
            </el-form-item>
          </div>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('formAddList')">确定</el-button>
            <el-button @click="clearCourse">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-container>
  </el-container>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      courseList: [
        {type: 1, name: '全部课程'},
        {type: 12, name: '考证'},
        {type: 13, name: 'IT就业'},
        {type: 14, name: '考研'},
        {type: 15, name: '公务员'},
        {type: 99, name: '论文'}
      ],
      practiceList: [
        {type: 2, name: '全部实践'},
        {type: 21, name: '高端兼职'},
        {type: 22, name: '社会实践'}
      ],// 课程所有分类
      tableData: [], //课程的数据
      tableLoading: false, //加载
      showAdd: false,
      type: 0,
      typeDetail: 0,
      formAddList: {
        sn: '',
        title: '',
        desr: '',
        startTime: '',
        endTime: '',
        price: '',
        max: 0,
        min: 0,
        state: 0,
        courInitiator: '',
        courAbs: '',
        courCont: '',
        courNote: '',
        courPubTime: '',
        type: 0,
        courCount: '',
        typeDetail: 0,
        courPic: '',
        courVideo: '',
        courVideoPic: ''
      },
      courseRules: {
        sn: [{ required: true, message: '请输入课程编号', trigger: 'blur' }],
        title: [{ required: true, message: '请输入课程标题', trigger: 'blur' }],
        desr: [{ required: true, message: '请输入课程描述', trigger: 'blur' }],
        startTime: [{ required: true, message: '请输入开始时间', trigger: 'blur' }],
        endTime: [{ required: true, message: '请输入结束时间', trigger: 'blur' }],
        price: [{ required: true, message: '请输入课程价格', trigger: 'blur' }],
        max: [{ required: true, message: '请输入课程最大值', trigger: 'blur' }],
        min: [{ required: true, message: '请输入课程最小值', trigger: 'blur' }],
        type: [{ required: true, message: '请输入课程类型', trigger: 'blur' }],
        typeDetail: [{ required: true, message: '请输入课程类型细化', trigger: 'blur' }],
        courPic: [{ required: true, message: '请输入课程封面', trigger: 'blur' }],
        courVideo: [{ required: true, message: '请输入课程视频', trigger: 'blur' }],
        courVideoPic: [{ required: true, message: '请输入视频封面', trigger: 'blur' }],
      }
    }
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    closeAdd() {
      var vm = this
      vm.showAdd = false
    },
    openAdd() {
      var vm = this
      vm.showAdd = true
    },
    clearCourse() {
      var vm = this
      vm.formAddList = {
        sn: '',
        title: '',
        desr: '',
        startTime: '',
        endTime: '',
        price: '',
        max: 0,
        min: 0,
        state: 0,
        courInitiator: '',
        courAbs: '',
        courCont: '',
        courNote: '',
        courPubTime: '',
        type: 0,
        courCount: '',
        typeDetail: 0,
        courPic: '',
        courVideo: '',
        courVideoPic: ''
      }
    },
    onSubmit(formName) {
      var vm = this
      vm.tableLoading = true
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          alert('error submit!!');
        }
      })
      axios.get('/rest/course/addCourse',{
        params: {
          sn: vm.formAddList.sn,
          title: vm.formAddList.title,
          desr: vm.formAddList.desr,
          startTime: vm.formAddList.startTime,
          endTime: vm.formAddList.endTime,
          price: vm.formAddList.price,
          max: vm.formAddList.max,
          min: vm.formAddList.min,
          state: vm.formAddList.state,
          courInitiator: vm.formAddList.courInitiator,
          courAbs: vm.formAddList.courAbs,
          courCont: vm.formAddList.courCont,
          courNote: vm.formAddList.courNote,
          courPubTime: vm.formAddList.courPubTime,
          type: vm.formAddList.type,
          courCount: vm.formAddList.courCount,
          typeDetail: vm.formAddList.typeDetail,
          courPic: vm.formAddList.courPic,
          courVideo: vm.formAddList.courVideo,
          courVideoPic: vm.formAddList.courVideoPic,
        }
      }).then(function(res){
        vm.tableLoading = false
        vm.showAdd = false
        console.log(res)
      }).catch(function(res){
      })
    },
    // 请求课程数据
    openCoruseList(type) {
      var vm = this
      if(type == 1) {
        vm.type = 1
        vm.typeDetail = 0
      }else{
        vm.type = 0
        vm.typeDetail = type
      }
      axios.get('/rest/course/allCources',
      { 
        params:{
          openid: 'o0kn64tHMOgMU7_8Hyuc6LfTtPCw',
          type: vm.type,
          typeDetail: vm.typeDetail
        }
      }).then(function(res){
        console.log(res.data.rows)
        vm.tableData = res.data.rows
      }).catch(function(res){
      })
    },
    openPracticeList(type) {
      var vm = this
      if(type == 2) {
        vm.type = 2
        vm.typeDetail = 0
      }else{
        vm.type = 0
        vm.typeDetail = type
      }
      axios.get('/rest/course/allCources',
      { 
        params:{
          openid: 'o0kn64tHMOgMU7_8Hyuc6LfTtPCw',
          type: vm.type,
          typeDetail: vm.typeDetail
        }
      }).then(function(res){
        console.log(res.data.rows)
        vm.tableData = res.data.rows
      }).catch(function(res){
      })
    },
    onModify(row) {
      axios.get('/rest/course/changeCourse',{
        params: {
          sn: row.sn,
          title: row.title,
          desr: row.desr,
          startTime: row.startTime,
          endTime: row.endTime,
          price: row.price,
          max: row.max,
          min: row.min,
          state: row.state,
          courInitiator: row.courInitiator,
          courAbs: row.courAbs,
          courCont: row.courCont,
          courNote: row.courNote,
          courPubTime: row.courPubTime,
          type: row.type,
          courCount: row.courCount,
          typeDetail: row.typeDetail,
          courPic: row.courPic,
          courVideo: row.courVideo,
          courVideoPic: row.courVideoPic
        }
      }).then(function(res){
        console.log(res)
      }).catch(function(res){
      })
    }
  }
}
</script>
<style scoped lang="less">
.el-header {
  background-color: #eef1f6;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
.el-submenu .el-menu-item{
  line-height: 25px;
  color: #909399;
}
.el-button--primary{
  margin-top: 30px;
}
.el-input{
  width: 300px;
}
.nav-top-span{
  color: #909399;
  font-size: 16px;
  font-weight: bold;
  margin-left: 20px;
}
.nav-top-span:hover{
  color: red;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 20px;
  width: 33%;
}
.mask{
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 999;
}
.addbox{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: #fff;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 5px;
}
.form-li{
  width: 1000px;
  display: flex;
  justify-content: space-between;
}
</style>


