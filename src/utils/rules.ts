import type { FormRules } from 'element-plus'
import type { AuthForm } from '@/types'
import { reactive } from 'vue'


export const rules = reactive<FormRules<AuthForm>>({
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
