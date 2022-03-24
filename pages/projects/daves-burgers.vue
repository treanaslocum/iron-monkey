<template>
  <div>
    <Header/>

    <section class="flex justify-center">
  
      <NuxtLink to="./reflectionbeauty" class="mr-16 font-semibold flex items-center justify-center">
        <p>&larr;</p>
        <p>Previous Project</p>
      </NuxtLink>

      <NuxtLink to="./vertigo" class="font-semibold flex items-center justify-center">
        <p>Next Project</p>
        <p>&rarr;</p>
      </NuxtLink>

    </section>

    <section>
      <div class="flex sm:flex-row flex-col  m-16">
        <div class="sm:w-2/4 w-full mr-16">
          <img class="mb-8" src="~/assets/images/daves_burgers-home.png">
          <img class="mb-8" src="~/assets/images/daves_burgers-menu.png">
        </div>
        <div class="sm:w-2/4 w-full">
          <h1 class="mb-8 text-5xl font-semibold">Dave's Burgers <br><span class="text-xl font-light">Branding & Web Design</span></h1>
          <div>
            <h5 class="text-lg font-semibold">Client</h5>
            <h3 class="mb-4">Dave's Burgers is a fast-casual restaurant based out of Canada. Dave's Burgers' mission is to bring an elevated look, feel and taste to the fast-casual dining space.</h3>
            <h5 class="text-lg font-semibold">The Challenge</h5>
            <h3 class="mb-4">Dave's Burgers wanted a sleek design and a complete overhaul of their of entire brand. Their original branding was dull and lackluster, so they wanted to revive their brand and re-introduce their products in a polished way.</h3>
            <h5 class="text-lg font-semibold">The Solution</h5>
            <h3 class="">We designed the new Dave's Burgers brand and website. We aimed to convey their convenience through modern and edgy visuals.</h3>
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
      title: "Dave's Burgers - Iron Monkey",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>