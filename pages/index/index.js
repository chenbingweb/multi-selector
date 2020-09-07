
let _index_1 = [
  {
    name: '请选择',

  },
  {
    name: '请选择2',

  },
]
let _index_2 = [
  {
    name: '请选择',
    child: [
      {
        name: '请选择',
      }
    ]
  },
  {
    name: '请选择2',
    child: [
      {
        name: '请选择3',
      }
    ]
  },
]
let _index_3 = [
  {
    name: '请选择',
    child: [
      {
        name: '请选择',
        child: [
          {
            name: '请选择',
          }
        ]
      }
    ]
  },
  {
    name: '张三',
    id: 1,
    index: 'city',
    child: [
      {
        name: '王五',
        index: 'city_1',
        id: 2,
        parent: 1,
        child: [
          {
            name: '小二',
            id: 3,
            parent: 2,
            index: 'city_2',
          },

        ]
      },
      {
        name: '王五2',
        index: 'city_1',
        id: 2,
        parent: 1,
        child: [
          {
            name: '小二2',
            id: 3,
            parent: 2,
            index: 'city_2',
          },
          {
            name: '小二222',
            id: 3,
            parent: 2,
            index: 'city_2',
          }
        ]
      }
    ]
  }
]
let _index_4 = [
  {
    name: '请选择',
    child: [
      {
        name: '请选择',
        child: [
          {
            name: '请选择',
            child: [
              {
                name: '请选择'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: '请选择1',
    child: [
      {
        name: '请选择2',
        child: [
          {
            name: '请选择3',
            child: [
              {
                name: '请选择3'
              },
              {
                name: '请选择3_1'
              }
            ]
          }
        ]
      }
    ]
  },
]
let _index_5 = [
  {
    name: '请选择',
    child: [
      {
        name: '请选择',
        child: [
          {
            name: '请选择',
            child: [
              {
                name: '请选择',
                child:[
                    {name:'请选择'}
                  ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: '请选择1',
    child: [
      {
        name: '请选择2',
        child: [
          {
            name: '请选择3',
            child: [
              {
                name: '请选择4',
                child: [
                  { name: '请选择5' },
                  { name: '请选择5-1' }
                ]
              },
              {
                name: '请选择4_1',
                child: [
                  { name: '请选择5_1' },
                  { name: '请选择5-1_1' }
                ]
              }
            ]
          }
        ]
      },
      {
        name: '请选择2',
        child: [
          {
            name: '请选择3',
            child: [
              {
                name: '请选择4',
                child: [
                  { name: '请选择5' },
                  { name: '请选择5-1' }
                ]
              },
              {
                name: '请选择4_1',
                child: [
                  { name: '请选择5_1' },
                  { name: '请选择5-1_1' }
                ]
              }
            ]
          },
          {
            name: '请选择3',
            child: [
              {
                name: '请选择4',
                child: [
                  { name: '请选择5' },
                  { name: '请选择5-1' }
                ]
              },
              {
                name: '请选择4_1',
                child: [
                  { name: '请选择5_1' },
                  { name: '请选择5-1_1' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
]
Page({
  cityList:[],
  shows:false,
  onLoad(){
    // this.setData({
    //   cityList:_index_4
    // })
    this.selectareacom = this.selectComponent('#selectarea');
    
  },
  onOpen({currentTarget:{dataset:{l}}}){
    console.log(l)
    this.setData({
      cityList:[],
      shows:false,
    },()=>{
      if(l==5)
      {
        this.setData({
          shows:true,
          cityList:_index_5
        },()=>{
          this.selectareacom = this.selectComponent('#selectarea');
          this.selectareacom.showPicker()
        })
      }
      if(l==4)
      {
        this.setData({
          shows:true,
          cityList:_index_4
        },()=>{
          this.selectareacom = this.selectComponent('#selectarea');
          this.selectareacom.showPicker()
        })
      }
      if(l==3)
      {
        this.setData({
          shows:true,
          cityList:_index_3
        },()=>{
          this.selectareacom = this.selectComponent('#selectarea');
          this.selectareacom.showPicker()
        })
      }
      if(l==2)
      {
        this.setData({
          shows:true,
          cityList:_index_2
        },()=>{
          this.selectareacom = this.selectComponent('#selectarea');
          this.selectareacom.showPicker()
        })
      }
      if(l==1)
      {
        this.setData({
          shows:true,
          cityList:_index_1
        },()=>{
          this.selectareacom = this.selectComponent('#selectarea');
          this.selectareacom.showPicker()
        })
      }
    
    })
    
  },
  oncitySelect(detail){
    console.log(detail)
  }
})
