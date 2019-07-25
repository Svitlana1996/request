
const urlAPI = 'https://jsonplaceholder.typicode.com';
Vue.component('users', {
    template:`
    <div>
    <button v-on:click="getUser">Get user</button>
    <list :userList="userList"></list>
    <list :userList="userList"></list>      
    </div>
    `,
    data: function(){
        return {
            userList: []
        }
    },
    methods: {
        getUser: function(){
            this.$http.get(`${urlAPI}/users`,{params:{_limit: 1}})
            
            .then(function(response) {
              console.log('res', response);
              this.userList = response.body;
            }, function(error){
              console.log('eror', error);
            })

        }
}        

});
Vue.component('list', {
    props: {
      userList: {
        type: Array
      }
            
     },
        
    template: `
    <ul v-for="(user, index) in userList">
    <li>User with id-number: {{user.id}}</li>
    <li>Name: {{user.username}}</li>
    <li>Email: {{user.email}}</li>
    <li>Telephone-number: {{user.phone}}</li>
    <li>Company: {{user.company.name}}</li>
    <li>Address: <span>{{user.address.city}}</span>, <span>{{user.address.street}}</span>, <span>{{user.address.suite}}</span></li>

</ul>
    `
})

var applic = new Vue ({
  el: '#applic',
  data: {
      title: "Http request",
   
      
  },
  methods: {
      getUser: function(){
        this.$http.get(`${urlAPI}/users`,{params:{_limit: 10}})
        .then(function(response) {
          console.log('res', response);
          this.userList = response.body;
        }, function(error){
          console.log('eror', error);
        })
    },
}

    
});

