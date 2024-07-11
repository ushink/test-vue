<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { ComponentSize, FormInstance } from 'element-plus'
import { useRouter } from 'vue-router'
import { registerUser } from '@/api'
import type { AuthForm } from '@/types'
import { rules } from '@/utils/rules'

const router = useRouter()

const formSize = ref<ComponentSize>('default')
const authFormRef = ref<FormInstance>()
const authForm = reactive<AuthForm>({
  name: '',
  email: '',
  password: ''
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      registerUser(authForm.name, authForm.email)
      localStorage.setItem('userEmail', authForm.email)
      router.push('/')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <el-form
    ref="authFormRef"
    style="max-width: 600px"
    :model="authForm"
    :rules="rules"
    label-width="auto"
    class="authForm"
    :size="formSize"
    status-icon
  >
    <el-form-item label="name" prop="name">
      <el-input v-model="authForm.name" />
    </el-form-item>
    <el-form-item label="email" prop="email">
      <el-input v-model="authForm.email" />
    </el-form-item>
    <el-form-item label="password" prop="password">
      <el-input v-model="authForm.password" />
    </el-form-item>
    <el-button type="primary" @click="submitForm(authFormRef)">Login</el-button>
  </el-form>
</template>
