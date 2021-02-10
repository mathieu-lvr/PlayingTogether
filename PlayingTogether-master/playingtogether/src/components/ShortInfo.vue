<template>
    <div id="Information">
    <h1>{{marker.name}}</h1>


    <div id="info">
        <li><span><b>Sport : </b></span> {{marker.sport}} </li>
        <li><span><b>Free Places:</b></span> {{marker.free}} </li>
        
    </div>

    
    <button v-on:click="join()" id="join">Join the Game</button>
    </div>


</template>

<script>
export default {
    name : 'ShortInfo',
    props:["marker"],


    methods:{

        join(){



            var userEmail = sessionStorage.getItem("user");

            if(this.marker.email==userEmail){
                alert('You are already registered for this event!');
                return
            }

            var customers = JSON.parse(localStorage.getItem("Customer"));

            for(let i=0;i<customers.length;i++){
                if(customers[i][2]==userEmail){
                    var userEvents = customers[i][4]
                    if(userEvents!==""){
                        for(let j=0;j<userEvents.length;j++){
                            if(userEvents[j]==this.marker.name){
                                alert('You are already registered for this event!');
                                return
                            }
                        }
                    }
                    else{
                        break
                    }
                }
            }
            
            for(let i = 0; i < customers.length; i++ ){

                if(customers[i][2] == userEmail){
                    customers[i][4].push(this.marker.name);
                    break;
                }

            }
            localStorage.setItem("Customer",JSON.stringify(customers));

            var events = JSON.parse(localStorage.getItem('Event'));
            for(let i=0;i<events.length;i++){
                if(events[i][0]==this.marker.name){
                    events[i][5]+=1
                }
            }
            localStorage.setItem('Event',JSON.stringify(events));


            this.$router.push({name:"Game"});

        }

    }
    
}
</script>

<style >
    #Information{
    text-align : center;
    border: 2px solid black;
    
    background-color: rgb(200, 243, 200);
    width: auto;
    height: auto;
    display :inline-block;
    align-items: center;
    justify-content: center
}

    #join{
        margin: 25px;
    }

    #info{
        
       
    }
</style>