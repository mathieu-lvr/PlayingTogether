<template>
    <div id='video'>
        <div class="videoStyle">
            <iframe id="videoAd" width="560" height="315" src="https://www.youtube.com/embed/aTTy68cd_4A?autoplay=1" frameborder="0" 
            allow="accelerometer; autoplay;
             clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div>
            
        </div>   
        <div id="Ad">
            <img src="https://www.ekipazofootball.com/fr/templates/ja_vintas/images/logo-ekipazo.jpg" 
            height="auto" width="auto" v-on:click="OpenAd()">
            <button id="btnClose" v-on:click="CloseAd()">&times;</button>
            </div>
            
             
        </div>
    
</template>

<script>

export default {
    methods:{
        OpenAd(){
            window.open("https://www.ekipazofootball.com/fr/");
        },
        CloseAd(){
            
            document.querySelector("#Ad").style.display= "none";
        }

    }

}
</script>


<style>
img {
  width: 100%;
  height: auto;
}

#btnClose{
    position:absolute;
    bottom:10%;
    right:0%;
    height:50px;
    width: 50px;
    font-size: 130%;

}

.videoStyle{
    margin-top: 10px;
  width: auto;
  height: auto;
}
</style>