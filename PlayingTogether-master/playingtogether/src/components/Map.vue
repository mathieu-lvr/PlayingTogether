<template>
    <div id="map">
        
        <GmapMap
            :center="myCoordinates"
            :zoom="zoom"
            style="width:640px; height:360px; margin: 32px auto;"
            ref="mapRef"
            @dragend="handleDrag"
        >
        <GmapMarker
            :key="index"
            v-for="(m,index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="false"
            :icon="m.icon"
            @click="info(m,index)"
            />
        <Gmap-info-window 
            :options="infoOptions" 
            :position="infoWindowPos" 
            :opened="infoWinOpen" 
            @closeclick="infoWinOpen=false"
        />
        
        </GmapMap>
       
        
    </div>
</template>




<script>
    
    const icons = {
        FootBall:{
            icon : "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
        }
    }

    export default {
      
        data() {
            return {
                map: null,
                myCoordinates: {
                    lat: 0,
                    lng: 0
                },
                zoom: 7,
                markers:[],
                infoWindowPos: null,
                infoWinOpen: false,
                currentMidx: null,
                infoOptions: {
                    content: "",
                    pixelOffset: {
                        width:0,
                        height:-35

                    }
                }
                
            }
            

     
        },

    

        created() {
            // does the user have a saved center? use it instead of the default
            if(localStorage.center) {
                this.myCoordinates = JSON.parse(localStorage.center);
            } else {
                // get user's coordinates from browser request
                this.$getLocation({})
                    .then(coordinates => {
                        this.myCoordinates = coordinates;
                    })
                    .catch(error => alert(error));
            }
            // does the user have a saved zoom? use it instead of the default
            if(localStorage.zoom) {
                this.zoom = parseInt(localStorage.zoom);
            }





            if (localStorage.getItem("Event") === null) {
                console.log("No events")
            }  else{
                const events = JSON.parse(localStorage.getItem("Event"));
                
                for(let i=0;i < events.length;i++){

                    var nplayers = parseInt(events[i][3]);
                    
                    var splayers = events[i][5];
                    var empty = nplayers-splayers;
                    if(splayers == nplayers){
                        alert(events[i][0])
                        break;
                    }
                    
                    const marker = {
                         position : events[i][1],
                         icon: icons.FootBall.icon,
                         infoText: events[i][2],
                         name : events[i][0],
                         id : i,
                         sport : events[i][2],
                         adress: events[i][4],
                         email: events[i][8],
                         free: empty
                    }
                    this.markers.push(marker);
                    
                    
                    
                }
                             

            }

            
                
            
        },



        mounted() {
            // add the map to a data object
            this.$refs.mapRef.$mapPromise.then(map => this.map = map);
        },



        methods: {
            info: function(marker,idx){
                this.infoWindowPos = marker.position;
                this.infoOptions.content = marker.infoText;

                //check if its the same marker that was selected if yes toggle
                if (this.currentMidx == idx) {
                    this.infoWinOpen = !this.infoWinOpen;
                    }
                //if different marker set infowindow to open and reset current marker index
                else {
                    this.infoWinOpen = true;
                    this.currentMidx = idx;

            }

            this.$emit('showInfo',marker);
            
            
          
                        
            },
            handleDrag() {
                // get center and zoom level, store in localstorage
                let center = {
                    lat: this.map.getCenter().lat(),
                    lng: this.map.getCenter().lng()
                };
                let zoom = this.map.getZoom();
                localStorage.center = JSON.stringify(center);
                localStorage.zoom = zoom;
               
            },

        },



        computed: {
            mapCoordinates() {
                if(!this.map) {
                    return {
                        lat: 0,
                        lng: 0
                    };
                }
                return {
                    lat: this.map.getCenter().lat().toFixed(4),
                    lng: this.map.getCenter().lng().toFixed(4)
                }
            }
        },
        
    }
</script>

<style scoped>
    
</style>