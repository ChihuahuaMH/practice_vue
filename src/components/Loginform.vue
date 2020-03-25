<template>
    <v-content>
        <v-container class="fill-height" fluid>
            <v-row class="my-0 mx-auto">
                <v-col cols="12" sm="8" md="4" lg="4" class="my-0 mx-auto">
                    <v-card class="elevation-8">
                        <v-toolbar color="blue darken-1" dark flat>
                            <v-toolbar-title>醫師登入</v-toolbar-title>
                            <v-spacer />
                        </v-toolbar>

                        <v-card-text>
                            <v-form>
                                <v-text-field
                                v-model="email"
                                label="Email"
                                name="email"
                                prepend-icon="mdi-account"
                                type="text"
                                />

                                <v-text-field
                                v-model="password"
                                @keydown.enter="login"
                                label="Password"
                                name="password"
                                prepend-icon="mdi-lock"
                                type="password"
                                />
                            </v-form>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer />
                            <v-btn color="light-blue darken-2" @click="login" dark>登入</v-btn>
                            <v-spacer />
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
import store from "@/store/index.js";

export default {
    name: "Loginform",
    data() {
        return {
        email: "chihuahua@gmail.com",
        password: ""
        };
    },

    methods: {
        login() {
            if (this.email === "" || this.password === "") {
                alert("帳號或密碼禁止空白！");
            } 
            
            else {
                this.$store.dispatch("userLogin", {
                email: this.email,
                password: this.password
                });
            }
        }
    }
};
</script>
