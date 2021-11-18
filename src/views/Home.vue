<template>
  <div>
    <el-button type="primary" @click="jump">主要按钮</el-button>
    <p></p>
    <el-button type="primary" @click="save">新增按钮</el-button>
    <el-button type="primary" @click="set">查看按钮</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import db from "nedb";
const mesInfo = new db({
  filename: "../DateBass/mesInfoData",
  autoload: true,
});
var  datas= [
        {
          MID: 0,
          FType: "0",
          StaffNo: "00002",
          Title: "行业信息1",
          Content:
            "上海行业信息市普陀区金沙江路海行业信息市普陀区金沙江路海行业信息市普陀" +
            "区金沙江路海行业信息市普陀区金沙江路海行业信息市普陀区金沙江路海行业信息市普陀区金沙江路海行业信息市普陀区金沙江路海行业信息市普陀区金沙江路海行业信息市普陀区金沙江路海行业信息市普陀区金沙江路海行业信息市普陀区金沙江路海行业信息市普陀区金沙江路海行业信息市普陀区金沙江路海行业信息市普陀区金沙江路 1518 弄",
          TrnDate: "2016-05-02",
          IfRead: false,
          ReadDate: "2010-01-01",
        },
        {
          MID: 1,
          FType: "0",
          StaffNo: "00002",
          Title: "行业信息1",
          Content:
            "上海行业信息市普陀区金沙江路海行业信息市普陀区金沙江路海行业信息市普陀" +
            "区金沙江路海行业信息市普陀区金沙江路海行业信息市普陀区金沙江路海行业信息市普陀区金沙江路海行业信息市普陀区金沙江路海行业信息市普陀区金沙江路海行业信息市普陀区金沙江路海行业信息市普陀区金沙江路海行业信息市普陀区金沙江路海行业信息市普陀区金沙江路海行业信息市普陀区金沙江路海行业信息市普陀区金沙江路 1518 弄",
          TrnDate: "2016-05-02",
          IfRead: false,
          ReadDate: "2010-01-01",
        },
        {
          MID: 2,
          FType: "0",
          StaffNo: "00001",
          Title: "行业信息2222",
          Content: "上海市普陀行业信息区金沙江路 1518 弄",
          TrnDate: "2016-05-02",
          IfRead: true,
          ReadDate: "2010-01-01",
        },
        {
          MID: 3,
          FType: "0",
          StaffNo: "00001",
          Title: "行业信息",
          Content: "上海行业信息市普陀区金沙江路 1518 弄",
          TrnDate: "2016-05-02",
          IfRead: true,
          ReadDate: "2010-01-01",
        },
        {
          MID: 4,
          FType: "1",
          StaffNo: "00001",
          Title: "政策信息1",
          Content: "上海市普陀政策信息区金沙江路 1518 弄",
          TrnDate: "2016-05-02",
          IfRead: true,
          ReadDate: "2010-01-01",
        },
        {
          MID: 5,
          FType: "1",
          StaffNo: "00001",
          Title: "政策信息2",
          Content: "竞争对政策信息手信竞争对手信息3息3 1518 弄",
          TrnDate: "2016-05-02",
          IfRead: true,
          ReadDate: "2010-01-01",
        },
        {
          MID: 6,
          FType: "1",
          StaffNo: "00001",
          Title: "政策信息23",
          Content: "政策信息 1518 弄",
          TrnDate: "2016-05-02",
          IfRead: true,
          ReadDate: "2010-01-01",
        },
        {
          MID: 7,
          FType: "2",
          StaffNo: "00001",
          Title: "竞争对手信息1",
          Content: "上海市普陀区金沙江路 1518 弄",
          TrnDate: "2016-05-02",
          IfRead: true,
          ReadDate: "2010-01-01",
        },
        {
          MID: 8,
          FType: "2",
          StaffNo: "00001",
          Title: "竞争对手信息2",
          Content: "竞争对手信竞争对手信息3息3 1518 弄",
          TrnDate: "2016-05-02",
          IfRead: true,
          ReadDate: "2010-01-01",
        },
        {
          MID: 9,
          FType: "2",
          StaffNo: "00001",
          Title: "竞争对手信息3",
          Content: "竞争对手信息3 1518 弄",
          TrnDate: "2016-05-02",
          IfRead: true,
          ReadDate: "2010-01-01",
        },

        {
          MID: 10,
          FType: "3",
          StaffNo: "00001",
          Title: "竞争对手的价格信息1",
          Content: "上海市普陀区竞争对手的价格信息金沙江路 1518 弄",
          TrnDate: "2016-05-02",
          IfRead: true,
          ReadDate: "2010-01-01",
        },
        {
          MID: 11,
          FType: "3",
          StaffNo: "00002",
          Title: "竞争对手的价格信息2",
          Content: "竞争对手竞争对手的价格信息的价格信息 1518 弄",
          TrnDate: "2016-05-02",
          IfRead: true,
          ReadDate: "2010-01-01",
        },
        {
          MID: 12,
          FType: "3",
          StaffNo: "00003",
          Title: "竞争对手的价格信息3",
          Content:
            "竞争对手的价格信息竞争对手的价格信息竞争对手的价格信息 1518 弄",
          TrnDate: "2016-05-02",
          IfRead: true,
          ReadDate: "2010-01-01",
        },
      ]
export default {
  
  methods: {
    jump() {
      this.$router.push({
        path: "/Info",
        name: "Info",
      });
    },
    set(){
      mesInfo.find({},function(err,docs){
        console.log(docs)
      })
    },
    save() {
      mesInfo.insert( datas
       );

      mesInfo.find({}, function (err, newDocs) {
        console.log(newDocs);
      });
    },
  },
};
</script>
