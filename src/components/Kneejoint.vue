<template>
	<v-content>
		<v-container class=" justify-center" fluid>
			<v-card class="mx-auto mt-4" max-width="90vw">
				<v-card-text>
					<div>創建Knee Joint</div>
					<v-row>
						<v-col cols="12" md="2" offset-md="10">
							<v-dialog
								ref="dialog"
								v-model="modal"
								:return-value.sync="date"
								persistent
								width="290px"
							>
								<template v-slot:activator="{ on }">
									<v-text-field
										v-model="date"
										label="手術日期"
										prepend-icon="mdi-calendar"
										readonly
										v-on="on"
									></v-text-field>
								</template>
								<v-date-picker v-model="date" scrollable>
									<v-spacer></v-spacer>
									<v-btn
										text
										color="primary"
										@click="modal = false"
										>Cancel</v-btn
									>
									<v-btn
										text
										color="primary"
										@click="$refs.dialog.save(date)"
										>OK</v-btn
									>
								</v-date-picker>
							</v-dialog>
						</v-col>
						<v-col cols="12" sm="6" md="3">
							<v-text-field label="病歷號碼" />
						</v-col>
						<v-col cols="12" sm="6" md="3">
							<v-text-field label="姓名" />
						</v-col>
						<v-col cols="12" sm="6" md="3">
							<v-text-field label="出生年月日（YYYY-MM-DD）" />
						</v-col>
						<v-col cols="12" sm="6" md="3">
							<v-text-field label="年齡" suffix="歲" />
						</v-col>
						<v-col cols="12" sm="6" md="3">
							<v-select
								v-model="valgus"
								:items="valgusopt"
								label="Valgus"
							>
							</v-select>
						</v-col>
						<v-col cols="12" sm="6" md="3">
							<v-text-field
								label="Yes,"
								autofocus
								suffix="degrees"
								v-if="valgus == 'YES'"
							/>
						</v-col>
						<v-col cols="12" sm="6" md="3">
							<v-select
								:items="diagnoseopt"
								v-model="diagnose"
								label="診斷"
							></v-select>
						</v-col>
						<v-col cols="12" sm="6" md="3">
							<v-text-field
								label="其他"
								v-if="diagnose == '其他'"
								autofocus
							/>
						</v-col>
						<v-col cols="12" sm="6" md="3">
							<v-text-field label="身高" suffix="cm" v-model="height" type="number"/>
						</v-col>
						<v-col cols="12" sm="6" md="3">
							<v-text-field label="體重" suffix="kg" v-model="weight" type="number" />
						</v-col>
						<v-col cols="12" sm="6" md="3">
							<v-select :items="gender" label="性別"></v-select>
						</v-col>
						<v-col cols="12" sm="6" md="3">
							<v-select :items="foot" label="左右腳"></v-select>
						</v-col>
						<v-col cols="12" sm="6" md="3">
							<v-select
								:items="anesthesiaopt"
                                v-model="anesthesia"
								label="麻醉"
							></v-select>
						</v-col>
						<v-col cols="12" sm="6" md="3">
							<v-text-field
								label="其他"
								v-if="anesthesia == '其他'"
								autofocus
							/>
						</v-col>
                        <v-col cols="12" sm="6" md="3">
							BMI {{ bmi }}
						</v-col>
					</v-row>
				</v-card-text>
				<v-card-actions>
					<v-btn text color="deep-purple accent-4">
						<v-btn color="info">送出</v-btn>
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-container>
	</v-content>
</template>

<script>
import store from "@/store/index.js";
export default {
	data: () => ({
		date: new Date().toISOString().substr(0, 10),
		test: false,
		modal: false,
        height:null,
        weight:null,
		valgus: "",
		diagnose: "",
        anesthesia:"",
		valgusopt: ["YES", "NO"],
		diagnoseopt: [
			"OA",
			"RA",
			"SONK",
			"PVNS",
			"traumatic OA",
			"hemophila",
			"tumor",
			"septic",
			"s/p resection arthroplasty",
			"Aseptic loosening",
			"Periprosthetic fracture",
			"其他"
		],
		gender: ["男", "女"],
		foot: ["左", "右"],
		anesthesiaopt: ["GA", "SA", "GA+EA", "其他"],
	}),
    computed:{
        bmi(){
            const weight = this.weight;
            const height = this.height / 100;
            const bmi = weight / (height * height);
            return bmi.toFixed(2) || 0;
        }
    },
	mounted() {
		store.dispatch("getUser");
	}
};
</script>
