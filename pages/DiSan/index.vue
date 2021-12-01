<template>
  <div>
    <List :listData="listData"></List>
  </div>  
</template>
<script>
import List from "@/components/DiSan/List";
import axios from 'axios'
import { URL } from '~/constant/constant';
export default {
  components : {
    List,
  },
  data () {
    return {
      listData:[],
      search: ''
    }
  },
  methods: {
    list(){
       axios.get(URL +"disan/").then(res =>{this.listData = res.data;  console.log(res.data);
      }).catch(err => {console.log(err)}) 
    }, 
    
  },
  mounted () {
    this.list();   
  },
}
</script>
<style>
</style>