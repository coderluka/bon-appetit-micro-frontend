const eventBus = new EventBus();
new Vue({
  el: "#search",
  data: {
    results: [],
    products: ["Apple", "Banana", "Orange"]
  },
  methods: {
    filter: function(searchObj) {
      this.results = this.products.filter(o =>
          Object.keys(o).some(k => o[k].toLowerCase().includes(searchObj.toLowerCase())));
      console.log(this.results);
    }
    
/*    function(searchObj) {
      this.results = this.products.filter(name => name.includes(searchObj))

      console.log(this.results);
    }
    */
  },
  beforeMount() {
      eventBus.subscribe("filterToProduct", this.filter);
  },
  beforeDestroy() {
    eventBus.unsubscribe("filterToProduct", this.filter);
  }
});

const addTofilter = e => eventBus.emmit("productTofilter", e.target.value);
document
  .querySelectorAll("button")
  .forEach(button => button.addEventListener("click", addTofilter));