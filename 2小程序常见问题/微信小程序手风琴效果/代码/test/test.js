Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
        
            {
                title: '标题一',
                list:[
                    {
                        name: '项目一',
                        list: [
                            { name: '子项目1' },
                            { name: '子项目2' },
                            { name: '子项目3' }
                        ]
                    },
                    {
                        name: '项目二',
                        list: [
                            { name: '子项目1' },
                            { name: '子项目2' },
                            { name: '子项目3' }
                        ]
                    },
                    {
                        name: '项目三',
                        list: [
                            { name: '子项目1' },
                            { name: '子项目2' },
                            { name: '子项目3' }
                        ]
                    },
                    {
                        name: '项目四',
                        list: [
                            { name: '子项目1' },
                            { name: '子项目2' },
                            { name: '子项目3' }
                        ]
                    }
                ]
            },
            {
                title: '标题二',
                list: [
                    {
                        name: '项目一',
                        list: [
                            { name: '子项目1' },
                            { name: '子项目2' },
                            { name: '子项目3' }
                        ]
                    },
                    {
                        name: '项目二',
                        list: [
                            { name: '子项目1' },
                            { name: '子项目2' },
                            { name: '子项目3' }
                        ]
                    },
                    {
                        name: '项目三',
                        list: [
                            { name: '子项目1' },
                            { name: '子项目2' },
                            { name: '子项目3' }
                        ]
                    }
                ]
            }
        ],
      hiddenArry: []  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //初始化显示隐藏数组
      this.hideArry();
  },
    //  下拉的显示隐藏数组
    hideArry:function(){
        var that = this;
        var arry = this.data.hiddenArry;
        for (let b = 0; b < 50; b++) {
            arry.push([]);
            for(let i=0;i<50;i++){
                arry[b].push(true);
            }
        }
        this.setData({
            hiddenArry: arry
        })
    },
    //  点击下拉
    itemTap:function(e){
        var that = this;
        var arry = this.data.hiddenArry;
        var index = e.currentTarget.dataset.index;
        var indextwo = e.currentTarget.dataset.indextwo;
        // 1、先把所以隐藏
        var arry = this.data.hiddenArry;
        for (let b = 0; b < 50; b++) {
            for(let i=0;i<50;i++){
                arry[b][i] = true
            }
        }
        this.setData({
            hiddenArry: arry
        })

        // 2、显示点击的那一项
     
        that.data.hiddenArry[index][indextwo] = !that.data.hiddenArry[index][indextwo]
        that.setData({
            hiddenArry: that.data.hiddenArry
        }) 
  
        
    },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})