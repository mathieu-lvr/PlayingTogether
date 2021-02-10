<template>
    <div id="usergame">
        <article v-for="(event,idx) in events" v-bind:key="idx" >
            <article class="usergame">
                <div class="container2">
                    <div style="margin-left:80px;margin-right:80px">
                        <p><span><b>Name :</b></span> {{ event.name}}</p>
                        <p><span><b>Sport : </b></span>{{ event.sport}}</p>
                        <p><span><b>Date : </b></span>{{ event.date}}</p>
                        <p><span><b>Hour : </b></span>{{ event.hour}}</p>
                        <p><span><b>Address : </b></span>{{ event.place}}</p>
                        <p><span><b>Number of player : </b></span>{{ event.nbPlayer}}</p>
                        <p><span><b>Number of maximum player :</b></span> {{ event.nbPlayerMax}}</p>
                        <p><span><b>Description : </b></span>{{ event.description}}</p>
                    </div>
                    <div  class="button-unsubscribe">
                        <button id="unregister" v-on:click="unsubscribe(event.name)">Unsubscribe</button>
                    </div>
                </div>
            </article>
        </article>
    </div>
</template>


<script>
export default {
    data(){
        return{
            events:[],
        }
    },

    created(){
        
        var customerData = null;
        var tampon = JSON.parse(localStorage.getItem('Customer'));
        for (let i=0; i<tampon.length;i++){
            if(tampon[i][2]==sessionStorage.getItem('user')){
                customerData = tampon[i];
                break
            }
        }


        var customerEvents = customerData[4]
        if(customerEvents!==""){
            var customerEventsInfo=[];
            var allEvents = JSON.parse(localStorage.getItem('Event'));
            for (let i = 0 ; i<customerEvents.length; i++){
                var evName = customerEvents[i];
                for(let j=0;j<allEvents.length;j++){
                    if(allEvents[j][0]==evName){
                        customerEventsInfo.push(allEvents[j]);
                        break
                    }
                }
            }
            for(let i=0;i<customerEventsInfo.length;i++){
                var myEvent = customerEventsInfo[i];
                const event = {
                    name : myEvent[0],
                    sport: myEvent[2],
                    date : myEvent[7],
                    hour : myEvent[8],
                    place : myEvent[4],
                    nbPlayer: myEvent[5],
                    nbPlayerMax:myEvent[3],
                    description:myEvent[6]
                }
                this.events.push(event);
            }  
            

            //Check if the user is hosting any game
            var customerEmail = sessionStorage.getItem("user");
            var Event = JSON.parse(localStorage.getItem("Event"));
            for(let j=0;j<Event.length;j++){
                if(Event[j][8]==customerEmail){
                    var IEvent = Event[j];
                    const event = {
                        name : IEvent[0],
                        sport: IEvent[2],
                        date : IEvent[7],
                        place : IEvent[4],
                        nbPlayer: IEvent[5],
                        nbPlayerMax:IEvent[3],
                        description:IEvent[6]
                }
                this.events.push(event);


                }
            }


           



        }
        else{
            alert('You are not currently registered to any games !')
        }
    },

    methods:{
        unsubscribe(name){
            var user = sessionStorage.getItem('user');
            var allUsers = JSON.parse(localStorage.getItem('Customer'));
            var pos = 0;
            for (let i=0;i<allUsers.length;i++){
                if(allUsers[i][2]==user){
                    pos = i;
                    var eventsUser = allUsers[i][4]
                }
            }
            if(eventsUser!==null){
                var check = true;
                for(let i=0;i<eventsUser.length;i++){
                    if(name==eventsUser[i]){
                        check = false;
                        var posBis =i;
                        break
                    }
                }
                if(check){
                    alert('You are the creator of this event you cannot unsubscribe!')
                }
                else{
                    var newEvents=[]
                    for(let i=0;i<allUsers[pos][4].length;i++){
                        if(i!==posBis){
                            newEvents.push(allUsers[pos][4][i])
                        }
                    }
                    allUsers[pos][4] = newEvents;
                    localStorage.setItem('Customer',JSON.stringify(allUsers));


                    var updateEvents = JSON.parse(localStorage.getItem('Event'));
                    for(let i=0;i<updateEvents.length;i++){
                        if(name == updateEvents[i][0]){
                            updateEvents[i][5] = updateEvents[i][5] - 1;
                            break
                        }
                    }
                    localStorage.setItem('Event',JSON.stringify(updateEvents));
                    alert('You are now unsubscribed of this event ! Please find other events below !');
                    this.$router.push({ name: 'Game' });
                }
            }
            else{
                alert('You are the creator of this event you cannot unsubscribe!')
            }
        }
    }
}
</script>

<style>

.usergame{
    display:inline-block;
    text-align : left;
    position: relative;
    border: 2px solid black;
    margin-bottom: 5px;
    background-color: rgb(200, 243, 200);
    width: auto;
    height: auto;
}

.container2{
    display: flex;
    align-items: center;
    justify-content: center
}

.button-unsubscribe{
    margin-left:80px;
    margin-right: 80px;
}


</style>