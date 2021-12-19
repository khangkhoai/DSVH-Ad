<template> <div id="app"> <AddGoogleMap /> </div>
</template> <script>
import AddGoogleMap from "@/components/map.vue"; export default { name: 'App', components: { AddGoogleMap }
}
</script> <style>
#app { font-family: Avenir, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscaleChạy App; text-align: center; color: #000000; margin-top: 50px;
}
</style>