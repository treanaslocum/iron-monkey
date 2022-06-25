 <template>
  <div class="min-h-screen">
    <div class="">
      <!-- Header -->

     <Header/>
      
      <!-- Main content area -->
      <main class="mt-20 ml-24">
        <div class="mr-12">
          <h1 class="sm:text-6xl text-3xl font-medium pb-4">数字原住民. 设计大师.</h1>
          <h1 class="sm:text-9xl text-5xl font-medium pb-10">Digital Natives. <br>Design Masters.</h1>
        </div>
        <div class="mb-16">
          <p class="text-xl sm:text-2xl  w-3/4 sm:w-2/3">Iron Monkey is a <span class="font-semibold">web design,</span><span class="font-semibold"> branding,</span>  and <span class="font-semibold">web development</span> agency that helps small businesses create brands and websites that customers love. We work with clients from around the world to make digital experiences that transform the lives of others.</p>
        </div>
        <div class="flex flex-wrap mt-16 mb-16">
          <NuxtLink to="/contact"><button class="p-6 bg-black text-white text-center uppercase text-sm font-semibold">Start a project!</button></NuxtLink>
         <a href="https://ironmonkey3116.setmore.com/" target="_blank"><button class="btn-padding sm:ml-6 mt-4 sm:mt-0 border-black border-2 text-black uppercase text-sm font-semibold">Book a free consultation</button></a>
        </div>        
        
      </main> 

          
    </div>
    



  </div>
</template>

<script src="assets/js/script.js">
export default {
  name: 'IndexPage',
}


</script>
