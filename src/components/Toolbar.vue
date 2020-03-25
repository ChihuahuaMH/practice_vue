<template>
    <v-app-bar app dark dense color="blue lighten-1">
        <v-btn
        icon
        @click.stop="$emit('toggle-drawer')"
        v-if="this.$store.state.token"
        >
            <v-icon>mdi-view-headline</v-icon>
        </v-btn>

        <v-toolbar-title class="headline">{{ $route.meta.title }}</v-toolbar-title>
        <v-spacer />

        <v-toolbar-title v-if="this.$store.state.login">
            <v-icon class="mx-1">mdi-account-star</v-icon>
            歡迎 {{ user.name }}
        </v-toolbar-title>

        <v-toolbar-items class="mx-2" v-if="this.$store.state.login">
            <v-btn text @click="logout"> 
                <v-icon>mdi-logout</v-icon>登出 
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import store from "@/store/index.js";

export default {
  name: "Toolbar",
  data: () => ({}),
  methods: {
    logout() {
      store.dispatch("logout");
    }
  },

  computed: {
    ...mapState(["user"])
  },

  mounted() {
    store.dispatch("getUser");
  }
};
</script>

<style>
* {
  text-decoration: none;
}
</style>
