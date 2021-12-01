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
      title: "Edit "
    }
  }
}
</script>
<style>

</style>
