<template>
  <div class="Join">
    <h1>Please Join a Game !</h1>
    <Map v-on:showInfo="checkInfo($event)"></Map>
    

    <div id="info" style ="display: none;">
    <Info v-bind:marker="marker"/>
    </div>

  </div>
</template>

<script>

import Map from '../components/Map';
import Info from '../components/ShortInfo';


export default {
  data(){
    return{
    marker:{}
    }
  },
  name: 'Join',
  components: {
    Map,
    Info
  },
  
  created(){
    sessionStorage.setItem('page',this.$route.name)
    
    },
    
  methods :{
    checkInfo: function(data){
      //we want the info component to appear
      this.marker = data;


      document.querySelector("#info").style.display ="block"
    }

  }
}

</script>
