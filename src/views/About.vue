<template>
<div class="space-y-7 mb-5 mx-5 md:mx-0 ">
  <div class="md:grid md:grid-cols-3">
    <Hero title="Lets talk about me"/> 
  </div>
  <div class="md:grid md:grid-cols-6 ">
    <div class="md:flex md:align-center md:justify-between md:col-start-2 col-span-4 row-start-1">
      <img class="mb-10 md:mb-0 md:self-center akashno w-36 mx-auto shadow-lg shadow-green-500  h-40  object-cover md:mr-4 " src="@/assets/akashno.jpg" alt="">
      <p class="text-sm  leading-7 text-justify md:self-center">  
      {{about__me}}
        <a  href="https://www.facebook.com/akash.no.14"><i aria-hidden="true" class="fab fa-facebook mr-2"></i></a>
        <a  href="https://www.instagram.com/n.o.akash/"><i aria-hidden="true" class="fab fa-instagram  mr-2"></i></a>
        <a  href="https://github.com/Akashno"><i aria-hidden="true" class="fab fa-github mr-2"></i></a>
        <a  href="mailto: noakash@ymail.com"> <i aria-hidden="true" class="fas fa-envelope-square mr-2"></i></a>
        <a  href="whatsapp://send?text=Hey akash!&phone=+919061936162"><i aria-hidden="true" class="fab fa-whatsapp"></i></a>
        <router-link class="ml-5 inline px-2 border-2 border-green-800 font-semibold text-green-500  text-sm" to="/resume">
         resume
        </router-link>
      </p>
    </div>
  
  </div>
  <div class="md:grid md:grid-cols-6">

  <div class="md:flex md:align-center md:justify-between md:col-start-2 md:col-span-4">
  <p class="text-sm leading-7 text-justify self-center">
   {{about__collage}}
   <span class="text-gray-400 text-sm "><br>St.Mary's college sulthan bathery</span>
  </p>

  <img class="collage mx-auto  h-48 w-40  object-cover mt-10 md:ml-4 md:w-full md:mt-0" src="@/assets/collage.jpg" alt="">
  </div>
  </div>
</div>
</template>
<script>

import Hero from '../components/Hero.vue'
import data from "../data/data.json"
export default {
 name:"About",
 components:{
   Hero,
 },
 data(){
   return{
     about__me:data.about__me,
     about__collage:data.about__collage,
   }
 }
}
</script>

<style scoped>
.akashno{
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
}
.collage{
  border-radius: 69% 11% 34% 38% / 60% 40% 60% 40%;
}

</style>