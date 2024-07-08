<script setup lang="ts">
import { reactive } from 'vue'
import QuizComponent from '../QuizComponent.vue'
import { MockQuizData } from '@/mock/MockQuizData'
import { ElButton } from 'element-plus'

const state = reactive({
  isQuizStarted: false
})

const startQuiz = () => {
  state.isQuizStarted = true
}
</script>

<template>
  <div v-if="!state.isQuizStarted" class="start-page">
    <h1>Welcome to the Quiz App!</h1>
    <p>Click on the "Start Quiz" button to begin.</p>
    <el-button @click="startQuiz">Start Quiz</el-button>
  </div>
  <div v-if="state.isQuizStarted">
    <QuizComponent :quiz="MockQuizData" />
  </div>
</template>

<style scoped>
.start-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
