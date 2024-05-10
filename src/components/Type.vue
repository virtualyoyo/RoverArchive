<template>
    <v-chip-group v-model="types" column multiple>
      <v-chip
        text="全部"
        value="all"
        @click="allselected"
        variant="outlined"
        filter
      ></v-chip>
      <v-chip
        v-for="type in alltypes"
        :key="type"
        :text="type"
        :value="type"
        @click="selected"
        variant="outlined"
        filter
      ></v-chip>
    </v-chip-group>
</template>

<script>
export default {
  data: () => ({
    types: [],
    alltypes: ["氣動", "導電", "熱熔", "冷凝", "湮滅", "衍射"],
  }),
  watch: {
    types(newVal) {
      console.log("types:", newVal);
    },
  },
  methods: {
    allselected() {
      if (this.types.includes("all")) {
        // 使用$nextTick等待DOM更新完成
        this.$nextTick(() => {
          this.types = [];
        });
      } else {
        this.$nextTick(() => {
          this.types = ["all", ...this.alltypes];
        });
      }
    },
    selected() {
      if (this.types.includes("all")) {
        // 使用$nextTick等待DOM更新完成
        this.$nextTick(() => {
          let index = this.types.indexOf('all');
          if (index !== -1) {
          this.types.splice(index, 1);
          }
        });
      }
      else if (!this.types.includes("all") && this.types.length === this.alltypes.length -1) {
        // 使用$nextTick等待DOM更新完成
        this.$nextTick(() => {
          this.types = ["all", ...this.alltypes];
        });
      }
    },
  },
};
</script>
