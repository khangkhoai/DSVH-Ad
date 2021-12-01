<template>
  <CreateEdit :title="title"/>
</template>
<script>
import CreateEdit from '@/components/HoatDong/CreateEdit.vue'
export default {
  components:{
    CreateEdit
  },
  data(){
    return{
      title: "Edit "
    }
  }
}
</script>
<style>

</style>
