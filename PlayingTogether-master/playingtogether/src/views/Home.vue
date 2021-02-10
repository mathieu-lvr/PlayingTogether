<template>
  <div class="home">
    <h1>Welcome to Playing Together</h1>
    <Sign/>
    <SignOut/>
    <Video/>
  </div>
  
</template>

<script>

import Sign from '../components/Sign';
import SignOut from '../components/SignOut';
import Video from '../components/Video';

export default {
  name: 'Home',
  components: {
    Sign,
    SignOut,
    Video
  },

  created(){
    sessionStorage.setItem('page',this.$route.name)

  }
  
}

</script>
