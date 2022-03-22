<template>
  <div>
    <Header/>

    <section class="flex justify-center">
      <NuxtLink to="./hyperion" class="mr-16 font-semibold flex items-center justify-center">
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
          <img class="mb-8" src="~/assets/test.png">
          <img class="mb-8" src="~/assets/test.png">
          <img class="mb-8" src="~/assets/test.png">
        </div>
        <div class="sm:w-2/4 w-full">
          <h1 class="mb-8 text-5xl font-semibold">Wonderboy Plumbing <br><span class="text-xl font-light">Branding, Web Design & Web Development</span></h1>
          <div>
            <h5 class="text-lg font-semibold">Client</h5>
            <h3 class="mb-4">Hyperion Real Estate is a real estate platform that helps luxury buyers find homes in the UK. Founded in London, Hyperion is a team of professional real estate agents on a mission to make the luxury home buying experience more enjoyable.</h3>
            <h5 class="text-lg font-semibold">The Challenge</h5>
            <h3 class="mb-4">Hyperion needed a consistent brand. Their original website lacked character and strong visuals, so they wanted to amplify their brand visibility and showcase their product in an easily digestible way.</h3>
            <h5 class="text-lg font-semibold">The Solution</h5>
            <h3 class="">We researched, strategized, and designed the new Hyperion visual identity, supported by a new website with an easy-to-use design system. <br><br>We aimed to convey their professionalism through visuals - that’s why we created a modern, sleek and sophisticated identity.</h3>
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
      title: "Wonderboy Plumbing - Iron Monkey",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>