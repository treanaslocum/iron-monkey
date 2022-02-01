<template>
  
  <!-- Header -->
  <div class="flex w-full items-center justify-between">
    <!-- logo -->
    <div>
      <NuxtLink to="/">
        <img src="~../assets/logo.png" width="165" height="165">
      </NuxtLink>
      
    </div>
    <div class="mt-24 flex items-center origin-bottom -rotate-90">
      <div class="w-12 h-0.5 mr-4 bg-black"></div>
      <p class="text-sm">Since 2014</p>
    </div>
    <!-- header navigation -->
    <div class="flex mr-20">
      <p class="p-5 hover:underline"><NuxtLink to="/work">Work</NuxtLink></p>
      <p class="p-5 hover:underline"><NuxtLink to="/services">Services</NuxtLink></p>
      <p class="p-5 hover:underline"><NuxtLink to="/about-us">About Us</NuxtLink></p>
      <p class="p-5 hover:underline"><NuxtLink to="/contact">Contact</NuxtLink></p>
    </div>
    
  </div>
</template>