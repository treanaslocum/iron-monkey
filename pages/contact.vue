<template>
  <div>
    <!-- header -->
     <Header/>
     
    <div class="flex flex-col mt-36 mb-24 w-full items-center">
      <p class="mb-2 uppercase font-bold text-sm sm:text-2xl">Drop us a line</p>
      <h2 class="font-medium text-2xl sm:text-5xl">Looking Forward To Hearing From You.</h2>
      <p class="mt-12 mb-32 w-2/3 sm:w-1/2 text-dark-gray font-light text-lg sm:text-xl text-center">Partner with us to create the digital experience you´ve always envisioned.</p>

      <div class="text-center mt-22">
        <div class="mb-6 ">
          <p class="text-lg sm:text-xl font-medium pb-4">Location</p>
          <p class="font-light text-lg">North Las Vegas, NV</p>
        </div>
        <div class="">
          <p class="text-lg sm:text-xl font-medium pb-4">Contact</p>
          <p class="font-light text-lg">ironmonkeystudio702@gmail.com</p>
          <p class="font-light text-lg">702-333-1018</p>
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