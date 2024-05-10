<template>
  <v-container>
    <v-row dense>
      <v-card-text>
        <h2 class="text-h6 mb-2">共鳴屬性</h2>
        <Select />
      </v-card-text>
    </v-row>

    <v-row dense>
      <v-card-text>
        <h2 class="text-h6 mb-2">武器類型</h2>
        <Weapon />
      </v-card-text>
    </v-row>
  </v-container>

  <v-container fluid>
    <v-row dense>
      <v-col v-for="n in 10" :key="n" :cols="12" :sm="6" :md="4" :lg="3">
        <v-sheet class="pa-2 ma-2" @click="goToDetail(n)">
          <v-img src="https://1drv.ms/i/c/111062d6e0b51673/IQN39YstEZEDRK_foBIBD3IbAWVPyFoGRSlC2tU-bzNQN0Y" height="200px"></v-img>
          col {{ n }}
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    goToDetail(colNumber) {
      // 使用 $router.push() 導航到 role/detail 頁面並帶上 id 參數
      this.$router.push(`/role/detail?id=${colNumber}`);
    }
  }
};
</script>
