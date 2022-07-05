<template>
  <div>
     <!-- <header class="flex p-12 items-center justify-between">
        <div class="">
          <NuxtLink to="/">
            <img src="~../assets/logo.png" width="175" height="175">
          </NuxtLink>
        </div>

        <div class="sm:flex flex-col">
          <NuxtLink to="/work"><p class="work-chn text-lg text-right font-medium mb-2"><span>Work</span></p></NuxtLink>
          <NuxtLink to="/services"><p class="services-chn text-lg text-right font-medium mb-2"><span>Services</span></p></NuxtLink>
          <NuxtLink to="/about-us"><p class="about-chn text-lg text-right font-medium mb-2"><span>About Us</span></p></NuxtLink>
          <NuxtLink to="/contact"><p class="mb-4 contact-chn text-lg text-right font-medium"><span>Contact</span></p></NuxtLink>
          <div class="flex justify-end">
            <a href="https://www.tiktok.com/@ironmonkeystudio" target="_blank"><img class="w-5 mr-4" src="~/assets/images/tik-tok.png" alt=""></a>
            <a href="https://www.instagram.com/ironmonkeystudio/" target="_blank"><img class="w-5" src="~/assets/images/instagram.png" alt=""></a>
          </div>
          
        </div>
      </header> -->


      <header class="flex p-12 items-center justify-between">

        <div class="">
          <NuxtLink to="/">
            <img src="~../assets/logo.png" width="175" height="175">
          </NuxtLink>
        </div>

        <label for="menu-toggle" class="cursor-pointer lg:hidden block">
          <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"/></svg>
        </label>

        <input type="checkbox" class="hidden" id="menu-toggle">

        <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
          <nav>
            <ul class="sm:flex flex-col">
              <li>
                <NuxtLink to="/work"><p class="work-chn text-lg text-right font-medium mb-1"><span>Work</span></p></NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services"><p class="services-chn text-lg text-right font-medium mb-1"><span>Services</span></p></NuxtLink>
              </li>
              <!-- <li>
                <NuxtLink to="/pricing"><p class="pricing-chn text-lg text-right font-medium mb-1"><span>Pricing</span></p></NuxtLink>
              </li> -->
              <li>
                <NuxtLink to="/about-us"><p class="about-chn text-lg text-right font-medium mb-1"><span>About Us</span></p></NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact"><p class="mb-1 contact-chn text-lg text-right font-medium"><span>Contact</span></p></NuxtLink>
              </li> 
              <!-- <li>
                <NuxtLink to="/testimonials"><p class="mb-4 testimonials-chn text-lg text-right font-medium"><span>Testimonials</span></p></NuxtLink>
              </li>             -->
              
              
              <div class="flex justify-end">
                <a href="https://www.tiktok.com/@ironmonkeystudio" target="_blank"><img class="w-5 mr-4" src="~/assets/images/tik-tok.png" alt=""></a>
                <a href="https://www.instagram.com/ironmonkeystudio/" target="_blank"><img class="w-5" src="~/assets/images/instagram.png" alt=""></a>
              </div>
            </ul>
          </nav>
        </div>


      </header>
  </div>
 



</template>


<script>
  export default {
      layout: "default",
  }



</script>