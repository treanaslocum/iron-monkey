<template>
  <div>
    <!-- Header -->
     <Header/>

    <section class="flex flex-col mt-36 w-full items-center">
      <p class="mb-2 uppercase font-bold text-sm sm:text-2xl text-center">What we do</p>
      <h2 class="font-medium text-2xl sm:text-5xl text-center">Whatever You Need, <br>We Build</h2>
      <p class="mt-12 mb-32 w-2/3 sm:w-1/2 text-dark-gray font-light text-lg sm:text-xl text-center">We use the power of sound design principles, solid web development and storytelling to artfully craft a website that translates into business for our clients.</p>
    </section>

    <section class="mb-24 mt-16 justify-center items-center flex">

      <div class="text-center">
        <div class="mb-16">
        <p class="sm:text-2xl text-xl font-bold mb-4">Business</p>
        <p class="sm:text-lg text-base font-light">Discovery & Research</p>
        <p class="sm:text-lg text-base font-light">Ideation</p>
        </div>
          
        
        <div class="mb-16">
          <p class="sm:text-2xl text-xl font-bold mb-4">Technology</p>
          <p class="sm:text-lg text-base font-light">Web Development</p>
          <!-- <p class="sm:text-lg text-base font-light">Search Engine Optimization</p> -->
          <p class="sm:text-lg text-base font-light">Website Hosting</p>
        </div>
        
        <div class="">
          <p class="sm:text-2xl text-xl font-bold mb-4">Creativity</p>
          <p class="sm:text-lg text-base font-light">Web Design</p>
          <!-- <p class="sm:text-lg text-base font-light">Logo Design</p> -->
          <p class="sm:text-lg text-base font-light">Branding</p>
          <p class="sm:text-lg text-base font-light">Storytelling</p>
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
      title: "Services - Iron Monkey Studio",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>