<template>
  <el-container class="home">
    <el-header>
      <div class="log"></div>
      <div class="title">
        <h1>电商后台管理系统</h1>
      </div>
      <div class="logout">
        <span>欢迎光临</span>
        <a href="javascript:;" @click="logout">退出</a>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$confirm('此操作将退出后台, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        localStorage.removeItem('token')
        this.$router.push('/login')
        this.$message.success('退出成功')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style lang='less' scoped>
.home {
  height: 100%;
  .el-header {
    background: #b3c1cd;
    display: flex;
    .log {
      width: 180px;
      background-image: url("~@/assets/logo.png");
      background-size: contain;
      background-repeat: no-repeat;
    }
    .logout {
      width: 180px;
      font-weight: 700;
      text-align: center;
      line-height: 60px;
      a {
        margin-left: 10px;
        color: orange;
      }
    }
    .title {
      flex: 1;
      h1 {
        text-align: center;
        line-height: 60px;
        color: #fff;
        font-size: 30px;
      }
    }
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-main {
    background-color: #d4dfe4;
  }
}
</style>
