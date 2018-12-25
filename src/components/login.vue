<template>
  <div id="login">
    <el-form ref='form' :model="form" label-width="80px" :rules="rules" status-icon>
      <img src="@/assets/avatar.jpg" alt="">
      <el-form-item label="用户名" prop='username'>
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop='password'>
        <el-input v-model="form.password" type='password' placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button @click='reset'>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'change' },
          { min: 3, max: 9, message: '长度在 3 到 9 个字符', trigger: 'change' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'change' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    // 表单重置功能
    reset() {
      this.$refs.form.resetFields()
    },
    onSubmit() {
      // 对整个表单进行校验
      this.$refs.form.validate(valid => {
        if (!valid) return false
        // alert('校验过了')
        axios({
          method: 'post',
          url: 'http://localhost:8888/api/private/v1/login',
          data: this.form
        }).then(res => {
          console.log(res.data)
          if (res.data.meta.status === 200) {
            this.$message({
              message: '恭喜你，登录成功',
              type: 'success',
              duration: 1000
            })
            localStorage.setItem('token', res.data.data.token)
            this.$router.push('home')
          } else {
            this.$message({
              message: res.data.meta.msg,
              type: 'error'
            })
          }
        })
      })
    }
  }
}
</script>

<style lang='less'>
#login {
  width: 100%;
  height: 100%;
  background-color: #2d434c;
  overflow: hidden;
  .el-form {
  width: 400px;
  border-radius: 20px;
  background-color: #fff;
  margin: 200px auto;
  padding: 70px 40px 20px;
  position: relative;
  img{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -70px;
    border-radius: 50%;
    border: 10px solid #fff;
  }
  }
}
</style>
