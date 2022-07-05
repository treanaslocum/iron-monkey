<template>
  <div class="flex flex-col items-center">
    <div>
      <NuxtLink to="/"><img src="~/assets/logo.png" width="165" height="165"></NuxtLink>
    </div>
    
    <div class="sm:flex hidden">
      <p class="font-medium p-5"><NuxtLink to="/work">Work</NuxtLink></p>
      <p class="font-medium p-5"><NuxtLink to="/services">Services</NuxtLink></p>
      <p class="font-medium p-5"><NuxtLink to="/about-us">About Us</NuxtLink></p>
      <p class="font-medium p-5"><NuxtLink to="/contact">Contact</NuxtLink></p>
    </div>

    <div>
      <p>Made with &#10084; in North Las Vegas</p>
      <p class="text-sm mt-2 mb-8">© Copyright 2022. All Rights Reserved.</p>
    </div>
    
  </div>
</template>