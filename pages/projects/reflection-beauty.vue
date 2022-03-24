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
          <!-- <img class="mb-8" src="~/assets/images/reflection_beauty-home.jpg">
          <img class="mb-8" src="~/assets/images/reflection_beauty-shop.jpg">
          <img class="mb-8" src="~/assets/images/reflection_beauty-product.jpg"> -->
        </div>
        <div class="sm:w-2/4 w-full">
          <h1 class="mb-8 text-5xl font-semibold">Reflection Beauty <br><span class="text-xl font-light">Web Design, Branding, Web Development</span></h1>
          <a href="https://www.reflectionbeauty.co/" target="_blank">https://www.reflectionbeauty.co/</a>
          <div class="mt-8">
            <h5 class="text-lg font-semibold">Client</h5>
            <h3 class="mb-4">Reflection Beauty is a modern beauty brand that empowers everyday women to build better self-esteem, self-image, and personalities. Based in Las Vegas, NV, Reflection Beauty is owned by a serial entrepreneur who wants to promote a focus on self-pampering and self-love.</h3>
            <h5 class="text-lg font-semibold">The Challenge</h5>
            <h3 class="mb-4">Reflection Beauty needed a modern brand that could revel its more established competitors. They wanted to showcase their first product nail polish to attract their desired demographic.</h3>
            <h5 class="text-lg font-semibold">The Solution</h5>
            <h3 class="">We designed a sleek website. We aimed to convey the brand's feminine asestic and made it attractive to all sorts of women.</h3>
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
      title: "Reflection Beauty - Iron Monkey",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>