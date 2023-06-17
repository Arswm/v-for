const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: 'Batman', author: 'bob kayn',img:'assets/batman.jpg' },
        { title: 'Spider Man', author: 'Stan Lee', img:'assets/spiderman.jpg' },
        { title: 'Superman', author: 'Wayne Borin', img:'assets/superman.jpg' }
      ],
      // url: 'https://en-gb.facebook.com/'
    }
  }
})

app.mount('#app')