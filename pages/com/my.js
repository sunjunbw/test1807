// pages/com/my.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      a:{
        type:String
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    msg:'world'
  },

  /**
   * 组件的方法列表
   */
  methods: {
      tap(){
         console.log("tap event"+this.properties.a)
         this.triggerEvent("child",{'c':'cccccccc'})
      }
  }
})
