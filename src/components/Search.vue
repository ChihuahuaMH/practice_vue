<template>
    <v-content>
        <v-container
        class="fill-height justify-center align-content-start mt-4 pa-0"
        fluid
        >
        <v-row class="d-flex justify-center">
            <v-col cols="12" md="6" sm="12">
            <v-card color="grey lighten-4" flat tile>
                <v-toolbar color="info" dark>
                <v-toolbar-title>SEARCH</v-toolbar-title>
                <v-spacer/>
                <v-text-field
                    hide-details
                    append-icon="mdi-account-search"
                    v-model="search"
                    label="搜尋"
                />
                </v-toolbar>

                <v-data-table
                    :headers="headers"
                    :items="table"
                    :search="search"
                    :page.sync="page"
                    :items-per-page="itemsPerPage"
                    @page-count="pageCount = $event"
                    hide-default-footer
                    class="elevation-1"
                />

                <v-pagination v-model="page" :length="pageCount"/>
            </v-card>
            </v-col>
        </v-row>
        </v-container>
    </v-content>
</template>

<script>
export default {
    data() {
        return {
        search: "",
        page: 1,
        pageCount: 0,
        itemsPerPage: 5,
        headers: [
            {
            text: "病患名稱",
            align: "start",
            value: "name"
            },
            {
            text: "資料表",
            value: "data"
            },
            {
            text: "紀錄時間",
            value: "time"
            },
            {
            text: "病歷號碼",
            value: "number"
            }
        ],
        table: [
            {
            name: "吉娃娃",
            data: "膝關節",
            time: "2020-03-17",
            number: "abcdefg"
            },
            {
            name: "可爾必思",
            data: "膝關節",
            time: "2020-03-18",
            number: "fadelessss"
            },
            {
            name: "蝦餃",
            data: "膝關節",
            time: "2020-03-27",
            number: "coma"
            },
            {
            name: "香菇貢丸",
            data: "膝關節",
            time: "2020-03-05",
            number: "yummy"
            },
            {
            name: "泡芙",
            data: "膝關節",
            time: "2020-03-10",
            number: "dilicious"
            },
            {
            name: "泡菜",
            data: "膝關節",
            time: "2020-03-01",
            number: "kimchi"
            }
        ]
        };
    }
};
</script>
