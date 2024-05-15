<template>
  <Drawer v-if="this.$route.meta.layout==null" />
  <v-app>
    
    
    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<script setup>
  //
</script>
