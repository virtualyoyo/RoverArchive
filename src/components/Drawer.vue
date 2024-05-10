<template>
  <v-navigation-drawer v-model="drawer" :rail="!rail" permanent>
    <v-list-item title="漂泊檔案" nav>
      <template v-slot:append>
        <v-btn icon variant="text" @click.stop="rail = !rail">
          <v-icon>{{ !rail ? "mdi-menu" : "mdi-menu-open" }}</v-icon>
        </v-btn>
      </template>
    </v-list-item>

    <!-- 動態生成的列表項目，包括子標題 -->
    <v-list dense nav>
      <template v-for="item in menuItems">
        <v-divider v-if="item.header && rail" :key="item.value"> </v-divider>
        <v-list-subheader v-if="item.header && rail" :key="item.value">
          {{ item.title }}
        </v-list-subheader>
        <v-list-item
          v-else-if="!item.header"
          :key="item.value"
          @click="selectItem(item)"
          :prepend-icon="item.icon"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>

  <v-bottom-navigation v-if="showBottomNav" :active="active">
    <v-btn icon @click="startIndex = Math.max(startIndex - 1, 0)">
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-btn
      v-for="item in menuItems
        .filter((item) => item.type)
        .slice(startIndex, startIndex + itemsPerPage)"
      :key="item.value"
      @click="selectItem(item)"
    >
      <v-icon>{{ item.icon }}</v-icon>
      {{ item.title }}
    </v-btn>
    <v-btn
      icon
      @click="
        startIndex = Math.min(
          startIndex + 1,
          menuItems.filter((item) => item.type).length - itemsPerPage
        )
      "
    >
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { useDisplay } from "vuetify";

export default {
  setup() {
    const { width, height } = useDisplay();
    const drawer = ref(false);
    const rail = ref(true);
    const railIcon = ref("mdi-menu");
    const showBottomNav = ref(false);
    const itemsPerPage = ref(3);

    // 切換rail狀態
    const toggleRail = () => {
      rail.value = !rail.value;
      //railIcon.value = rail.value ? "mdi-menu" : "mdi-menu-open";
    };

    // 大小變
    const handleResize = () => {
      if (width.value > 840) {
        if (height.value <= 600) {
          drawer.value = false; // 大於840
          rail.value = true;
          showBottomNav.value = true;
          itemsPerPage.value = 5;
        } else {
          drawer.value = true; 
          rail.value = true;
          showBottomNav.value = false;
        }
      } else if (width.value > 600 && width.value <= 840) {
        drawer.value = true; // 600到840
        rail.value = false;
        showBottomNav.value = false;
      } else {
        drawer.value = false; //  小於600
        rail.value = false;
        showBottomNav.value = true;
        if (width.value > 480) {
          itemsPerPage.value = 4;
        } else {
          itemsPerPage.value = 3;
        }
      }
    };

    // 在組件掛載後添加事件監聽器
    onMounted(() => {
      handleResize(); // 初始調用一次以設定初始狀態
      window.addEventListener("resize", handleResize);
    });

    // 在組件卸載前移除事件監聽器
    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
    });

    return {
      drawer,
      rail,
      railIcon,
      toggleRail,
      showBottomNav,
      itemsPerPage,
      // 這裡可以添加其他需要返回的數據或方法
    };
  },
  data() {
    return {
      startIndex: 0,
      menuItems: [
        { icon: "mdi-home", title: "首頁", value: "", type: "internal" },
        { title: "Wiki", value: "wiki", header: true },
        {
          icon: "mdi-account-multiple-outline",
          title: "共鳴者",
          value: "role",
          type: "internal",
        },
        {
          icon: "mdi-knife-military",
          title: "武器",
          value: "weapons",
          type: "internal",
        },
        {
          icon: "mdi-tshirt-crew-outline",
          title: "聲骸",
          value: "voicebone",
          type: "internal",
        },
        { title: "工具", value: "tools", header: true },
        //{ icon: "mdi-calendar-multiple-check", title: "簽到", value: "signin", type: "external", },
        //{ icon: "mdi-star-outline", title: "兌換碼", value: "https://genshin.hoyoverse.com/zh-tw/gift?code=", type: "external", },
        {
          icon: "mdi-map-outline",
          title: "地圖",
          value: "map",
          type: "internal",
        },
        { title: "其他", value: "others", header: true },
        {
          icon: "mdi-hand-coin-outline",
          title: "贊助我們",
          value: "donate",
          type: "external",
        },
        {
          icon: "mdi-cog-outline",
          title: "設定",
          value: "settings",
          type: "internal",
        },
        {
          icon: "mdi-alert-octagon-outline",
          title: "意見回饋",
          value: "suggest",
          type: "external",
        },
      ],
    };
  },
  methods: {
    selectItem(item) {
      if (item.type === "internal") {
        this.$router.push({ path: "/" + item.value });
      } else if (item.type === "external") {
        window.open(item.value, "_blank");
      }
    },
  },
};
</script>
