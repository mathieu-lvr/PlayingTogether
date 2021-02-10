<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/join">Join</router-link> |
      <router-link to="/Host">Host</router-link> |
      <router-link to="/Game">Game</router-link> |
      <router-link to="/Account">Account</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


.container{
    margin: 10px 50px;
}

input{
    width:50%;
    border: solid 1px black;
    padding:15px 10px;
    margin:5px;
}

button{
    width: 200px;
    padding:15px;
    margin-top:5px;
    border:solid 1px dodgerblue;
    border-radius: 33px;
    cursor:pointer;
    transition: all .38s case-in-out;
}

button:hover{
    background:dodgerblue;
    color:#fff;
}

body{
  background-color: lightgray;
}




</style>



