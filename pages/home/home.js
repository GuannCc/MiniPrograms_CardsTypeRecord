// pages/demo/demo.js
Page({

  data: {
    bgColor: '#e6eaec',
    
    kuohao: '{{ }}',
    kuohao1: '{{...XXX}}',
    
    infoNum: '12',
    message: '卡片提醒',
    showText: false,
    a: 1,
    b: 6,
    c: 4,
    condition: true,
    name: ' 小程序',
    object: { key: 25 },
    array: ['arr1', 'arr2'],

    staffA: {firstName: 'Hulk', lastName: 'Hu'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Gideon', lastName: 'Lin'},

    inputValue: '',

    show: false,
    value: 2.5,

    itemTitle1: '小程序',
    itemTitle2: 'Harmony 开发',
    itemTitle3: '日记本',
  },

  bindKeyInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },

  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },

  onChange(e) {
    this.setData({
      value: e.detail
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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