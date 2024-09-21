<template>
    <div class="error-container">
      <h1 v-if="error.statusCode === 404 && error.errCode==='m101'">Movie not found</h1>
      <h1 v-else-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      {{ error.statusCode }}
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </template>
  
  <script>
    export default {
      props: ['error'],
      layout: 'error', // you can set a custom layout for the error page
    }
  </script>