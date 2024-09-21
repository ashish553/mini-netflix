<template>
  <div class="badge">
    {{ title }}
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            require: true
        }
    }
}
</script>

<style>

</style>