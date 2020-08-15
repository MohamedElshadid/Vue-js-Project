<template>
  <div class="row">
      <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from './Stock';
export default {
    components:{
        appStock:Stock
    },
    data(){
        return {
            stocks:[
                {id:1,name:"BMW",price:110},
                {id:2,name:"Google",price:150},
                {id:3,name:"Facebook",price:130},
                {id:4,name:"Apple",price:200},
                {id:5,name:"Twitter",price:80}
            ]
        }
    }
}
</script>

<style>

</style>