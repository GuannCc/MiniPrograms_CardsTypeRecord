// pages/incard/incard.js
Page({

  data: {
    active: 0,
    value: 2.5,
    imgList: [
      "https://img.yzcdn.cn/vant/cat.jpeg",
      "https://img.yzcdn.cn/vant/cat.jpeg",
      "https://img.yzcdn.cn/vant/cat.jpeg",
      "https://img.yzcdn.cn/vant/cat.jpeg",
      "https://img.yzcdn.cn/vant/cat.jpeg",
      "https://img.yzcdn.cn/vant/cat.jpeg"
    ],
    collect_icon: "label-o",
    collect_color:"#000",
    collect_button_color: "#e6eaec",
    is_collect: false,
    show_img: true,
  },
  
  preview(event) {
    console.log(event.currentTarget.dataset.src)
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl,
      urls: this.data.imgList
    })
  },
  
  setActive(event) {
    console.log('setActive event:', event);
    const {name} = event.currentTarget.dataset;
    this.setData({
      active: parseInt(name)
    });
    console.log('Selected tab name:', name);
  },
  
  onClickCollect() {
    this.setData({
      collect_icon: this.data.collect_icon === 'label-o' ? 'label' : 'label-o',
      collect_color: this.data.collect_color === '#000' ? '#06b259' : '#000',
      collect_button_color: this.data.collect_button_color === '#e6eaec' ? '#e0fceb' : '#e6eaec',
      is_collect: !this.data.is_collect
    })
  },
  
  onClickShare() {
  },

  onClickNext(event) {
    event.stopPropagation();
    const currentActive = this.data.active;
    const maxTabs = 2;

    if (currentActive < maxTabs) {
      this.setData({
        active: currentActive + 1
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})