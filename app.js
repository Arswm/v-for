const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        {
          title: "Batman",
          author: "bob kayn",
          img: "assets/batman.jpg",
          isFav: false,
        },
        {
          title: "Spider Man",
          author: "Stan Lee",
          img: "assets/spiderman.jpg",
          isFav: false,
        },
        {
          title: "Superman",
          author: "Wayne Borin",
          img: "assets/superman.jpg",
          isFav: false,
        },
        {
          title: "Venom",
          author: "Stan Lee",
          img: "assets/Venom.jpg",
          isFav: false,
        },
        {
          title: "Iron man",
          author: "Stan Lee",
          img: "assets/Ironman.jpg",
          isFav: false,
        },
        {
          title: "Hulk",
          author: "Stan Lee and artist Jack Kirby",
          img: "assets/Hulk.jpg",
          isFav: false,
        },
      ],
    };
  },
  methods: {
    showBook() {
      this.showBooks = !this.showBooks;
    },
    isFav(book) {
      book.isFav = !book.isFav;
    },
  },
});

app.mount("#app");
