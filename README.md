# 动态生成级联下拉菜单

**微信小程序中适用**
可用通过后台传的接口动态生成级联下拉菜单；


##接口规则
1 所有字段名称不限制，可以自行定制，除(child）字段不能更改
一级下拉
```javascript
[
	{
		name:'',//可自行定义
	}
]
```
多级下拉
```javascript
[
	{
		name:'',//可自行定义
		chilid:[
			{
				name:'',
				child:[]
			}
		]
	}
]
```
##API使用方法
| 方法   | 使用 | 描述 |
| :------------ |:---------------:| -----:|
| showPicker    | component.showPicker() |显示下拉菜单 |
##组件API
| 方法    | 描述 |
| :------------ |:---------------:| -----:|
| bindcitySelect   |组件绑定事件 |
| cityList    |组件属性，接受后台返回的数据 |
