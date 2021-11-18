<template>
  <el-card style="height: 470px; width: 600x; margin-top: 20px">
    <el-table :data="tableData">
      <el-table-column
        show-overflow-tooltip
        v-for="(value, key) in TableColumn"
        :key="key"
        :prop="key"
        :label="value"
      >
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      TableColumn: {
        StaffNo: "员工编号",
        Title: "标题",
        Content: "内容",
        TrnDate: "日期",
        IfRead: "是否已读",
        ReadDate: "第一次已读时间",
      },
      tableData: [
        {
          StaffNo: "1001",
          Title: "vue框架",
          Content: "rount",
          TrnDate: "2020/1/1",
          IfRead: "是",
          ReadDate: "2020/1/1",
        },
        {
          StaffNo: "1001",
          Title: "vue框架",
          Content: "rount",
          TrnDate: "2020/1/1",
          IfRead: "是",
          ReadDate: "2020/1/1",
        },
        {
          StaffNo: "1001",
          Title: "vue框架",
          Content: "rount",
          TrnDate: "2020/1/1",
          IfRead: "是",
          ReadDate: "2020/1/1",
        },
        {
          StaffNo: "1001",
          Title: "vue框架",
          Content: "rount",
          TrnDate: "2020/1/1",
          IfRead: "是",
          ReadDate: "2020/1/1",
        },
        {
          StaffNo: "1001",
          Title: "vue框架",
          Content: "rount",
          TrnDate: "2020/1/1",
          IfRead: "是",
          ReadDate: "2020/1/1",
        },
      ],
      methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        },
      },
    };
  },
};
</script>
