<template>
  <div>
    <!-- header -->
     <Header/>
     
    <section class="flex flex-col mb-24 w-full items-center">
      <p class="mb-2 uppercase font-bold text-sm sm:text-xl">Connect with us</p>
      <h2 class="font-medium text-2xl sm:text-5xl text-center">Let’s build something <br>amazing together.</h2>
      <p class="mt-12 mb-16 w-2/3 sm:w-1/2 text-lg sm:text-xl text-center">Perhaps there’s a way your business could benefit by partnering with Iron Monkey? Please send us an email or fill out the form below, and we’ll respond within 48 hours of receiving the inquiry.</p>
       <div class="w-full mb-24">
        <div data-tf-widget="NGoNG3L6" data-tf-iframe-props="title=Client Questionaire" data-tf-medium="snippet" style="width:100%;height:400px;"></div><script src="//embed.typeform.com/next/embed.js"></script>
      </div>
      
       <div class="text-center mt-22">
        <div class="mb-6 ">
          <p class="text-lg sm:text-xl font-semibold pb-4">Business Hours</p>
          <p class="text-lg">Monday-Friday</p>
          <p class="text-lg">10AM - 4PM</p>
        </div>
        <div class="mb-6 ">
          <p class="text-lg sm:text-xl font-semibold pb-4">Location</p>
          <p class="text-lg">North Las Vegas, NV</p>
        </div>
        <div class="mb-10">
          <p class="text-lg sm:text-xl font-semibold pb-4">Contact</p>
          <p class="text-lg">ironmonkeystudio702@gmail.com</p>
          <p class="text-lg">702-308-9874</p>
        </div>
      </div>
    
     

     

      
    </section>

    

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