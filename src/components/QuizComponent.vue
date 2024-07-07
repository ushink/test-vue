<script setup lang="ts">
import type { Quiz } from '@/mock/MockQuizData'
import { ElCard, ElCheckboxGroup, ElCheckbox, ElButton } from 'element-plus'
import { ref } from 'vue'

const { quiz } = defineProps<{
  quiz: Quiz[]
}>()

const answers = ref([])

function submitAnswers() {
  console.log('submit', answers.value)
}
</script>

<template>
  <el-card class="quiz-card">
    <div v-for="el in quiz" :key="el.id">
      <h2>{{ el.title }}</h2>
      <p>{{ el.questionText }}</p>
      <el-checkbox-group v-model="answers[el.id]" fill="primary">
        <el-checkbox
          v-for="(option, optionIndex) in el.options"
          :label="optionIndex"
          :key="optionIndex"
          >{{ option }}</el-checkbox
        >
      </el-checkbox-group>
    </div>
    <el-button @click="submitAnswers">Submit</el-button>
  </el-card>
</template>

<style scoped>
.quiz-card {
  width: 100%;
  margin: auto;
}
</style>
