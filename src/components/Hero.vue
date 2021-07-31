<template>
  <h3 class="mt-10 text-4xl md:text-5xl   md:col-start-2  md:leading-normal  break-words title font-bold text-indigo-500 border-b-4 pb-3 ">
    {{title}}
  </h3>
</template>

<script>
export default {
  name:"Hero",
  props:{
    title:{
      type:String,
      default:'Loading...'
    }
  },

}
</script>

<style scoped>
.title {
  color:#212529;
}
h3{
  border-color:#477962 ;
}


</style>