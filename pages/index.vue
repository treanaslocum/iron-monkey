 <template>
  <div class="min-h-screen">
    <div class="">
      <!-- Header -->
     <!-- <SecondaryHeader/> -->
     <Header/>
      
      <!-- Main content area -->
      <main class="mt-10 ml-24">
        <div class="mr-12">
          <h1 class="sm:text-4xl text-3xl font-light pb-4">A Creative Web Design Studio in Las Vegas</h1>
          <h1 class="sm:text-9xl text-5xl font-medium pb-10">Digital Natives. <br>Design Masters.</h1>
        </div>
        <div class="mb-16">
          <!-- <p class="text-xl sm:text-2xl  w-3/4 sm:w-2/3">Iron Monkey is a <span class="font-semibold">web design,</span><span class="font-semibold"> branding,</span>  and <span class="font-semibold">web development</span> agency that helps small businesses create brands and websites that customers love. We work with clients from around the world to make digital experiences that transform the lives of others.</p> -->
          <p class="text-xl sm:text-2xl  w-3/4 sm:w-2/3">If you are looking to improve your company’s online presence, then call our web design studio. We help small businesses locally and worldwide, to gain more leads, more customers, and more revenue.</p>
          <p class="mt-6 text-xl sm:text-2xl  w-3/4 sm:w-2/3">Our creative studio can provide everything from custom web design, web development and branding. Our number one goal is to provide the perfect service that meets your business objectives. A consultation is free of charge, so get in touch today for a no-obligation discussion.</p>
        </div>
        <div class="flex flex-wrap mt-16 mb-16">
          <NuxtLink to="/contact"><button class="p-6 bg-black text-white text-center uppercase text-sm font-semibold">Start a project &#10230;</button></NuxtLink>
         <a href="https://calendly.com/ironmonkey/30min" target="_blank"><button class="btn-padding sm:ml-6 mt-4 sm:mt-0 border-black border-2 text-black uppercase text-sm font-semibold">Book a free 30 min consultation</button></a>
        </div>        
        
      </main> 
      
   
      <Footer/>
          
    </div>
    



  </div>
</template>

<script src="assets/js/script.js">
export default {
  name: 'IndexPage',
}


</script>
