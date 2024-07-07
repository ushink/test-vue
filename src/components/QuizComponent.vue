<script setup lang="ts">
import { MockRightData, type Quiz } from '@/mock/MockQuizData'
import { ElCard, ElCheckboxGroup, ElCheckbox, ElButton } from 'element-plus'
import { ref } from 'vue'

const { quiz } = defineProps<{
  quiz: Quiz[]
}>()

const answers = ref([])

function submitAnswers() {
  const userAnswer = JSON.stringify(answers.value).replace(/\bnull\b\s*,/, '')
  const trueAnswer = JSON.stringify(MockRightData)

  if (userAnswer === trueAnswer) {
    alert('Okay!')
  } else {
    alert('Oops! You have some mistakes.')
  }
}
</script>

<template>
  <el-card class="quiz-card">
    <div v-for="el in quiz" :key="el.id">
      <h2>{{ el.title }}</h2>
      <p class="question">{{ el.questionText }}</p>
      <el-checkbox-group v-model="answers[el.id]" fill="primary" class="options-box">
        <el-checkbox
          v-for="(option, optionIndex) in el.options"
          :label="optionIndex"
          :key="optionIndex"
          class="option"
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
.question {
  margin-bottom: 10px;
  font-size: 20px;
  color: #1f1f1f;
  line-height: 1.5;
  text-indent: 2em;
  word-break: break-all;
}

.options-box {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.option {
  font-size: 18px;
  color: #393939;
  line-height: 1.5;
}
</style>
