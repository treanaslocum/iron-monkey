<template>
  <div>
     <!-- Header -->
    <div class="flex flex-wrap items-center justify-center sm:justify-between">
      <!-- logo -->
      <div class="">
        <NuxtLink to="/">
          <img src="~../assets/logo.png" width="165" height="165">
        </NuxtLink>
        
      </div>
      <div class="mt-24 flex items-center origin-bottom -rotate-90 invisible lg:visible">
        <div class="w-12 h-0.5 mr-4 bg-black"></div>
        <p class="text-sm">Since 2014</p>
      </div>
      <div class="flex mr-20">
        <p class="font-medium p-5"><NuxtLink to="/work">Work</NuxtLink></p>
        <p class="font-medium p-5"><NuxtLink to="/services">Services</NuxtLink></p>
        <p class="font-medium p-5"><NuxtLink to="/about-us">About Us</NuxtLink></p>
        <p class="font-medium p-5"><NuxtLink to="/contact">Contact</NuxtLink></p>
      </div>
      
    </div>

   
  </div>
 



</template>


<script>
  export default {
      layout: "default",
  }



</script>