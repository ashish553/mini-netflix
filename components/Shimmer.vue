<template>
    <div class="shimmers">
            <ShimmerCard v-for="i in 3" :key="i"/>
    </div>
</template>

<script>
import ShimmerCard from './ShimmerCard.vue'
export default {
    name: 'Shimmer',
    components: {
        ShimmerCard
    }
}
</script>

<style></style>