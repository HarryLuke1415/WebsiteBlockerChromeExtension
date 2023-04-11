// app.js

import Vue from 'vue'

const Home = { template: '<div>Home Page</div>' }
const About = { template: '<div>About Page</div>' }
const Contact = { template: '<div>Contact Page</div>' }

const app = Vue.createApp({
    data() {
        return {
            menuItems: [
                { title: 'Home', component: Home },
                { title: 'About', component: About },
                { title: 'Contact', component: Contact }
            ],
            selectedItem: 0
        }
    }
})

app.mount('#app')
