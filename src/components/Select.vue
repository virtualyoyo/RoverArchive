<template>
  <v-chip-group v-model="selected" multiple column>
    <v-btn @click="toggleAll" variant="outlined" class="select-all-button mr-2" dense>
      {{ allSelected ? "取消全部" : "全部" }}
    </v-btn>

    <v-chip
      v-for="item in options"
      :key="item"
      :value="item"
      :text="item"
      @click="clickitem(item)"
      variant="outlined"
      filter
    >
    </v-chip>
  </v-chip-group>
</template>

<script>
export default {
  data: () => ({
    selected: [],
    options: ["氣動", "導電", "熱熔", "冷凝", "湮滅", "衍射"],
  }),
  computed: {
    allSelected() {
      return this.selected.length === this.options.length;
    },
  },
  watch: {
    selected(newVal) {
      console.log("selected:", newVal);
    },
  },
  methods: {
    clickitem() {
      const index = this.selected.indexOf(this.options);
      if (index > -1) {
        this.selected.splice(index, 1);
      } else {
        this.selected.push(this.options);
      }
    },
    toggleAll() {
      this.selected = this.allSelected
        ? []
        : this.options.map((options) => options);
    },
  },
};
</script>
