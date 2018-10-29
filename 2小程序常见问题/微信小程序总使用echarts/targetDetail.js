import * as echarts from '../../ec-canvas/echarts';
// const config = require('../../config.js');
// var Mock = require('../../utils/mock-min.js');
var width = '';
var height = '';

Page({

    /**
     * 页面的初始数据
     */
    data: {
       
        actionSheetItem: [{
                name: '点名',
                content: '炉膛壁温左0301越高高限'
            },
            {
                name: '描述',
                content: ' #1机组主汽温度'
            },
            {
                name: '狀态',
                content: ' 正常'
            },
            {
                name: '数值',
                content: ' 542'
            },
            {
                name: '时间',
                content: ' 2018-09-12 13:32:22'
            }
        ],
        actionSheetHide: true,

        // 图表
        ecBar: {
            lazyLoad: true // 延迟加载
        },
        times: [
            ['12:35:34', 300],
            ['12:35:54', 310],
            ['12:36:14', 320],
            ['12:36:34', 340],
            ['12:36:54', 320]
        ]
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.barComponent = this.selectComponent('#mychart-dom-bar');
    },
    // 初始化图表
    init_bar: function() {
        var that = this;
        // 获取宽高
        // this.getWidthHeight();
        var query = wx.createSelectorQuery()
        query.select('#container').boundingClientRect()
        query.selectViewport().scrollOffset()
        query.exec(function (res) {
            width = res[0].width;
            height = res[0].height;
            console.log(width)
            console.log(height)

            that.barComponent.init((canvas, width, height) => {
                // 初始化图表
                const barChart = echarts.init(canvas, null, {
                    width: width,
                    height: height
                });
                barChart.setOption(that.getBarOption());
                // 注意这里一定要返回 chart 实例，否则会影响事件处理等
                return barChart;
            });
        })
       
    },
    // 获取canvas的宽高
    getWidthHeight:function(){
        
        var query = wx.createSelectorQuery()
        query.select('#container').boundingClientRect()
        query.selectViewport().scrollOffset()
        query.exec(function (res) {
            width = res[0].width;
            height = res[0].height;
        })
        
    },
    // option配置项
    getBarOption: function() {
        var that = this;
        //return 请求数据
        return {
            // 图表标题
            title: {
                show: false,
                text: '这是图表标题',
                textStyle: {
                    color: 'red',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '14',
                    align: 'right'
                }
            },

            // 图例组件
            legend: {
                show: false,
                type: 'plain', //plain普通图例，scroll可滚动图例
                orent: 'horizontal' //布局朝向默认水平
            },

            // 绘制网格图表  可以控制图表的大小
            grid: {
                show: true,
                left: 15,
                right: 15,
                top: 30,
                bottom: 15,
                containLabel: true //坐标轴刻度标签
            },

            // x轴
            xAxis: {
                show: true,
                type: 'category',
                axisLine: { //坐标轴轴线相关设置
                    lineStyle: { //坐标轴样式设置
                        color: '#000'
                    }
                },
                splitLine: { //分割线或网格线
                    show: false,
                    lineStyle: {
                        color: '#f4f4f4'
                    }
                },
                boundaryGap: false, //文字在刻度中
                //max: 24,
                //splitNumber: 12      //分割成多少份
            },

            // y轴
            yAxis: {
                show: true,
                type: 'value',
                axisLine: { //坐标轴轴线相关设置
                    lineStyle: { //坐标轴样式设置
                        color: '#000'
                    }
                },
                // axisTick:{  //小刻度的样式
                //     show:true,
                //     alignWithLabel:true,
                //     lineStyle:{
                //         color:'#fff'
                //     }
                // },
                splitLine: { //分割线或网格线
                    show: true,
                    lineStyle: {
                        color: '#f4f4f4'
                    }
                },
                boundaryGap: false, //文字在刻度中间
                max: 700
            },

            // 动画
            animation: false,

            // 图表数据
            series: [{
                name: '全厂',
                type: 'line',
                lineStyle: { //曲线颜色
                    normal: {
                        type: 'solid',
                        color: "#2775c7"
                    }
                },
                symbol: 'none',
                data: that.data.times

            }]
        };
    },

    // 显示actionSheet
    tabbtn: function() {
        let that = this
        that.setData({
            actionSheetHide: false,
        });

        // 初始化图表
        this.init_bar();
    },
    //防止蒙版穿透
    doNotMove: function() {
        return;
    },
    // 点击蒙版关闭
    catchWrapClose: function() {
        this.setData({
            actionSheetHide: true
        })
    },
    // 点击picker区域（白色区域）阻止冒泡
    catchActionSheet: function() {
        return;
    }



})