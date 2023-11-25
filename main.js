const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "açıklama",
      image: "./assets/images/socks_green.jpg",
      url: "https://images.unsplash.com/photo-1585499583264-491df5142e83?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29ja3N8ZW58MHx8MHx8fDA%3D",
      inStock: true,
      inventory: 100,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],

      variants: [
        { id: 2234, color: "green" },
        { id: 2235, color: "blue" },
      ],
      sizes: ["xs", "s", "m", "l", "xl"],
    };
  },
});
