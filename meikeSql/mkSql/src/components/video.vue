<template>
  <el-container style="height: 750px; border: 1px solid #eee">
    <!-- 左侧导航 -->
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-menu"></i>视频管理</template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="openGrowUp">美课成长</el-menu-item>
            <el-menu-item index="1-2" @click="openEmployment">就业访谈</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <el-button type="primary" @click="openAdd">新增视频</el-button>
    </el-aside>
    <!-- 右侧内容 -->
    <el-container>
      <el-main>
        <el-table :data="tableData" height="500" v-loading="tableLoading">
          <!-- 点击列表显示详情 -->
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="视频编号">
                  <el-input v-model="props.row.sn"></el-input>
                </el-form-item>
                <el-form-item label="视频的主标题">
                  <el-input v-model="props.row.viTitle"></el-input>
                </el-form-item>
                <el-form-item label="视频的副标题">
                  <el-input v-model="props.row.viDesr"></el-input>
                </el-form-item>
                <el-form-item label="视频封面图片路径">
                  <el-input v-model="props.row.viCover"></el-input>
                </el-form-item>
                <el-form-item label="视频的路径">
                  <el-input v-model="props.row.viPath"></el-input>
                </el-form-item>
                <el-form-item label="视频分类">
                  <el-input v-model="props.row.viType"></el-input>
                </el-form-item>
                <el-form-item label="视频所属大学">
                  <el-input v-model="props.row.viCampus"></el-input>
                </el-form-item>
                <el-form-item label="视频所属城市">
                  <el-input v-model="props.row.viCity"></el-input>
                </el-form-item>
                <el-form-item label="视频所属省份">
                  <el-input v-model="props.row.viProvince"></el-input>
                </el-form-item>
                <el-form-item label="视频点击量">
                  <el-input v-model="props.row.viClickRate"></el-input>
                </el-form-item>
                <br>
                <el-form-item style="text-align: right; width: 50%">
                  <el-button type="primary" @click="onSubmit">修改</el-button>
                  <el-button>取消</el-button>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>

          <!-- table列表里显示的活动 -->
          <el-table-column prop="sn" label="视频编号" width="220">
          </el-table-column>
          <el-table-column prop="viTitle" label="视频的主标题" width="180">
          </el-table-column>
          <el-table-column prop="viDesr" label="视频的副标题" width="260">
          </el-table-column>
          <el-table-column prop="viCover" label="视频封面图片路径" width="220">
          </el-table-column>
          <el-table-column prop="viPath" label="视频的路径" width="220">
          </el-table-column>
          <el-table-column prop="viType" label="视频分类" width="180">
          </el-table-column>
          <el-table-column prop="viCampus" label="视频所属大学" width="220">
          </el-table-column>
          <el-table-column prop="viCity" label="视频所属城市" width="220">
          </el-table-column>
          <el-table-column prop="viProvince" label="视频所属省份" width="220">
          </el-table-column>
          <el-table-column prop="viClickRate" label="视频点击量" width="220">
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
        <el-form ref="formAddList" :model="formAddList" label-width="100px">
          <div class="form-li">
            <el-form-item label="视频编号">
              <el-input v-model="formAddList.sn"></el-input>
            </el-form-item>
            <el-form-item label="视频的主标题">
              <el-input v-model="formAddList.viTitle"></el-input>
            </el-form-item>
          </div>
          <div class="form-li">
            <el-form-item label="视频的副标题">
              <el-input v-model="formAddList.viDesr"></el-input>
            </el-form-item>
            <el-form-item label="视频封面图片路径">
              <el-input v-model="formAddList.viCover"></el-input>
            </el-form-item>
          </div>
          <div class="form-li">
            <el-form-item label="视频的路径">
              <el-input v-model="formAddList.viPath"></el-input>
            </el-form-item>
            <el-form-item label="视频分类">
              <el-input v-model="formAddList.viType"></el-input>
            </el-form-item>
          </div>
          <div class="form-li">
            <el-form-item label="视频所属大学">
              <el-input v-model="formAddList.viCampus"></el-input>
            </el-form-item>
            <el-form-item label="视频所属城市">
              <el-input v-model="formAddList.viCity"></el-input>
            </el-form-item>
          </div>
          <div class="form-li">
            <el-form-item label="视频所属省份">
              <el-input v-model="formAddList.viProvince"></el-input>
            </el-form-item>
            <el-form-item label="视频点击量">
              <el-input v-model="formAddList.viClickRate"></el-input>
            </el-form-item>
          </div>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">确定</el-button>
            <el-button @click="clearVideo">重置</el-button>
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
        {type: 11, name: '全部课程'},
        {type: 12, name: '考证'},
        {type: 13, name: 'IT就业'},
        {type: 14, name: '考研'},
        {type: 15, name: '公务员'},
        {type: 99, name: '论文'}
      ],
      practiceList: [
        {type: 11, name: '全部实践'},
        {type: 21, name: '高端兼职'},
        {type: 22, name: '高端兼职'}
      ],// 课程所有分类
      tableData: [], //活动和课程的数据
      tableLoading: false, //活动和课程的加载
      showAdd: false,
      formAddList: {
        sn: '',
        viTitle: '',
        viDesr: '',
        viCover: '',
        viPath: '',
        viType: 0,
        viCampus: 0,
        viCity: 0,
        viProvince: 0,
        viClickRate: 0,
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
    clearVideo() {
      var vm = this
      vm.formAddList = {
        sn: '',
        viTitle: '',
        viDesr: '',
        viCover: '',
        viPath: '',
        viType: 0,
        viCampus: 0,
        viCity: 0,
        viProvince: 0,
        viClickRate: 0,
      }
    },
    onSubmit() {
      var vm = this
      vm.tableLoading = true
      axios.post('/rest/activity/addActivities',{
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
      }).then(function(res){
        vm.tableLoading = false
        vm.showAdd = false
        console.log(res)
      }).catch(function(res){
      })
    },
    // 获取成长视频数据
    openGrowUp() {
      var vm = this
      axios.get('/rest/video/allMkVideo',
      { 
        params:{
          openid: 'o0kn64tHMOgMU7_8Hyuc6LfTtPCw',
          viType: 1
        }
      }).then(function(res){
        console.log(res.data.rows)
        vm.tableData = res.data.rows
      }).catch(function(res){
      })
    },
    openEmployment() {
      var vm = this
      axios.get('/rest/video/allMkVideo',
      { 
        params:{
          openid: 'o0kn64tHMOgMU7_8Hyuc6LfTtPCw',
          viType: 2
        }
      }).then(function(res){
        console.log(res.data.rows)
        vm.tableData = res.data.rows
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


