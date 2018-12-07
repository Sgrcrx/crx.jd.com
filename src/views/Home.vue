<template>
  <div class="home">
    <search-bars></search-bars>
    <swiper></swiper>
    <navss></navss>
    <goods></goods>
    
    <footeres></footeres>
  </div>
</template>

<script>

import SearchBars from'../components/SearchBars.vue'
import Footeres from'../components/Footeres'
import Swiper from'../components/Swiper'
import Navss from'../components/Navss'
import Goods from'../components/Goods'
export default {
  name: 'home',
  components: { 
    SearchBars,
    Footeres,
    Swiper,
    Navss,
    Goods
    
  	
  }
}

</script>
