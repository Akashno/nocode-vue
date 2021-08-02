<template>
    <div class="mx-5">
        <div class="grid md:grid-cols-3">
            <Hero class="mb-4" title="Free illustrations"/>  
            <div class="md:col-start-2 flex space-x-3 items-center">
                <i class="fas fa-search"></i>
                <input class="outline-none" type="text" v-model="text"  placeholder="search for illustrations...">
            </div>
        </div>
        <div class="grid md:grid-cols-3 mt-6">
            <div class="md:col-start-2  md:col-span-full justify-center md:justify-start   flex flex-wrap  gap-5">
                <div v-for="image in images" class="relative group w-32 h-auto md:w-40 " :key="image.id" >
                    <div class="buttons z-10 block  md:flex md:justify-between md:space-x-2 space-y-2 md:space-y-0 ">
                        <a :href="image.svg" :download="image.svg" class="block  group-hover:opacity-100    opacity-0 bg-red-500 hover:bg-red-700 rounded-full text-white px-5 ">svg</a>
                        <a :href="image.png" :download="image.png" class="block  group-hover:opacity-100    opacity-0 bg-green-500 hover:bg-green-700 rounded-full text-white px-5 ">png</a>
                    </div>
                    <img  class="hover:opacity-90  " :src="'https://nocodes.herokuapp.com'+image.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Hero from '../components/Hero.vue'
export default {
    name:"Illustrations",
    components:{
        Hero
    },
    data(){
        return{
            text:'',
            images:[]
        }
    },
    async created(){
        const res = await fetch("https://nocodes.herokuapp.com/api/svgList/")
        const data = await res.json()
        console.log(data)
        this.images = data
    }
}
</script>

<style>
.buttons{
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>