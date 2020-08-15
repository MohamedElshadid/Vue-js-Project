<template>
    <div class="col-sm-6 col-md-4">
        <div class="card mt-4">
            <div class="card-body">
                <h4 class="card-title text-center alert-success">
                    {{stock.name}}
                    <small>(Price: {{stock.price}})</small></h4>
                    <v-row>
                        <v-col cols="8" sm="8">
                            <input 
                            type="number"
                            class="form-control"
                            placeholder="Quantity"
                            v-model="quantity"
                            >
                        </v-col>
                        <v-col cols="4" sm="4">
                            <button class="btn btn-success" @click="buyStock" :disabled="quantity <= 0 || !isInt(quantity)">Buy</button>
                        </v-col>
                    </v-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['stock'],
    data(){
        return {
            quantity:0,
        }
    },
    methods:{
        buyStock(){
            const order = {
                stockID : this.stock.id,
                stockPrice : this.stock.price,
                quantity : this.quantity
            }
            console.log(this.quantity);
            this.quantity = 0;
            console.log(order);
            
        },
        isInt(n){
            return n % 1 === 0;
        }
    }
}
</script>

<style>

</style>