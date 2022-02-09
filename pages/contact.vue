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
        <p class="font-medium p-5"><NuxtLink to="/about-us">About Us</NuxtLink></p>
        <p class="font-medium p-5 underline"><NuxtLink to="/contact">Contact</NuxtLink></p>
      </div>
      
    </div>
    <div class="flex flex-col mt-36 mb-24 w-full items-center">
      <p class="mb-2 ml-4 mr-96 uppercase font-bold text-sm text-left">Drop us a line</p>
      <p class="ml-8 font-medium text-3xl text-left">Looking Forward To Hearing From You.</p>
      <p class="mt-12 mb-32 w-1/3 text-dark-gray font-light text-lg text-left">Partner with us to create the digital experience you´ve always envisioned.</p>

      <div class="flex ml-8 mt-22">
        <div class="mr-36">
          <p class="text-lg font-medium pb-4">Location</p>
          <p class="font-light">North Las Vegas, NV</p>
        </div>
        <div class="">
          <p class="text-lg font-medium pb-4">Contact</p>
          <p class="font-light">ironmonkeystudio702@gmail.com</p>
          <p class="font-light">702-333-1018</p>
        </div>
      </div>
    </div>

    

    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
  head () {
    return {
      title: "Contact - Iron Monkey Studio",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>