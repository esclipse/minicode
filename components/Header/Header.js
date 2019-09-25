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
      console.log(e.target.dataset.name,'iiii');
      this.setData({
        name: e.target.dataset.name
      })
    }
  }
})
