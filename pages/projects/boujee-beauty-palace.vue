<template>
  <div>
    <Header/>

    <section class="flex justify-center">
      <NuxtLink to="./reflection-beauty" class="mr-16 font-semibold flex items-center justify-center">
        <p>&larr;</p>
        <p>Previous Project</p>
      </NuxtLink>

      <NuxtLink to="./daves-burgers" class="font-semibold flex items-center justify-center">
        <p>Next Project</p>
        <p>&rarr;</p>
      </NuxtLink>

    </section>

    <section>
      <div class="flex sm:flex-row flex-col  m-16">
        <div class="sm:w-2/4 w-full mr-16">
          <img class="mb-8" src="~/assets/images/boujee-home.png">
          <img class="mb-8" src="~/assets/images/boujee-services.png">
          <img class="mb-8" src="~/assets/images/boujee-service.png">
        </div>
        <div class="sm:w-2/4 w-full">
          <h1 class="mb-8 text-5xl font-semibold">Boujee Beauty Palace <br><span class="text-xl font-light">Web Design & Web Development</span></h1>
          <h5 class="text-xs font-semibold uppercase text-blue-900">Visit Website</h5>
          <a href="https://www.boujeebeautypalace.com/" target="_blank" class="text-blue-900">https://www.boujeebeautypalace.com/</a>
          <div class="mt-8">
            <h5 class="text-lg font-semibold">Client</h5>
            <h3 class="mb-4">Boujee Beauty Palace is a burgeoning beauty business located in Las Vegas, Nevada. </h3>
            <h5 class="text-lg font-semibold">The Challenge</h5>
            <h3 class="mb-4">Boujee Beauty Palace needed help making the appointment booking experience easier for their clients. Their original website lacked functionality and ease of use, so they wanted to make the website more performant and client friendly.</h3>
            <h5 class="text-lg font-semibold">The Solution</h5>
            <h3 class="">We designed the new Boujee Beauty Palace website to be more appointment booking centric and upgraded the design as well to look more modern.</h3>
          </div>
          
        </div>
        <div>
          
          
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
      title: "Boujee Beauty Palace - Iron Monkey",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>