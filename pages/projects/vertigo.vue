<template>
  <div>
    <Header/>

    <section class="flex justify-center">
      <NuxtLink to="./daves-burgers" class="mr-16 font-semibold flex items-center justify-center">
        <p>&larr;</p>
        <p>Previous Project</p>
      </NuxtLink>

      <NuxtLink to="" class="font-semibold flex items-center justify-center">
        <p>Next Project</p>
        <p>&rarr;</p>
      </NuxtLink>

    </section>

    <section>
      <div class="flex sm:flex-row flex-col  m-16">
        <div class="sm:w-2/4 w-full mr-16">
          <img class="mb-8" src="~/assets/images/vertigo-home.png">
        </div>
        <div class="sm:w-2/4 w-full">
          <h1 class="mb-8 text-5xl font-semibold">Vertigo <br><span class="text-xl font-light">Web Design</span></h1>
          <div>
            <h5 class="text-lg font-semibold">Client</h5>
            <h3 class="mb-4">Vertigo is a web development platform that allows designers and developers to build sites without coding. Based in Toronto, Canada, Vertigo is a startup built by a team of veteran coders whose mission is to make coding accessible to everyone.</h3>
            <h5 class="text-lg font-semibold">The Challenge</h5>
            <h3 class="mb-4">Vertigo needed a friendly, artistic brand. Their original website lacked user accessibility and modern visuals. They wanted to showcase the technology behind Vertigo while at the same make it user friendly and appealing to designers and developers.</h3>
            <h5 class="text-lg font-semibold">The Solution</h5>
            <h3 class="">We designed the new Vertigo website. We aimed to convey the platform's usefulness through eye catching design which created a modern and fluid identity.</h3>
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
      title: "Vertigo - Iron Monkey",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>