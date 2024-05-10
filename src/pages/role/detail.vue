<template>
  <v-container>
    <!-- 回上一頁按鈕 -->
    <v-btn @click="goBack">回上一頁</v-btn>

    <!-- 顯示傳遞的 ID -->
    <div>
      {{ $route.query.id }}
    </div>
  </v-container>
</template>

<script>
export default {
  mounted() {
    console.log('Detail ID:', this.$route.query.id);
  },
  methods: {
    // 回上一頁
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
