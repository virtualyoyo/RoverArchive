<template>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col class="mx-2">
        <div class="rounded-carousel">
          <v-carousel
            height="300"
            show-arrows="hover"
            cycle
            hide-delimiter-background
            rounded="lg"
          >
            <v-carousel-item v-for="(imageUrl, i) in imageUrls" :key="i">
              <v-card flat tile>
                <v-img :src="imageUrl" height="100%" class="rounded-lg"></v-img>
              </v-card>
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-col>
      <v-col class="mx-2">
        <v-sheet class="mx-auto" rounded="xl" height="100%"> 
          <div class="d-flex fill-height align-center justify-center text-h4 font-weight-bold">
            卡池 或 個人遊戲狀態
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      imageUrls: [
        "https://hw-media-cdn-mingchao.kurogame.com/akiwebsite/website2.0/images/1708358400000/71e8l199alc4cl7kpq-1708420444056%E6%97%A5%E6%96%87%EF%BC%88%E7%B9%81%E4%B8%AD%EF%BC%89.jpg",
        "https://hw-media-cdn-mingchao.kurogame.com/akiwebsite/website2.0/images/1708272000000/efuattqipdryt1hm7z-1708309555957%E7%B9%811114%C3%97710.jpg",
      ],
    };
  },
};
</script>