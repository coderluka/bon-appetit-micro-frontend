const eventBus = new EventBus();
new Vue({
  el: "#main",
  data: {
    items: []
  },
  methods: {
    add: function(product) {
      this.items.push(product);
    }
  },
  beforeMount() {
    eventBus.subscribe("productTofilter", this.add);
  },
  beforeDestroy() {
    eventBus.unsubscribe("productTofilter", this.add);
  }
});

const addToSearch = e => {console.log("LAMBDA"); eventBus.emmit("filterToProduct", e.target.value); }

document
  .querySelectorAll("searchForm")
  .forEach(e => document.getElementById("searchForm").addEventListener("submit", addToSearch));
  console.log("emmited filterToProduct");