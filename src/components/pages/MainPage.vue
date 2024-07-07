<script setup lang="ts">
import QuizComponent from '../QuizComponent.vue';
import { MockQuizData,  } from '@/mock/MockQuizData';
</script>

<template>
  <QuizComponent :quiz="MockQuizData" />
</template>
