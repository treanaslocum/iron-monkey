<template>
  <div>

    <!-- header -->
     <Header/>

    <section class="flex flex-col w-full items-center justify-center">
      <p class="mb-2 uppercase font-bold text-sm sm:text-2xl text-center">The people that love us</p>
      <h2 class="font-medium text-2xl sm:text-5xl text-center mb-24">Testimonials</h2>
      <div class="flex flex-wrap justify-center p-16">
        <div class="sm:w-2/5 mb-12 sm:mr-12">
          <h3 class="text-xl mb-6">"We re-did our website twice in a 12 month period. There was no comparison between the first company and Iron Monkey. Professional, Creative, Attentive to Detail, Excellent Communication…If I had contracted with Iron Monkey the first time I would not have had to do it twice."</h3>
          <p class="font-medium text-xl">Oliver Davies</p>
          <p class="text-dark-gray">THE DOG HOUSE CO-FOUNDER</p>
        </div>
        <div class="sm:w-2/5">
          <h3 class="text-xl mb-6">"To put it plainly our business has been on fire since building a website. We don't know what we were thinking not having all these years. Thanks Iron Monkey! Your team was great to work with."</h3>
          <p class="font-medium text-xl">Harry Williams</p>
          <p class="text-dark-gray">HARRY'S PUB OWNER</p>
        </div>
      </div>
      <div class="flex flex-wrap justify-center -mt-20 p-16">
        <div class="sm:w-2/5 mb-12 sm:mr-12">
          <h3 class="text-xl mb-6">"Compared to the other companies we have used in the past, Iron Monkey has been far and above the best in every area. While building our new web site, the customer service was prompt and straightforward."</h3>
          <p class="font-medium text-xl">Tony Evans</p>
          <p class="text-dark-gray">DAVE'S BURGERS CO-OWNER</p>
        </div>
        <div class="sm:w-2/5">
          <h3 class="text-xl mb-6">"I highly recommend Iron Monkey to every business owner out there looking to build a customer friendly site. They were great to work with."</h3>
          <p class="font-medium text-xl">Maggie Sims</p>
          <p class="text-dark-gray">FIRST PLACE BRIDAL SHOP OWNER</p>
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
      title: "Testimonials - Iron Monkey Studio",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>