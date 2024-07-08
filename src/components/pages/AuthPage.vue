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
    { min: 3, max: 8, message: 'Length should be 3 to 8', trigger: 'blur' },
    {
      validator(rule, value, callback, source, options) {
        const re = /^[a-zA-Zа-яА-Я\s]+$/
        if (!re.test(value)) {
          callback(new Error('Enter only letters and spaces'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ],
  email: [
    { required: true, message: 'Please input Email', trigger: 'blur' },
    {
      validator(rule, value, callback, source, options) {
        const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
        if (!re.test(value)) {
          callback(new Error('Invalid email'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: 'Please input Password', trigger: 'blur' },
    { min: 8, message: 'Length should be at least 8', trigger: 'blur' },
    {
      validator(rule, value, callback, source, options) {
        const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        if (!re.test(value)) {
          callback(new Error('Password including numbers and letters'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
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
