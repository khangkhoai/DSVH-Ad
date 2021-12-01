<template>
  <CreateEdit :title="title"/>
</template>
<script>
import CreateEdit from '@/components/LoaiDiSan/CreateEdit.vue'
export default {
  components:{
    CreateEdit
  },
  data(){
    return{
      title: "Add"
    }
  }
}
</script>
<style>

</style>
