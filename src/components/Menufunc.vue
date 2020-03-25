<template>
    <v-content>
        <v-container class="fill-height justify-center" fluid>
            <v-row class="d-flex justify-space-around">
                <v-col sm="12" md="6" class="text-center">
                    <v-btn
                        v-for="(item, index) in list"
                        :key="index"
                        :color="item.color"
                        :href="item.href"
                        @click="loading"
                        class="mx-6 my-4"
                        width="150"
                        height="150"
                        dark
                        rounded
                    >
                        <v-flex class="d-flex align-center flex-column">
                            <v-icon x-large>mdi-{{ item.icon }}</v-icon>
                            <span>{{ item.text }}</span>
                        </v-flex>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
import store from "@/store/index.js";
export default {
    name: "Menufunc",
    data: () => ({
        list: [
        {
            color: "green lighten-2",
            icon: "pencil",
            text: "創建 KNEE JOINT",
            href: "knee_joint"
        },
        {
            color: "cyan lighten-1",
            icon: "dog",
            text: "創建 HIP JOINT"
        },
        {
            color: "info lighten-1",
            icon: "feature-search",
            text: "查詢",
            href: "search"
        },
        {
            color: "blue lighten-3",
            icon: "account-search",
            text: "膝關節評估創建"
        },
        {
            color: "teal lighten-2",
            icon: "doctor",
            text: "膝關節評估搜尋"
        },
        {
            color: "light-green lighten-2",
            icon: "cat",
            text: "平安喜樂專用",
        }
        ]
    }),
    mounted() {
        store.dispatch("getUser");
        store.commit("loading", false);
    },
    methods: {
        loading() {
        store.commit("loading", true);
        }
    }
};
</script>

<style>
.v-content {
    background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2v9esh2YoaZWOkv4NbUOQLK5EsYnmzXf9bzfxckBTqzgWakiR);
}
</style>