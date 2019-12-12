//form.js
const app = getApp()

Page({

   /**
   * 页面的初始数据
   */
   data: {
      idisabled: false,
      title: "某调查问卷",
      begin_text: "注：打*为必填项",
      gender: "*你的性别",
      genitems: [{ name: "female", value: "女", checked: true }, { name: "male", value: "男" }],
      age: "*出生日期",
      date: "1960-01-01",
      regi: "*来自哪里",
      region: ["北京市", "北京市", "东城区"],
      customItem: "全部",
      key_text: "key",
      quesa_text: "*aaaaa",
      quesb_text: "*bbbbb(最多选3项）",
      quesc_text: "*ccccc",
      quesd_text: "ddddd",
      quese_text: "eeeee",
      quesa_items: [{ name: "a", value: "True" }, { name: "b", value: "False" }],
      quesb_items: [{ name: "aa", value: "A" }, { name: "bb", value: "B" }, { name: "cc", value: "C" }, { name: "dd", value: "D" }, { name: "ee", value: "E" }, { name: "ff", value: "F" }],
      quesd_items: [{ name: "aaa", value: "Aa", checked: false }, { name: "bbb", value: "Bb", checked: false }],
      quesa_must: '',
      quesb_must: '',
      quesc_must: '',
      inputlong: '0',
      dchecked: '',
      src: './close.PNG',
      pass: true,
   },

  /**

   * 生命周期函数--监听页面加载

   */
   onLoad: function () {
      wx.request({
         url: '../../form.json',
         success: function (res) {
            this.setData({
               list_data: res.data.nam,
            })
         console.log(list_data)
         }
      })
   },

   radioChange: function (e) {
      console.log(e.detail.value)
   },

   dateChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
         date: e.detail.value
      })
   },

   bindRegionChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
         region: e.detail.value
      })
   },

   change_state: function(e) {
      if (this.data.pass == true) {
         this.setData({
            pass: false,
            src: './open.PNG'
         })
      }
      else {
         this.setData({
            pass: true,
            src: './close.PNG'
         })
      }
   },

   quesaChange: function (e) {
      var value = '2';
      this.setData({
         quesa_must: value
      })
   },

   quesbChange: function (e) {
      var value = '1';
      var new_items = [
         { name: 'aa', value: 'A' },
         { name: 'bb', value: 'B' },
         { name: 'cc', value: 'C' },
         { name: 'dd', value: 'D' },
         { name: 'ee', value: 'E' },
         { name: 'ff', value: 'F' },
      ];
      if (e.detail.value.length == 3) {
         for (let i = 0; i < new_items.length; i++) {
            new_items[i]['isdisabled'] = true;
            for (let t = 0; t < e.detail.value.length; t++) {
               if (new_items[i]['name'] == e.detail.value[t]) {
                  new_items[i]['isdisabled'] = false;
               };
            };
         };
      };
      if (e.detail.value.length < 3) {
         for ( let i=0; i < e.detail.value.length; i++) {
            new_items[i]['isdisabled'] = false;
         };
      };
      if (e.detail.value.length == 0) {
         value = ''
      }
      this.setData({
         quesb_items: new_items,
         quesb_must: value
      })
      console.log('checkbox发生change事件，携带value值为：', e.detail.value)
   },

   quescInput: function (e) {
      var value =e.detail.value
      this.setData({
         quesc_must: value
      })
   },

   quesdTap: function (e) {
      var old = this.data.dchecked;
      var new_items = this.data.quesd_items;
      for (let i = 0; i < new_items.length; i++) {
         if (new_items[i]['name'] == old) {
            for (let j = 0; j < new_items.length; j++) {
               if (new_items[j]['checked'] && j != i) {
                  new_items[j]['checked'] = false;
               }
            }
         }
      };
      this.setData({
         quesd_items: new_items
      })
   },

   quesdChange: function (e) {
      this.setData({
         dchecked: e.detail.value
      })
      console.log(e.detail.value)
   },

   inputLength: function(e) {
      var long = e.detail.value.length
      this.setData({
         inputlong: long
      })
   },

   formSubmit: function (e) {
      if (this.data.quesa_must == '' || this.data.quesb_must == '' || this.data.quesc_must == '') {
         wx:wx.showModal({
            title: '提交失败',
            content: '请检查问卷是否完成',
            showCancel: false,
         })
      }
      else {
         wx:wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 2000,
            mask: true,
         }),
         setTimeout(function(){
            wx: wx.navigateTo({
               url: '../finish/finish',
               fail: function () {
                  console.info("跳转失败")
               },
            })
         },1999)
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
      }
   },
   
   formReset: function () {
      var new_genitems = [
         { name: 'female', value: '女', checked: true },
         { name: 'male', value: '男' },
      ];
      new_genitems[0]['checked'] = true;
      this.setData({
         genitems: new_genitems
      })
      console.log('form发生了reset事件')
   },

   /**
   * 用户点击右上角分享
   */
   onShareAppMessage: function () {
      
   }
})