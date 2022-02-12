<template>
  <div class="min-h-screen">
    <div>
      <!-- Header -->

      <div class="flex p-12 items-center justify-between">
        <div class="">
          <NuxtLink to="/">
            <img src="~../assets/logo.png" width="165" height="165">
          </NuxtLink>
        </div>

        <div class="flex flex-col">
          <NuxtLink to="/work"><p class="work-chn text-right font-medium mb-2"><span>Work</span></p></NuxtLink>
          <NuxtLink to="/services"><p class="services-chn text-right font-medium mb-2"><span>Services</span></p></NuxtLink>
          <NuxtLink to="/about-us"><p class="about-chn text-right font-medium mb-2"><span>About Us</span></p></NuxtLink>
          <NuxtLink to="/contact"><p class="contact-chn text-right font-medium"><span>Contact</span></p></NuxtLink>
        </div>
      </div>
      
      <!-- Main content area -->
      <div class="flex flex-col flex-wrap mt-20 text-center items-center justify-center">
        <div class="">
          <p class="text-3xl font-medium pb-4">数字原住民. 设计大师.</p>
          <p class="text-3xl font-medium pb-10">Digital Natives. Design Masters.</p>
          <p class="text-xl font-light">We help businesses create brands and websites that customers love.</p>
        </div>
    
        
        
      </div>

    

      

      
    </div>
    



  </div>
</template>

<script src="assets/js/script.js">
export default {
  name: 'IndexPage',
}


</script>
