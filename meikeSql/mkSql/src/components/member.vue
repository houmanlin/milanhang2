<template>
  <el-container style="height: 750px; border: 1px solid #eee">
    <!-- 左侧导航 -->
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-service"></i>会员管理</template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="openMemberList">所有会员</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <!-- 右侧内容 -->
    <el-container>
      <el-main>
        <el-table :data="tableData" height="600" v-loading="tableLoading">
          <!-- 点击列表显示详情 -->
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand" label-width="100px">
                <el-form-item label="用户等级">
                  <el-input v-model="props.row.memberType"></el-input>
                </el-form-item>
                <el-form-item label="用户编号">
                  <el-input v-model="props.row.sn" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="用户唯一标识">
                  <el-input v-model="props.row.openid" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="代理码">
                  <el-input v-model="props.row.agId" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="会员价格">
                  <el-input v-model="props.row.discount"></el-input>
                </el-form-item>
                <el-form-item label="会员状态">
                  <el-input v-model="props.row.memState" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="会员码">
                  <el-input v-model="props.row.memId" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="会员开始时间">
                  <el-date-picker type="date"  :disabled="true" placeholder="选择日期" v-model="props.row.startTime" style="width: 300px;"></el-date-picker>
                </el-form-item>
                <el-form-item label="会员到期时间">
                  <el-date-picker type="date" placeholder="选择日期" v-model="props.row.endTime" style="width: 300px;"></el-date-picker>
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
          <el-table-column prop="memberType" label="用户等级" width="180">
          </el-table-column>
          <el-table-column prop="sn" label="用户编号" width="280">
          </el-table-column>
          <el-table-column prop="openid" label="用户唯一标识" width="260">
          </el-table-column>
          <el-table-column prop="agId" label="代理码" width="180">
          </el-table-column>
          <el-table-column prop="discount" label="会员价格" width="180">
          </el-table-column>
          <el-table-column prop="memState" label="会员状态" width="180">
          </el-table-column>
          <el-table-column prop="memId" label="会员码" width="180">
          </el-table-column>
          <el-table-column prop="startTime" label="会员开始时间" width="220">
          </el-table-column>
          <el-table-column prop="endTime" label="会员到期时间" width="220">
          </el-table-column>
        </el-table>
      </el-main>
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
      showAdd: false
    }
  },
  methods: {
    // 查询所有会员信息
    openMemberList() {
      var vm = this
      vm.tableLoading = true
      axios.get('/rest/mkMember/getAllUserMemberMsg',{
        params: {
          openid: 'o0kn64tHMOgMU7_8Hyuc6LfTtPCw'
        }
      }).then(function(res){
        vm.tableData = res.data.rows
        for(var i = 0; i< vm.tableData.length; i++){
          vm.tableData[i].startTime = vm.tableData[i].startTime.split(' ')[0]
          vm.tableData[i].endTime = vm.tableData[i].endTime.split(' ')[0]
        }
        vm.tableLoading = false
      }).catch(function(res){
      })
    },
    onModify(row) {
      axios.get('/rest/mkMember/updateMember',{
        params: {
          memberType: row.memberType,
          sn: row.sn,
          openid: row.openid,
          agId: row.agId,
          discount: row.discount,
          memState: row.memState,
          memId: row.memId,
          startTime: row.startTime,
          endTime: row.endTime
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


