<template>
  <div>
    <ul>
      <li
        :class="{ active: star <= initialGrade }"
        v-for="star in maxStars"
        :key="star"
        class="star"
      ></li>
    </ul>
    <div class="summary">{{ initialGrade }} of {{ maxStars }}</div>
  </div>
</template>

<script>
export default {
  props: {
    maxStars: Number,
    initialGrade: Number,
  },
};
</script>
