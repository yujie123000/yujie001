
<template>
  <div>
    <el-table :data="arrs">
      <el-table-column prop="text" label="文章表体"></el-table-column>
      <el-table-column prop="name" label="作者"></el-table-column>
      <el-table-column prop="num" label="浏览量"></el-table-column>
      <el-table-column prop="response" label="回复"></el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加按钮 -->
    <el-button type="primary" class="addbtn" @click="addfn()">
      增加用户
    </el-button>

    <!-- 弹窗 -->
    <el-dialog :title="添加用户" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="作者" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="form.text" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
import instance from "../../api/index";
export default {
  name: "HomeIndex",
  data() {
    return {
      arrs: null,
      debounceedit: null,
      debouncedelete: null,
      dialogFormVisible: false,
      form: {
        name: "",
        text: "",
      },
      formLabelWidth: "100px",
    };
  },
  methods: {
    //   添加业务
    addfn() {
      this.form.name = "";
      this.form.text = "";
      this.dialogFormVisible = !this.dialogFormVisible;
    },

    // 删除业务
    handleDelete(a, b) {
      this.$confirm("您确定删除该条信息吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          console.log("删除了");
          this.deleteHomeIndex(a);
        })
        .catch(() => {
          console.log("你取消了");
        });
    },

    // 获取数据
    async getHomeIndex() {
      let { data } = await instance.get("/table");
      console.log(data);
      this.arrs = data;
    },

    // 删除数据业务
    async deleteHomeIndex(index) {
      let { data } = await instance.delete("/table/" + index);
      console.log(data);
      this.getHomeIndex();
    }
  },
  created() {
    this.getHomeIndex();
  },
};
</script>



<style scoped>
.addbtn {
  float: right;
  margin-right: 150px;
  margin-top: 50px;
}
</style>


