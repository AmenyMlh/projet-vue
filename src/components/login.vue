<template>
    <v-app>
    <v-app-bar app dark color="purple lighten-1">
        <v-tool-bar-title>Login</v-tool-bar-title>
        <v-spacer></v-spacer>
        <v-btn text rounded>Home</v-btn>
        <v-btn text rounded>About us</v-btn>
        <v-btn text rounded>Contact us</v-btn>
    </v-app-bar>
    <v-content>
        <v-card width="500" class="mx-auto mt-9">
            <v-card-text>
                <v-text-field label="username" prepend-icon="mdi-account-circle" />
                <v-text-field label="password" 
                :type="showpassword ? 'text':'password'"
                 prepend-icon="mdi-lock"
                 :append-icon="showpassword ? 'mdi-eye':'mdi-eye-off'"
                 @click:append="showpassword=!showpassword"/>
            </v-card-text>
        <v-card-actions>
          <v-btn color="success">Login</v-btn>
          <v-btn color="blue">Sign up</v-btn>
        </v-card-actions>
        </v-card>
    </v-content>
</v-app>
</template>
<script>

export default {
   name:'login',

data:()=>{
        return{
          showpassword:false,

        }
    }
        
    }
</script>
