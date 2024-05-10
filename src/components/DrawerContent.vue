<template>
  <v-navigation-drawer v-model="drawer" location="right" temporary :width="400">
    <v-app-bar dark color="primary">
      <v-toolbar-title>test</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="drawer = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-app-bar>

    <v-card-text>
      <v-img src="https://1drv.ms/i/c/111062d6e0b51673/IQOM-jQWAZPvSYy0zosgoCo9ARMDGZoeFE7JNzfGxKChi4s" height="300px"></v-img>
    </v-card-text>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
