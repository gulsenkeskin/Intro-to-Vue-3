const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      description: "açıklama",
      image: "./assets/images/socks_green.jpg",
      url: "https://images.unsplash.com/photo-1585499583264-491df5142e83?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29ja3N8ZW58MHx8MHx8fDA%3D",
      inStock: true,
      inventory: 100,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
      sizes: ["xs", "s", "m", "l", "xl"],
      cart: 0,
      selectedVariant: 0,
      onSale: true,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    decraseToCart() {
      this.cart -= 1;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
  },
});
