<template>
  <el-container style="height: 750px; border: 1px solid #eee">
    <!-- 左侧导航 -->
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-service"></i>用户管理</template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="openUserList">所有用户</el-menu-item>
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
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="用户编号">
                  <el-input v-model="props.row.sn"></el-input>
                </el-form-item>
                <el-form-item label="用户微信名">
                  <el-input v-model="props.row.wxname"></el-input>
                </el-form-item>
                <el-form-item label="应用的用户名">
                  <el-input v-model="props.row.username"></el-input>
                </el-form-item>
                <el-form-item label="用户的密码">
                  <el-input v-model="props.row.password"></el-input>
                </el-form-item>
                <el-form-item label="用户的电话">
                  <el-input v-model="props.row.phone"></el-input>
                </el-form-item>
                <el-form-item label="用户的性别">
                  <el-input v-model="props.row.gender"></el-input>
                </el-form-item>
                <el-form-item label="用户的年龄">
                  <el-input v-model="props.row.age"></el-input>
                </el-form-item>
                <el-form-item label="省份">
                  <el-input v-model="props.row.province"></el-input>
                </el-form-item>
                <el-form-item label="城市">
                  <el-input v-model="props.row.city"></el-input>
                </el-form-item>
                <el-form-item label="现住地址">
                  <el-input v-model="props.row.address"></el-input>
                </el-form-item>
                <el-form-item label="用户的注册的时间">
                  <el-input v-model="props.row.createtime"></el-input>
                </el-form-item>
                <el-form-item label="用户的状态">
                  <el-input v-model="props.row.state"></el-input>
                </el-form-item>
                <el-form-item label="用户等级">
                  <el-input v-model="props.row.level"></el-input>
                </el-form-item>
                <el-form-item label="用户师傅邀请码">
                  <el-input v-model="props.row.master_code"></el-input>
                </el-form-item>
                <el-form-item label="用户身份">
                  <el-input v-model="props.row.identity"></el-input>
                </el-form-item>
                <el-form-item label="就读大学">
                  <el-input v-model="props.row.university" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="所学专业">
                  <el-input v-model="props.row.major"></el-input>
                </el-form-item>
                <el-form-item label="爱好">
                  <el-input v-model="props.row.hobby"></el-input>
                </el-form-item>
                <el-form-item label="用户的唯一标识">
                  <el-input v-model="props.row.openid"></el-input>
                </el-form-item>
                <el-form-item label="用户头像地址">
                  <el-input v-model="props.row.head_url"></el-input>
                </el-form-item>
                <el-form-item label="用户多公众号的标识">
                  <el-input v-model="props.row.unionid"></el-input>
                </el-form-item>
                <el-form-item label="用户信息更新时间">
                  <el-input v-model="props.row.updatetime"></el-input>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>

          <!-- table列表里显示的活动 -->
          <el-table-column prop="sn" label="用户编号" width="180">
          </el-table-column>
          <el-table-column prop="wxname" label="用户微信名" width="180">
          </el-table-column>
          <el-table-column prop="desr" label="活动描述" width="260">
          </el-table-column>
          <el-table-column prop="phone" label="用户的电话" width="220">
          </el-table-column>
          <el-table-column prop="gender" label="用户的性别" width="220">
          </el-table-column>
          <el-table-column prop="address" label="现住地址" width="180">
          </el-table-column>
          <el-table-column prop="head_url" label="用户头像地址" width="400">
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
    // 查询所有用户信息
    openUserList() {
      var vm = this
      vm.tableLoading = true
      axios.get('/rest/login/allUsers',{
        params: {
          openid: 'o0kn64tHMOgMU7_8Hyuc6LfTtPCw'
        }
      }).then(function(res){
        console.log(res)
        vm.tableData = res.data.rows
        vm.tableLoading = false
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


