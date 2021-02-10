<template>
  <div class="Host">
    <Hosting/>
  </div>
</template>

<script>

import Hosting from '../components/Hosting';


export default {
  name: 'Host',
  components: {
    Hosting
  },

  created(){
    sessionStorage.setItem('page',this.$route.name)
  }

 
                
                
                
  
}

</script>
