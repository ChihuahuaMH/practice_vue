<template>
    <v-navigation-drawer
        v-model="drawer"
        app
        class="d-flex justify-center"
        absolute
        temporary
        width="300"
    >
        <v-list-item two-line>
            <v-avatar>
                <img
                src="https://images-cdn.9gag.com/photo/aR0wmVQ_460s.jpg"
                alt="BananaChi"
                />
            </v-avatar>

            <v-list-item-content class="mx-2">
                <v-list-item-title class="title">
                    {{ user.name }} 醫師
                </v-list-item-title>
                <v-list-item-subtitle>
                    {{ user.email }}
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list>
            <section>
                <v-list-item v-for="(item, j) in item" :key="j" :to="item.href">
                <v-list-item-action>
                    <v-icon>mdi-{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-group prepend-icon="mdi-pencil">
                <template v-slot:activator>
                    <v-list-item-title>創建</v-list-item-title>
                </template>
                <v-list-item
                    v-for="(build, key) in build"
                    :key="key"
                    :to="build.href"
                >
                    <v-list-item-action>
                    <v-icon>mdi-{{ build.icon }}</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                    <v-list-item-title>{{ build.text }}</v-list-item-title>
                    </v-list-item-content>
                    
                </v-list-item>
                </v-list-group>
            </section>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
    name: "Drawer",
    data: () => ({
        drawer: false,

        item: [
        {
            icon: "home",
            text: "首頁",
            href: "/"
        },
        {
            icon: "account-search",
            text: "查詢",
            href: "search"
        }
        ],

        build: [
        {
            icon: "clipboard-text",
            text: "人工膝關節置換術中測量",
            href: "/knee-joint"
        },
        {
            icon: "clipboard-text",
            text: "人工髖關節置換術中測量",
            href: "/knee-joint"
        },
        {
            icon: "clipboard-text",
            text: "Follow up",
            href: "/knee-joint"
        }
        ]
    }),
    computed: {
        ...mapState(["user"])
    }
};
</script>
