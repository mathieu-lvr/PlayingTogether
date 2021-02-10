<template>
  <div class="account">
    <Aform/>
  </div>
  
</template>

<script>

import Aform from '../components/Account-form';


export default {
  components: {
    Aform,
  },

  created(){
    sessionStorage.setItem('page',this.$route.name)
  }

}

</script>