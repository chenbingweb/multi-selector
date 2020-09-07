// components/selectArea/selectArea.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cityList: {
      type: Array,
      value: [
       
      ],
      observer: function (nVal, oldVal) {
        if (!nVal || nVal.length == 0) return
        let initArr = []
        let arr = 0;
        let list =[];
        function _iter(_nVal){
          list.push({
            name: _nVal.name,
           
          })
          initArr.push(0)
          arr++;
          if (_nVal.child&&_nVal.child.length){
            _iter(_nVal.child[0])
          }
        }
        console.log(list)
        _iter(nVal[0]);
      
        let listItem =[
        
        ];
        // this.list=[]
        nVal.forEach(item=>{
          // let obj = {...item, name: item.name, id: item.id }
          let obj = { ...item }
          delete obj.child
          listItem.push(obj)
        })
        // this.list = [
        //   listItem,
        // ]
        // for (let i = 0; i < arr-1; i++) {
        //   this.list.push([{
        //     name:'请选择'
        //   }])
        // }
        // this.total =arr;
        // console.log(this.list)
        this.setData({
          ['list[0]']: listItem,
          value: initArr
        },()=>{
          this._fun(this.data.value)()
        })
        
      }

    },
    // shows: {
    //   type: Boolean,
    //   value: true,
    //   observer: function (newval, old) {
    //     this.setData({
    //       show: true
    //     })
    //   }
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
    shows:false,
    list:[
      // [{ name: '请选择' },{name:'北京',id:1}],
      // [{ name: '请选择' }, { name: '北京',child:1, id:2}],
      // [{ name: '请选择' }, { name: '北京' ,id:2}]
    ],
    value:[0]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectCity(){
      let { list ,value} = this.data;
      var myEventOption = {
        bubbles: false,
        composed: false,
        capturePhase: false
      } // 触发事件的选项
      let arr = []
      console.log(list)
      value.forEach((item,index) => {
        let obj = {
          ...list[index][item],
          // name: list[index][item].name,
          // level: list[index][item].level,
          // id: list[index][item].id,

        }
        delete obj.child
        arr.push(obj)
       })
     
      console.log(arr)
      this.triggerEvent('citySelect', arr, myEventOption)
      this.setData({
        shows:false
      })
    },
    //隐藏
    hiddenPicker: function () {
      console.log('close')
      this.setData({
        shows: false
      })
      var myEventOption = {
        bubbles: false,
        composed: false,
        capturePhase: false
      } // 触发事件的选项
      this.triggerEvent('cancelCity', {}, myEventOption)
    },
    //show
    showPicker(){
      this.setData({
        shows:true
      })
    },
    _diff(arr1,arr2){
      let _index = [];
      let copy = [...arr1]
      //新
      arr1.forEach((item,index)=>{
        //旧
        if (item !== arr2[index])
        {
          copy.forEach((child, _index)=>{
            if (index < _index)
            {
              copy[_index]=0;
            }
          })
        }
      })
      return copy
    },
    bindChange(e){
      console.log(e)
      //省 市 区 镇 村
      let value = e.detail.value;
      let { value: val } = this.data;
      console.log(this._diff(value, val))
      // if()
      this.setData({
        value: this._diff(value, val)
      },()=>{
       
        this._fun(this.data.value)()
      })
      
     
      return


      if (value.length == 5) {
        this.setData({
          [`list[1]`]: this.properties.cityList[value[0]].child,
          [`list[2]`]: this.properties.cityList[value[0]].child[value[1]].child
        })
      }
      if (value.length == 4) {
        this.setData({
          [`list[1]`]: this.properties.cityList[value[0]].child,
          [`list[2]`]: this.properties.cityList[value[0]].child[value[1]].child,
          [`list[3]`]: this.properties.cityList[value[0]].child[value[1]].child[value[2]].child
        })
      }
      if (value.length == 3) {
        this.setData({
          [`list[1]`]: this.properties.cityList[value[0]].child,
          [`list[2]`]: this.properties.cityList[value[0]].child[value[1]].child
        })
      }
      if(value.length==2)
      {
        this.setData({
          [`list[1]`]: this.properties.cityList[value[0]].child,
          [`list[2]`]: this.properties.cityList[value[0]].child[value[1]].child
        })
      }
      if (value.length == 1) {
        this.setData({
          [`list[1]`]: this.properties.cityList[value[0]].child,
          [`list[2]`]: this.properties.cityList[value[0]].child[value[1]].child
        })
      }
      
     
     

     
      
      console.log(value)
    },
    _fun(value){
      let i = 1;
      let that = this;
      return function inner(){
        if(i>value.length)
        {
          return
        }
        that._getNextVal(value, i,(arr)=>{
          if(arr && arr.length)
          {
            that.setData({
              [`list[${i}]`]: arr
            }, () => {
              i += 1;
              inner()

            })
          }
        
        })

        // that.setData({
        //   [`list[${i}]`]: that._getNextVal(value, i)
        // }, () => {
        //   i += 1;
        //   inner()

        // })
      }
      
    },
    _getNextVal(value,i,cb){

      console.log(i)
      this._iter2(value, i)(this.properties.cityList, cb)
      // console.log(this.properties.cityList)
  //    this._iter2(value, i)(this.properties.cityList)
     // return this._iter2(value, i)(this.properties.cityList,cb)
    return
      if(i==1)
      {
        return this.properties.cityList[value[0]].child
      }
      if (i == 2) {
        return this.properties.cityList[value[0]].child[value[1]].child
      }
      if (i == 3) {
        return this.properties.cityList[value[0]].child[value[1]].child[value[2]].child
      }
      if (i == 4) {
        return this.properties.cityList[value[0]].child[value[1]].child[value[2]].child[value[3]].child
      }
      if (i == 5) {
        return this.properties.cityList[value[0]].child[value[1]].child[value[2]].child[value[3]].child[value[4]].child
      }
      
     
    },
    _iter2(value, i){
     
        let that = this;
        let index = 0;
        let arr = []
        return function inner(obj,cb){
            if(index>=i)
            {
              console.log('******')
              console.log(arr)
              cb && cb(arr)
              return arr
            }

            arr = obj[value[index]].child;
          
            index+=1;
            inner(arr, cb)
           
           
            
        }
    }
  }
})
