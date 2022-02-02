<template>
  <div>

    <div class="flex flex-wrap w-full items-center justify-between">
      <!-- logo -->
      <div>
        <NuxtLink to="/">
          <img src="~../assets/logo.png" width="165" height="165">
        </NuxtLink>
        
      </div>
      
      <!-- header navigation -->
      <div class="flex mr-20">
        <p class="font-medium p-5"><NuxtLink to="/work">Work</NuxtLink></p>
        <p class="font-medium p-5"><NuxtLink to="/services">Services</NuxtLink></p>
        <p class="font-medium p-5 underline"><NuxtLink to="/about-us">About Us</NuxtLink></p>
        <p class="font-medium p-5"><NuxtLink to="/contact">Contact</NuxtLink></p>
      </div>
      
    </div>

    <div class="flex flex-col mt-36 w-full items-center justify-center">
      <p class="mb-2 uppercase font-bold text-sm text-center">Who we are</p>
      <p class="font-medium text-3xl text-center">Your Powerhouse For <br> Digital Growth</p>
      <p class="mt-12 mb-32 w-1/3 text-dark-gray font-light text-lg text-center">We’re the perfect blend of creative and technical. If you need a team that is passionate about building beautiful websites for businesses — hello, it’s nice to meet you.
      </p>
    </div>
    <Footer/>
  </div>
</template>