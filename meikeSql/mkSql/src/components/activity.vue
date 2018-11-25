<template>
  <el-container style="height: 750px; border: 1px solid #eee">
    <!-- 左侧导航 -->
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-service"></i>活动管理</template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="openActivityList">所有活动</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <el-button type="primary" @click="openAdd">新增活动</el-button>
    </el-aside>
    <!-- 右侧内容 -->
    <el-container>
      <el-main>
        <el-table :data="tableData" height="600" v-loading="tableLoading">
          <!-- 点击列表显示详情 -->
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="活动编号" prop="sn">
                  <el-input v-model="props.row.sn"></el-input>
                </el-form-item>
                <el-form-item label="活动标题" prop="title">
                  <el-input v-model="props.row.title"></el-input>
                </el-form-item>
                <el-form-item label="活动描述" prop="desr">
                  <el-input v-model="props.row.desr"></el-input>
                </el-form-item>
                <el-form-item label="开始时间" prop="startTime">
                  <el-date-picker type="date" placeholder="选择日期" v-model="props.row.startTime" style="width: 300px;"></el-date-picker>
                </el-form-item>
                <el-form-item label="结束时间" prop="endTime">
                  <el-date-picker type="date" placeholder="选择日期" v-model="props.row.endTime" style="width: 300px;"></el-date-picker>
                </el-form-item>
                <el-form-item label="活动价格" prop="price">
                  <el-input v-model="props.row.price"></el-input>
                </el-form-item>
                <el-form-item label="最大人数" prop="max">
                  <el-input v-model="props.row.max"></el-input>
                </el-form-item>
                <el-form-item label="最小人数" prop="min">
                  <el-input v-model="props.row.min"></el-input>
                </el-form-item>
                <el-form-item label="活动状态">
                  <el-input v-model="props.row.state"></el-input>
                </el-form-item>
                <el-form-item label="活动发起者">
                  <el-input v-model="props.row.actiInitiator"></el-input>
                </el-form-item>
                <el-form-item label="活动简介">
                  <el-input v-model="props.row.actiAbs"></el-input>
                </el-form-item>
                <el-form-item label="活动内容">
                  <el-input v-model="props.row.actiCont"></el-input>
                </el-form-item>
                <el-form-item label="活动说明">
                  <el-input v-model="props.row.actiNote"></el-input>
                </el-form-item>
                <el-form-item label="举办时间">
                  <el-input v-model="props.row.actiPubTime"></el-input>
                </el-form-item>
                <el-form-item label="活动类型">
                  <el-input v-model="props.row.type"></el-input>
                </el-form-item>
                <el-form-item label="报名人数">
                  <el-input v-model="props.row.acti_count" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="活动金额">
                  <el-input v-model="props.row.actiMoney"></el-input>
                </el-form-item>
                <el-form-item label="活动封面" prop="actiPic">
                  <el-input v-model="props.row.actiPic"></el-input>
                </el-form-item>
                <el-form-item label="活动视频" prop="actiVideo">
                  <el-input v-model="props.row.actiVideo"></el-input>
                </el-form-item>
                <el-form-item label="视频封面" prop="actiVideoPic">
                  <el-input v-model="props.row.actiVideoPic"></el-input>
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
          <el-table-column prop="sn" label="活动编号" width="180">
          </el-table-column>
          <el-table-column prop="type" label="活动类型" width="180">
          </el-table-column>
          <el-table-column prop="desr" label="活动描述" width="260">
          </el-table-column>
          <el-table-column prop="startTime" label="开始时间" width="220">
          </el-table-column>
          <el-table-column prop="endTime" label="结束时间" width="220">
          </el-table-column>
          <el-table-column prop="price" label="活动价格" width="180">
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
        <el-form ref="formAddList" :model="formAddList" :rules="activityRules" label-width="100px">
          <div class="form-li">
            <el-form-item label="活动编号" prop="sn">
              <el-input v-model="formAddList.sn"></el-input>
            </el-form-item>
            <el-form-item label="活动标题" prop="title">
              <el-input v-model="formAddList.title"></el-input>
            </el-form-item>
          </div>
          <div class="form-li">
            <el-form-item label="活动描述" prop="desr">
              <el-input v-model="formAddList.desr"></el-input>
            </el-form-item>
            <el-form-item label="价格" prop="price">
              <el-input v-model="formAddList.price"></el-input>
            </el-form-item>
          </div>
          <div class="form-li">
            <el-form-item label="开始时间" prop="startTime">
              <el-input v-model="formAddList.startTime"></el-input>
            </el-form-item>
            <el-form-item label="结束时间" prop="endTime">
              <el-input v-model="formAddList.endTime"></el-input>
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
            <el-form-item label="活动状态">
              <el-input v-model="formAddList.state"></el-input>
            </el-form-item>
            <el-form-item label="活动发起者">
              <el-input v-model="formAddList.actiInitiator"></el-input>
            </el-form-item>
          </div>
          <div class="form-li">
            <el-form-item label="活动简介">
              <el-input v-model="formAddList.actiAbs"></el-input>
            </el-form-item>
            <el-form-item label="活动内容">
              <el-input v-model="formAddList.actiCont"></el-input>
            </el-form-item>
          </div>
          <div class="form-li">
            <el-form-item label="活动说明">
              <el-input v-model="formAddList.actiNote"></el-input>
            </el-form-item>
            <el-form-item label="举办时间">
              <el-input v-model="formAddList.actiPubTime"></el-input>
            </el-form-item>
          </div>
          <div class="form-li">
            <el-form-item label="活动类型">
              <el-input v-model="formAddList.type"></el-input>
            </el-form-item>
            <el-form-item label="报名人数">
              <el-input v-model="formAddList.acti_count"></el-input>
            </el-form-item>
          </div>
          <div class="form-li">
            <el-form-item label="活动金额">
              <el-input v-model="formAddList.actiMoney"></el-input>
            </el-form-item>
            <el-form-item label="活动封面" prop="actiPic">
              <el-input v-model="formAddList.actiPic"></el-input>
            </el-form-item>
          </div>
          <div class="form-li">
            <el-form-item label="活动视频" prop="actiVideo">
              <el-input v-model="formAddList.actiVideo"></el-input>
            </el-form-item>
            <el-form-item label="视频封面" prop="actiVideoPic">
              <el-input v-model="formAddList.actiVideoPic"></el-input>
            </el-form-item>
          </div>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('formAddList')">确定</el-button>
            <el-button @click="clearActivity">重置</el-button>
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
      tableData: [], //活动和课程的数据
      tableLoading: false, //活动和课程的加载
      showAdd: false,
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
        actiInitiator: '',
        actiAbs: '',
        actiCont: '',
        actiNote: '',
        actiPubTime: '',
        type: 0,
        acti_count: '',
        actiMoney: 0,
        actiPic: '',
        actiVideo: '',
        actiVideoPic: ''
      },
      activityRules: {
        sn: [{ required: true, message: '请输入活动编号', trigger: 'blur' }],
        title: [{ required: true, message: '请输入活动标题', trigger: 'blur' }],
        desr: [{ required: true, message: '请输入活动描述', trigger: 'blur' }],
        startTime: [{ required: true, message: '请输入开始时间', trigger: 'blur' }],
        endTime: [{ required: true, message: '请输入结束时间', trigger: 'blur' }],
        price: [{ required: true, message: '请输入活动价格', trigger: 'blur' }],
        max: [{ required: true, message: '请输入活动最大值', trigger: 'blur' }],
        min: [{ required: true, message: '请输入活动最小值', trigger: 'blur' }],
        actiPic: [{ required: true, message: '请输入活动封面', trigger: 'blur' }],
        actiVideo: [{ required: true, message: '请输入活动视频', trigger: 'blur' }],
        actiVideoPic: [{ required: true, message: '请输入视频封面', trigger: 'blur' }],
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
    clearActivity() {
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
        actiInitiator: '',
        actiAbs: '',
        actiCont: '',
        actiNote: '',
        actiPubTime: '',
        type: 0,
        acti_count: '',
        actiMoney: 0,
        actiPic: '',
        actiVideo: '',
        actiVideoPic: ''
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
      axios.get('/rest/activity/addActivities',{
        params:{
          sn: vm.formAddList.sn,
          title: vm.formAddList.title,
          desr: vm.formAddList.desr,
          startTime: vm.formAddList.startTime,
          endTime: vm.formAddList.endTime,
          price: vm.formAddList.price,
          max: vm.formAddList.max,
          min: vm.formAddList.min,
          state: vm.formAddList.state,
          actiInitiator: vm.formAddList.actiInitiator,
          actiAbs: vm.formAddList.actiAbs,
          actiCont: vm.formAddList.actiCont,
          actiNote: vm.formAddList.actiNote,
          actiPubTime: vm.formAddList.actiPubTime,
          type: vm.formAddList.type,
          acti_count: vm.formAddList.acti_count,
          actiMoney: vm.formAddList.actiMoney,
          actiPic: vm.formAddList.actiPic,
          actiVideo: vm.formAddList.actiVideo,
          actiVideoPic: vm.formAddList.actiVideoPic
        }
      }).then(function(res){
        vm.tableLoading = false
        vm.showAdd = false
        console.log(res)
      }).catch(function(res){
      })
    },
    // 查询所有活动数据
    openActivityList() {
      var vm = this
      vm.tableLoading = true
      axios.post('/rest/activity/allActivities',{ openid: 'o0kn64tHMOgMU7_8Hyuc6LfTtPCw'
      }).then(function(res){
        vm.tableData = res.data.rows
        vm.tableLoading = false
      }).catch(function(res){
      })
    },
    onModify(row) {
      axios.get('/rest/activity/changeActivities',{
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
          actiInitiator: row.actiInitiator,
          actiAbs: row.actiAbs,
          actiCont: row.actiCont,
          actiNote: row.actiNote,
          actiPubTime: row.actiPubTime,
          type: row.type,
          acti_count: row.acti_count,
          actiMoney: row.actiMoney,
          actiPic: row.actiPic,
          actiVideo: row.actiVideo,
          actiVideoPic: row.actiVideoPic
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
.el-input{
  width: 300px;
}
.el-button--primary{
  margin-top: 30px;
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


