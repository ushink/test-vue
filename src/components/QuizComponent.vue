<script setup lang="ts">
import { MockRightData } from '@/mock/MockQuizData'
import type { Quiz } from '@/types'
import { ElCard, ElCheckboxGroup, ElCheckbox, ElButton, ElSpace, ElText } from 'element-plus'
import { reactive, ref } from 'vue'

const { quiz } = defineProps<{
  quiz: Quiz[]
}>()

const answers = ref([])

const state = reactive({
  isQuizFinish: false,
  isDisabled: false
})

function submitAnswers() {
  const userAnswer = JSON.stringify(answers.value).replace(/\bnull\b\s*,/, '')
  const trueAnswer = JSON.stringify(MockRightData)

  if (userAnswer === trueAnswer) {
    alert('Okay!')
  } else {
    alert('Oops! You have some mistakes.')
  }
  state.isQuizFinish = true
  state.isDisabled = true

  setTimeout(
    () => {
      state.isQuizFinish = false
      state.isDisabled = false
      answers.value = []
    },
    1 * 60 * 1000
  )
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
        <el-space v-if="state.isQuizFinish" class="answer">
          <el-text tag="b"> Правильный ответ: </el-text>
          <el-text
            tag="mark"
            v-for="(right, rightIndex) in el.right"
            :label="rightIndex"
            :key="rightIndex"
            class="answer-right"
          >
            {{ right }}</el-text
          >
        </el-space>
      </el-checkbox-group>
    </div>
    <el-button @click="submitAnswers" :disabled="state.isDisabled" class="quiz-btn"
      >Submit</el-button
    >
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

.answer {
  margin-top: 15px;
  padding: 15px;
  border: 1px solid #999;
}

.answer-right {
  color: rgb(0, 173, 17);
}

.quiz-btn {
  margin-top: 30px;
  width: 100%;
  cursor: pointer;
}
</style>
