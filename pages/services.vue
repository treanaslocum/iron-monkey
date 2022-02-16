<template>
  <div>
    <!-- Header -->
     <Header/>

    <div class="flex flex-col mt-36 w-full items-center">
      <p class="mb-2 uppercase font-bold text-sm sm:text-2xl text-center">What we do</p>
      <h2 class="font-medium text-2xl sm:text-5xl text-center">Whatever You Need, <br>We Build</h2>
      <p class="mt-12 mb-32 w-2/3 sm:w-1/2 text-dark-gray font-light text-lg sm:text-xl text-center">We use the power of sound design principles, solid web development and storytelling to artfully craft a website that translates into business for our clients.</p>
    </div>

    <div class="mt-32 mb-40 flex flex-col items-center">

      <div class="flex flex-wrap justify-center items-center">
        <div class="sm:mr-28 text-center sm:text-left">
          <p class="font-bold mb-4">Business</p>
          <p class="font-light">Discovery & Research</p>
          <p class="font-light">Ideation</p>
        </div>
        <div class="mt-8 text-center sm:text-left">
          <p class="font-light">Have an idea for a business? We can help make it a reality. <br> We take a raw idea and turn it into a tangible product.</p>
        </div>
      </div>

      <div class="flex flex-wrap justify-center  mt-24">
        <div class="sm:mr-32 text-center sm:text-left">
          <p class="font-bold mb-4">Technology</p>
          <p class="font-light">Web Development</p>
        </div>
        <div class="mt-10 text-center sm:text-left">
          <p class="font-light">Vision meets reality. A catchy, professional website equals<br> more business.</p>
        </div>
        </div>

        <div class="flex flex-wrap justify-center mt-24">
          <div class="ml-2 sm:mr-24 mt-2 text-center sm:text-left">
            <p class="font-bold mb-4">Creativity</p>
            <p class="font-light">UI/UX Design</p>
            <p class="font-light">Web & Mobile Design</p>
            <p class="font-light">Branding</p>
            <p class="font-light">Storytelling</p>
          </div>
          <div class="mt-12 ml-4 text-center sm:text-left">
            <p class="font-light">First impressions are a lasting impression. Design not only<br> is a major key to a business´  success but determines <br> whether a customer converts into a sale or not.</p>
          </div>
      </div>
    </div>

    


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