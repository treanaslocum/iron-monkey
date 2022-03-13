<template>
  <div>
    <Header/>

    <section class="flex justify-center">
      <NuxtLink to="./hyperion" class="mr-16 font-semibold flex items-center justify-center">
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
          <img class="mb-8" src="~/assets/test.png">
          <img class="mb-8" src="~/assets/test.png">
          <img class="mb-8" src="~/assets/test.png">
        </div>
        <div class="sm:w-2/4 w-full">
          <h1 class="mb-8 text-5xl font-semibold">Wonderboy Plumbing <br><span class="text-xl font-light">Branding, Web Design & Web Development</span></h1>
          <p class="mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quisquam, velit ipsam eligendi, exercitationem reiciendis ipsum obcaecati maiores minima, provident corporis recusandae quia repellendus accusantium.</p>
          <div>
            <h5 class="text-lg">Client</h5>
            <h3 class="mb-4 text-xl font-semibold">Wonderboy Plumbing</h3>
            <h5 class="text-lg">Location</h5>
            <h3 class="mb-4 text-xl font-semibold">Kingston, Ontario</h3>
            <h5 class="text-lg">Services</h5>
            <h3 class="text-xl font-semibold">Web Design, Web Development, Branding</h3>
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