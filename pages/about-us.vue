<template>
  <div>

    <!-- header -->
     <Header/>

    <section class="flex flex-col w-full items-center justify-center">
      <p class="mb-2 uppercase font-bold text-sm sm:text-xl text-center">Who we are</p>
      <h2 class="font-medium text-2xl sm:text-5xl text-center">We are Iron Monkey</h2>
      <p class="mt-12 mb-6 sm:w-1/2 w-2/3 text-lg sm:text-xl text-center">Iron Monkey is a creative <span class="font-semibold">web design,</span><span class="font-semibold"> branding,</span>  and <span class="font-semibold">web development</span> studio that helps small businesses create brands and websites that customers love. We work with clients from around the world to make digital experiences that transform the lives of others. </p>
      <p class="mb-6 sm:w-1/2 w-2/3 text-lg sm:text-xl text-center">Iron Monkey was founded in 2022. We get our funky little name from an iconic martial arts film by the same name, <a href="https://www.imdb.com/title/tt0108148/" target="_blank"><span class="underline hover:font-semibold">Iron Monkey</span></a>. We are located in North Las Vegas, where we bridge design and technology.</p>
      <p class="mb-24 sm:w-1/2 w-2/3 text-lg sm:text-xl text-center">Today we're a small team of skilled designers, web developers, and storytellers leveraging the power of today's technologies to create powerful experiences for small businesses around the world.</p>
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
      title: "About Us - Iron Monkey Studio",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>