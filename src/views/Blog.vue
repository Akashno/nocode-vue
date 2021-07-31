<template>
<div class="mx-5">
    <div class="md:grid  md:grid-cols-3 ">
    <Hero :title="post.title"/>
    </div>
    <div class="  md:grid md:grid-cols-3" v-for="section in sections" :key="section.id">
        <div class=" space-y-2 mt-5 pt-5 md:col-start-2 md:col-span-full md:pr-10 ">
        <h3 class="font-medium text-gray-500">{{section.title}}</h3>
        <p class="line-height-3 text-justify  leading-loose">{{section.body}}</p>
        <img :src='section.image' alt="" class="mx-auto">
        </div>
    </div>
</div>
</template>

<script>
import Hero from '../components/Hero.vue'
export default {
    name:'Blog',
    components:{
        Hero
    },
    data(){
        return{
            id : this.$route.params.id,
            post:{},
            sections:[]                 
        }
    },
    async created(){
        const res =await fetch(`https://nocodes.herokuapp.com/api/postDetail/${this.id}`)
        const data = await res.json()
        this.post = data.post
        this.sections = data.section
        
    },          
}
</script>

<style>

</style>