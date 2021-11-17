
const products = [
    { id: 1, description: "Brownie", price: 0.5, img: './assets/img/brownie.JPG'},
    { id: 2, description: 'Créme Fraiche', price: 1, img: './assets/img/créme.JPG'},
    { id: 3, description: 'Yaourt Délice', price: 0.4, img: './assets/img/delice.JPG'},
    { id: 4, description: 'Escalope Poulet', price: 14, img: './assets/img/escalope-poulet.JPG'},
    { id: 5, description: 'Harissa Sicam', price: 2.5, img: './assets/img/harissa.JPG'},
    { id: 6, description: 'Lait Délice', price: 1.250, img: './assets/img/lait.JPG'},
    { id: 7, description: 'Loopi', price: 0.9, img: './assets/img/loopi.JPG'},
    { id: 8, description: 'Biscuit Major', price: 0.8, img: './assets/img/major.JPG'},
    { id: 9, description: 'Mayonnaise Jadida', price: 3.5, img: './assets/img/mayo.JPG'},
    { id: 10, description: 'Fromage Président', price: 8, img: './assets/img/president.JPG'},
    { id: 11, description: 'Biscuit Saida', price: 1, img: './assets/img/saida.JPG'},
    { id: 12, description: 'Tomate Sicam', price: 3, img: './assets/img/tomate.JPG'},
  ];

const Home = {
    template:'#home',
    name:"Home",
    data: ()=>{
        return {
            products,
            searchKey:'',
            liked:[],
            cart:[],
        }
    },
    computed: {
     filtredlist(){
         return this.products.filter((prod) => {
             return prod.description.toLowerCase().includes(this.searchKey.toLowerCase());
          })
       },
     totalprod(){
         let total=0;
         for(let i in this.cart){
             total=total+(this.cart[i].quantity * this.cart[i].price)
         }
         return total;
     }
    },
    methods: {
        addtocart(prod){
            //check if exist in array
            for(let i=0; i<this.cart.length ;i++){
                if(this.cart[i].id === prod.id){
                  return this.cart[i].quantity++
                }
            }
          this.cart.push({
              id: prod.id,
              img: prod.img,
              description: prod.description,
              price: prod.price,
              quantity:1
          })
        },
        plusone(prod){
          return prod.quantity++;
        },
        removeone(prod,id){
            if(prod.quantity==1){
                this.removeprod(id);
            }else{
            prod.quantity=prod.quantity-1;
            }
          },
          removeprod(id){
              this.$delete(this.cart, id);
          }
    },
}

const Hearts = {
    template:"<h1>Hearts</h1>",
    name:"Hearts"
}
const Shopping = {
    template:"<h1>Shopping</h1>",
    name:"Shopping"
}

const vue =new Vue({
   router
   
}).$mount('#app');