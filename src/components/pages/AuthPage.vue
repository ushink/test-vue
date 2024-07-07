<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()

interface AuthForm {
  name: string
  email: string
  password: string
}

const formSize = ref<ComponentSize>('default')
const authFormRef = ref<FormInstance>()
const authForm = reactive<AuthForm>({
  name: '',
  email: '',
  password: ''
})

const rules = reactive<FormRules<AuthForm>>({
  name: [
    { required: true, message: 'Please input Name', trigger: 'blur' },
    { min: 3, max: 8, message: 'Length should be 3 to 8', trigger: 'blur' }
  ],
  email: [
    { required: true, message: 'Please input Email', trigger: 'blur' },
    { min: 3, max: 8, message: 'Length should be 3 to 32', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please input Password', trigger: 'blur' },
    { min: 3, max: 8, message: 'Length should be 3 to 16', trigger: 'blur' }
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
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
