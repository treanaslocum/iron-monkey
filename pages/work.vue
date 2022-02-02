<template>
  <div>
      <!-- Header -->
    <div class="flex flex-wrap w-full items-center justify-between">
      <!-- logo -->
      <div>
        <NuxtLink to="/">
          <img src="~../assets/logo.png" width="165" height="165">
        </NuxtLink>
        
      </div>
      
      <!-- header navigation -->
      <div class="flex mr-20">
        <p class="font-medium p-5 underline"><NuxtLink to="/work">Work</NuxtLink></p>
        <p class="font-medium p-5"><NuxtLink to="/services">Services</NuxtLink></p>
        <p class="font-medium p-5"><NuxtLink to="/about-us">About Us</NuxtLink></p>
        <p class="font-medium p-5"><NuxtLink to="/contact">Contact</NuxtLink></p>
      </div>
      
    </div>

    <div class="flex flex-col mt-36 w-full items-center justify-center">
      <p class="mb-2 uppercase font-bold text-sm text-center">Our work</p>
      <p class="font-medium text-3xl text-center">Design & <br>Web Development</p>
    </div>

    <div class="mt-12 flex flex-wrap items-center justify-center">
      <div class="m-16">
        <div class="">
          <img class="w-72" src="~/assets/test.png">
        </div>
        <p class="mt-4 font-light text-sm">Web Design</p>
        <p>Supro Online Store</p>
      </div>
      <div class="m-16">
        <div class="">
          <img class="w-72" src="~/assets/test.png">
        </div>
        <p class="mt-4 font-light text-sm">Web Design, UI/UX Design</p>
        <p>Supro Online Store</p>
      </div>
      <div class="m-16">
        <div class="">
          <img class="w-72" src="~/assets/test.png">
        </div>
        <p class="mt-4 font-light text-sm">Web Design, Web Development, UI/UX Design</p>
        <p>Supro Online Store</p>
      </div>
    </div>

    <div class="mt-12 flex flex-wrap items-center justify-center">
      <div class="m-16">
        <div class="">
          <img class="w-72" src="~/assets/test.png">
        </div>
        <p class="mt-4 font-light text-sm">Web Development</p>
        <p>Supro Online Store</p>
      </div>
      <div class="m-16">
        <div class="">
          <img class="w-72" src="~/assets/test.png">
        </div>
        <p class="mt-4 font-light text-sm">Web Design</p>
        <p>Supro Online Store</p>
      </div>
      <div class="m-16">
        <div class="">
          <img class="w-72" src="~/assets/test.png">
        </div>
        <p class="mt-4 font-light text-sm">Web Design</p>
        <p>Supro Online Store</p>
      </div>
    </div>

    <Footer/>
  </div>
 

  

  
</template>