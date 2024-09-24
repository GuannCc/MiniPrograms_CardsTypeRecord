// components/tabCard/tabCard.js
Component({

  data: {
    name: [0,1,2,3,4],
    title: ["基本计算","模板","Button","事件","时间"],
    show_img: true,
    imgList: [
      "https://img.yzcdn.cn/vant/cat.jpeg",
      "https://img.yzcdn.cn/vant/cat.jpeg",
      "https://img.yzcdn.cn/vant/cat.jpeg",
      "https://img.yzcdn.cn/vant/cat.jpeg",
      "https://img.yzcdn.cn/vant/cat.jpeg",
      "https://img.yzcdn.cn/vant/cat.jpeg"
    ],
    text: ["123","123","123","123","123"],
    is_collect: false,
    collect_icon: "label-o",
    collect_color:"#000",
    collect_button_color: "#e6eaec",
  },
  
  methods: {
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
  
  }
})