<template>
  <div>
    <!-- Header -->
     <Header/>

    <section class="flex flex-col mt-36 w-full items-center">
      <p class="mb-2 uppercase font-bold text-sm sm:text-2xl text-center">What we do</p>
      <h2 class="font-medium text-2xl sm:text-5xl w-2/4 text-center">We shape the identity of the businesses that improve the lives of thousands every single day.</h2>
      <p class="mt-12 mb-6 w-2/3 sm:w-1/2 text-dark-gray text-lg sm:text-xl text-center">We use the power of sound design principles, solid web development and storytelling to artfully craft a website that translates into business for our clients.</p>
      <p class="mb-32 text-dark-gray text-lg sm:text-xl">We do this by following a simple approach.</p>
    </section>

    <section class="mb-24 mt-16 p-16">

      <div class="flex justify-center sm:space-x-28  flex-wrap">
        <div class="mb-16 text-center sm:w-1/3">
          <h3 class="text-6xl font-bold">1</h3>
          <p class="sm:text-xl text-base">We uncover insights and shape brands through a process of <span class="font-bold">discovery</span>  and <span class="font-bold">ideation</span>.</p>
        </div>
          
        <div class="mb-16 text-center sm:w-1/3">
          <h3 class="text-6xl font-bold">2</h3>
          <p class=" sm:text-xl text-base">We design using <span class="font-bold">human-centric ideology</span> as a core principle.</p>
        </div>
     
      </div>
      <div class="flex justify-center sm:space-x-28  flex-wrap">
    
        <div class="mb-16 text-center sm:w-1/3">
          <h3 class="text-6xl font-bold ">3</h3>
          <p class="sm:text-xl text-base">We build using <span class="font-bold">modern technologies</span> to produce products that stand the test of time.</p>
        </div>

        <div class="mb-16 text-center sm:w-1/3">
          <h3 class="text-6xl font-bold">4</h3>
          <p class="sm:text-xl text-base">Like the world around us and the businesses we work with, we are <span class="font-bold"> always evolving</span>&#8212;creating memorable stories along the way.</p>
        </div>
      
     
      </div>
      
 
    </section>

    <section class="sm:ml-40 ml-24">
      <div class="mb-16">
        <h2 class="sm:text-4xl text-2xl font-bold mb-4">Our Capabilities</h2>
        <p class="text-xl text-dark-gray">We're more than a one trick pony. We've mastered a few things.</p>
      </div>
      <div class="sm:ml-64">
        <div class="flex flex-wrap lg:ml-96 md:ml-24">
          <div class="mb-16 sm:w-1/3 md:w-3/4">
            <h3 class="sm:text-2xl text-xl font-bold">Branding</h3>
            <p class="sm:text-xl text-base">&#8211; Brand strategy</p>
            <p class="sm:text-xl text-base">&#8211; Identity development</p>
          </div>
            
          <div class="mb-16 sm:w-2/4">
            <h3 class="sm:text-2xl text-xl font-bold">Discovery</h3>
            <p class="sm:text-xl text-base">&#8211; Competitive ranking</p>
            <p class="sm:text-xl text-base">&#8211; Customer research and analysis</p>
            <p class="sm:text-xl text-base">&#8211; User flows and customer journey</p>
          </div>
          
            
        </div>
        <div class="flex flex-wrap lg:ml-96 md:ml-24">
          <div class="mb-16 sm:w-1/3 md:w-3/4 w-1/2">
            <h3 class="sm:text-2xl text-xl font-bold">Design</h3>
            <p class="sm:text-xl text-base">&#8211; Web design</p>
            <p class="sm:text-xl text-base">&#8211; Logo design</p>
          </div>
            
          <div class="mb-16 sm:w-2/4">
            <h3 class="sm:text-2xl text-xl font-bold">Engineering</h3>
            <p class="sm:text-xl text-base">&#8211; Front-end development</p>
            <p class="sm:text-xl text-base">&#8211; Website development</p>
            <p class="sm:text-xl text-base">&#8211; Web Hosting</p>

          </div>
            
        </div>
     

      </div>
    </section>
    

    <!-- <section class="mb-24 mt-16 justify-center items-center flex">

      <div class="text-center">
        <div class="mb-16">
        <p class="sm:text-2xl text-xl font-bold mb-4">Business</p>
        <p class="sm:text-lg text-base">Discovery & Research</p>
        <p class="sm:text-lg text-base">Ideation</p>
        </div>
          
        
        <div class="mb-16">
          <p class="sm:text-2xl text-xl font-bold mb-4">Technology</p>
          <p class="sm:text-lg text-base">Web Development</p>
          <p class="sm:text-lg text-base font-light">Search Engine Optimization</p>
          <p class="sm:text-lg text-base">Website Hosting</p>
        </div>
        
        <div class="">
          <p class="sm:text-2xl text-xl font-bold mb-4">Creativity</p>
          <p class="sm:text-lg text-base">Web Design</p>
          <p class="sm:text-lg text-base font-light">Logo Design</p>
          <p class="sm:text-lg text-base">Branding</p>
          <p class="sm:text-lg text-base">Storytelling</p>
        </div>
     
      </div>
      
 
    </section> -->

    


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