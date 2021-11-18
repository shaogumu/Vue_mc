<template>
  <div>
    <el-row :gutter="20" >
      <router-view />

      <!-- 情报中心初始化页面 -->
      <el-col
         :span="10"
        class="gutter"
        v-for="(items, index) in tableData"
        :key="index"
        
      >
        <div v-if="items.IfDate"  >
          <el-card class="box-card" style="float: left; margin-top: 20px; heigth:240px;">
            <div slot="header" class="clearfix">
              <span v-text="items.FTypeName"></span>
              <el-button
                style="float: right; padding: 3px 0"
                type="text"
                @click="jump(items.FType)"
                >更多</el-button
              >
            </div>
            <div v-for="(item, k) in items.data" :key="k">
              <img
                src="../assets/New.gif"
                alt=""
                srcset=""
                v-if="item.IfRead"
              />
              <el-button
                type="text"
                style="text-align:center"
                @click="ReadData(item)"
              >
                {{ item.Title }}
              </el-button>
              <span style="float: right">{{ item.TrnDate }}</span>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <!-- 详情页面 -->
    <el-dialog :visible.sync="dialogVisible" width="500px">
      <div>
        <h2 style="text-align: center">{{ newDate.Title }}</h2>
        <p style="text-align: center">{{ newDate.ReadDate }}</p>
        <el-main>
          <el-row>
            <label style="text-align:center width:400px high:500px" for="">{{
              newDate.Content
            }}</label>
          </el-row>
        </el-main>
      </div>
      <div style="text-align: center">
        <el-button
          style="text-align: center"
          type="primary"
          @click="dialogVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script> 
import db from 'nedb'
const mesInfo = new db({
  filename: '../DateBass/mesInfoData',
  autoload: true,
});

export default {
  data() {
    return {
      dialogVisible: false,
       tableData: [
        { FType: '0', FTypeName: '行业信息', IfDate: true, data:[] },
        { FType: '1', FTypeName: '政策信息', IfDate: true, data: [] },
        { FType: '2', FTypeName: '竞争对手信息', IfDate: true, data: [] },
        { FType: '3', FTypeName: '竞争对手的价格信息', IfDate: true, data: [] },
        { FType: '4', FTypeName: '产品信息', IfDate: true, data: [] },
        { FType: '5', FTypeName: '促销信息', IfDate: true, data: [] },
      ],
      size: 4,
      newDate: {
        MID: "",
        FType: "",
        StaffNo: "",
        Title: "",
        Content: "",
        TrnDate: "",
        IfRead: true,
        ReadDate: "",
      },
     
    };
  },
  mounted: function () {
    //初始化页面
    let vm = this
    for (let i = 0; i < vm.tableData.length; i++) {
      
        mesInfo.find({FType:vm.tableData[i].FType}, function (err, docs) {
          
          vm.tableData[i].data=(docs)  
          if (docs.length == 0) {
            vm.tableData[i].IfDate = false;
          }
        });
        
    }
    console.log(vm.tableData);
  },
  methods: {
    // 跳转列表页面
    jump(e) {
      this.$router.push({
        path: "/Table",
        name: "Table",
        query: {
          FType: e,
        },
      });
    },

    //详情页面
    ReadData(e) {
      this.dialogVisible = true;
      this.newDate.MID = e.MID;
      this.newDate.Content = e.Content;
      this.newDate.TrnDate = e.TrnDate;
      this.newDate.StaffNo = e.StaffNo;
      this.newDate.Title = e.Title;
      this.newDate.ReadDate = e.ReadDate;
      e.IfRead = false;
      console.log(this.newDate);
    },
  },
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
