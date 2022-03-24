<template>
  <div>
      <!-- Header -->
     <Header/>

    <section class="flex flex-col mt-36 w-full items-center justify-center">
      <p class="mb-2 uppercase font-bold text-sm sm:text-2xl text-center">Our work</p>
      <h2 class="font-medium text-2xl sm:text-5xl text-center">Design & <br>Web Development</h2>
    </section>

    <section class="mt-12 flex flex-wrap items-center justify-center">
      <div class="m-16">
        <NuxtLink to = "projects/hyperion">
          <div class="">
            <img class="" src="~/assets/images/hyperion-home.png">
          </div>
        </NuxtLink>
        <p class="mt-4 font-light text-sm sm:text-lg">Web Design, Branding</p>
        <p class="text-lg sm:text-2xl">Hyperion Real Estate</p>
      </div>
      <div class="m-16">
        <Nuxt-Link to="projects/wonderboy">
          <div class="">
            <img class="" src="~/assets/test.png">
          </div>
        </Nuxt-Link>
        
        <p class="mt-4 font-light text-sm sm:text-lg">Web Design, Branding, Web Development</p>
        <p class="text-lg sm:text-2xl">Wonderboy Plumbing</p>
      </div>
      <div class="m-16">
        <Nuxt-Link to = "./projects/daves-burgers">
          <div class="">
            <img class="" src="~/assets/images/daves_burgers-home.png">
          </div>
        </Nuxt-Link>
        
        <p class="mt-4 font-light text-sm sm:text-lg">Web Design</p>
        <p class="text-lg sm:text-2xl">Dave's Burgers</p>
      </div>
    </section>

    <section class="mt-12 flex flex-wrap items-center justify-center">
      <div class="m-16">
        <Nuxt-Link to = "./projects/vertigo">
          <div class="">
            <img class="" src="~/assets/images/vertigo-home.png">
          </div>
        </Nuxt-Link>
        <p class="mt-4 font-light text-sm sm:text-lg">Web Design</p>
        <p class="text-lg sm:text-2xl">Vertigo</p>
      </div>
      <div class="m-16">
        <div class="">
          <img class="" src="~/assets/test.png">
        </div>
        <p class="mt-4 font-light text-sm sm:text-lg">Web Design</p>
        <p class="text-lg sm:text-2xl">Supro Online Store</p>
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
      title: "Work - Iron Monkey Studio",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>