<template>
  <v-card-text>
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
  </v-card-text>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    types: [],
    alltypes: [],
  }),
  created() {
    this.fetchAlltypes();
  },
  methods: {
    async fetchAlltypes() {
      try {
        const response = await fetch(this.url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        this.alltypes = await response.json();
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    },
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
          let index = this.types.indexOf("all");
          if (index !== -1) {
            this.types.splice(index, 1);
          }
        });
      } else if (
        !this.types.includes("all") &&
        this.types.length === this.alltypes.length - 1
      ) {
        // 使用$nextTick等待DOM更新完成
        this.$nextTick(() => {
          this.types = ["all", ...this.alltypes];
        });
      }
    },
  },
};
</script>
