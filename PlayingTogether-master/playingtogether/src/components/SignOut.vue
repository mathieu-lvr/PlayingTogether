<template>
    <div>
        <button v-on:click= "signout()">LOG OUT</button>
    </div>
</template>


<script>
export default {
    methods:{
        signout(){
            sessionStorage.removeItem("check");
            sessionStorage.removeItem('user');
            alert('You are now logged out!');
        }
    }
}
</script>