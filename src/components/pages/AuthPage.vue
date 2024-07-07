<script lang="ts">
export default {
  methods: {
    login() {
      this.$router.push('/')
    }
  }
}
</script>

<template>
  UserAuthentication
  <button @click="login">Login</button>
</template>
