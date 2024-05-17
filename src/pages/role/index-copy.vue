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
          <v-img :src="getIconRoleHeadUrl(n)[0]" height="256px"></v-img>
          {{ getIconRoleHeadUrl(n)[1] }}
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      iconRoleHeads: [],
    };
  },
  created() {
    fetch(
      "https://script.google.com/macros/s/AKfycbyMsqU28kOyOx33-ke7dcVvI_Igfj-SqWR0k9sql7XI1J23vz489Lj3NSVCdw2uXHzC-g/exec"
    )
      .then((response) => response.json())
      .then((data) => {
        this.iconRoleHeads = data;
      });
  },
  methods: {
    goToDetail(colNumber) {
      // 使用 $router.push() 導航到 role/detail 頁面並帶上 id 參數
      this.$router.push(`/role/detail?id=${colNumber}`);
    },
    getIconRoleHeadUrl(colNumber) {
      let data = [];
      let url = "";
      let id = colNumber < 10 ? `00${colNumber}` : `0${colNumber}`;
      this.iconRoleHeads.forEach((item) => {
        if (item.id === id) {
          let icon = item.IconRoleHead; // Assuming IconRoleHead is a Base64 string
          url = "data:image/jpeg;base64," + icon;
          data = [url,item.name]
        }
      });
      return data;
    },
  },
};
</script>
