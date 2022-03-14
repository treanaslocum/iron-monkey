<template>
  <div>
     <header class="flex p-12 items-center justify-between">
        <div class="">
          <NuxtLink to="/">
            <img src="~../assets/logo.png" width="175" height="175">
          </NuxtLink>
        </div>

        <div class="sm:flex flex-col">
          <NuxtLink to="/work"><p class="work-chn text-lg text-right font-medium mb-2"><span>Work</span></p></NuxtLink>
          <NuxtLink to="/services"><p class="services-chn text-lg text-right font-medium mb-2"><span>Services</span></p></NuxtLink>
          <NuxtLink to="/about-us"><p class="about-chn text-lg text-right font-medium mb-2"><span>About Us</span></p></NuxtLink>
          <NuxtLink to="/contact"><p class="mb-4 contact-chn text-lg text-right font-medium"><span>Contact</span></p></NuxtLink>
          <div class="flex justify-end">
            <a href="https://www.tiktok.com/@ironmonkeystudio" target="_blank"><img class="w-5 mr-4" src="~/assets/images/tik-tok.png" alt=""></a>
            <a href="https://www.instagram.com/ironmonkeystudio/" target="_blank"><img class="w-5" src="~/assets/images/instagram.png" alt=""></a>
          </div>
          
        </div>
      </header>
  </div>
 



</template>


<script>
  export default {
      layout: "default",
  }



</script>