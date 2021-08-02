<template>
<div class="mx-5 ">
  <div class="mb-5 grid grid-cols-1  md:grid-cols-3  ">
    <Hero class="mb-4  " title="From the basics."/>
    <div class="mt-6 md:col-start-2 flex items-center">
      <i class="fas fa-search fa-sm text-gray-200 mr-2"></i>
      <input @keyup="filter" v-model="text" class="leading-tight focus:outline-none"  type="text" placeholder="Search">
    </div>
  </div>

  <div class="md:grid md:grid-cols-3 space-y-10 mt-10">
  <router-link class=" md:col-span-3 md:pr-10 md:grid md:grid-cols-3 align-center" :to="{name:'Blog',params:{id:post.id}}"  v-for="post in postList" :key="post.id">
    <div class="md:order-2 md:col-span-2 md:pl-4">
    <h3 class="text-gray-700 mt-10 md:mt-0 font-bold">{{post.title}}</h3>
    <p class=" mt-3 text-gray-800 text-justify text-sm leading-loose">{{post.description}}</p>
    </div>
    <div class="flex mt-3 md:order-1 ">
      <img class="w-10 h-10 rounded-full object-cover" src="@/assets/akashno.jpg" alt="">
      <div class="ml-2">
        <p class="text-gray-600 text-sm mb-1">{{post.author_name}}</p>
        <p class="text-gray-400 text-xs">{{convertDate(post.date_created)}}</p>
      </div>
    </div>
  </router-link>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import moment from 'moment'
export default {
  name: "Home",
  components: {
    Hero,
  },
  data(){
   return {
      postList:{},
      text:""
   }
  },
  methods:{
    convertDate(date){
      return moment(date).format("MM-YYYY-DD HH:SS a")
    },
    async fetchPost(){
      const res = await fetch('https://nocodes.herokuapp.com/api/postList/')
      const data = await res.json()
      this.postList = data  
    },
    async filter(){
      const res = await fetch(`https://nocodes.herokuapp.com/api/filterBlog/${this.text}`)
      const data = await res.json()
      if(this.text){
        this.postList = data
      }else{
        this.fetchPost()
      }
    }
  }
  ,
  async created(){
    this.fetchPost()
  }
};
</script>
