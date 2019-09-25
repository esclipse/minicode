// components/Header/Header.js
Component({
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {
    name: "1"
  },

  /**
   * Component methods
   */
  methods: {
    handleClick: function(e){
      this.setData({
        name: e.target.dataset.name
      });
      this.triggerEvent("search", {
        name: this.data.name
      })
    }
  }
})
