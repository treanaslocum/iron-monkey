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
        <p class="font-medium p-5"><NuxtLink to="/work">Work</NuxtLink></p>
        <p class="font-medium p-5 underline"><NuxtLink to="/services">Services</NuxtLink></p>
        <p class="font-medium p-5"><NuxtLink to="/about-us">About Us</NuxtLink></p>
        <p class="font-medium p-5"><NuxtLink to="/contact">Contact</NuxtLink></p>
      </div>
      
    </div>

    <div class="flex flex-col mt-36 w-full items-center justify-center">
      <p class="mb-2 uppercase font-bold text-sm text-center">Who we do</p>
      <p class="font-medium text-3xl text-center">Whatever You Need, <br>We Build</p>
      <p class="mt-12 mb-32 w-1/3 text-dark-gray font-light text-lg text-center">We use the power of sound design principles, solid web development and storytelling to artfully craft a website that translates into business for our clients.</p>
    </div>

    


    <Footer/>
  </div>
</template>