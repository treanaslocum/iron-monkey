<template>
  <div class=" min-h-screen">
    <div>
      <!-- Header -->

      <div class="flex p-12 items-center justify-between">
        <div class="">
          <NuxtLink to="/">
            <img src="~../assets/logo.png" width="165" height="165">
          </NuxtLink>
        </div>

        <div class="flex flex-col">
          <button class="text-right font-medium mb-2"><NuxtLink to="/work">Work</NuxtLink></button>
          <button class="text-right font-medium mb-2"><NuxtLink to="/services">Services</NuxtLink></button>
          <button class="text-right font-medium mb-2"><NuxtLink to="/about-us">About Us</NuxtLink></button>
          <button class="text-right font-medium"><NuxtLink to="/contact">Contact</NuxtLink></button>
        </div>
      </div>
      
      <!-- Main content area -->
      <div class="flex flex-col items-center mt-32 justify-center">
        <div class="text-center">
          <p class=" text-4xl font-medium pb-4">数字原住民. 设计大师.</p>
          <p class=" text-4xl font-medium pb-4">Digital Natives. Design Masters.</p>
        </div>
    
        
        
      </div>

    

      

      
    </div>
    



  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
