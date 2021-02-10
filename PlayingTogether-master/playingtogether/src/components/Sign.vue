<template>
    <div>
        <form>
                <input type="email" id="email-signin" placeholder="michel.durant@exemple.com" required>
                <button v-on:click="signin()" id="signinButton">Sign In</button>
        </form>
    </div>
</template>

<script>

     
    export default{
        methods: {
            signin(){
                var mail = document.querySelector('#email-signin').value;
                var tampon = JSON.parse(localStorage.getItem('Customer'));
                var test = true;
                if(tampon !== null){
                    for(var i=0;i<tampon.length;i++){
                        if(mail == tampon[i][2]){
                            sessionStorage.setItem('user',mail);
                            test = false;
                            document.querySelector('#email-signin').value = "";
                            this.$router.push({name : 'Join'});
                            alert('You are now logged in !') 
                            break
                        }
                    }
                }
                if(test){
                    if(sessionStorage.getItem('user')!==null){
                        sessionStorage.removeItem('user');
                    }
                    this.$router.push({ name: 'Account' });
                    alert('You are not yet registered, please do so in the ACCOUNT section !')
                }
            }
        }
    }
</script>