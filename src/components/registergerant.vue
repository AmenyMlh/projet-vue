<template>
 <v-app>
     <v-app-bar app dark color="purple lighten-1">
        <v-tool-bar-title>Sign up</v-tool-bar-title>
        <v-spacer></v-spacer>
        </v-app-bar>
     <v-content >
      <v-card width="500" class="mx-auto mt-9">
    <v-card-text>
    <v-text-field  label="Username" prepend-icon="mdi-account-circle"/>
    <v-text-field label="Email" prepend-icon="mdi-email"/>
                <v-text-field label="password" 
                :type="showpassword ? 'text':'password'"
                 prepend-icon="mdi-lock"
                 :append-icon="showpassword ? 'mdi-eye':'mdi-eye-off'"
                 @click:append="showpassword=!showpassword"/>

                 <v-text-field label="password confirm" 
                :type="showpassword ? 'text':'password'"
                 prepend-icon="mdi-lock"
                 :append-icon="showpassword ? 'mdi-eye':'mdi-eye-off'"
                 @click:append="showpassword=!showpassword"/>
                 <v-text-field label="Magasin" prepend-icon="mdi-home"/>
                 <v-text-field label="Adresse" prepend-icon="mdi-location-enter"/>
            </v-card-text>
        <v-card-actions>
          <v-btn color="success">Sign up</v-btn>
          </v-card-actions>
    </v-card>
     </v-content>
 </v-app>
</template>
<script>
export default{
    name:'registergerant',
    data(){
        return{
          showpassword:false,

        }
    }
}
</script>
