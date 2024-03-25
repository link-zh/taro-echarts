import { createApp } from "vue";
import { loadEcharts } from "echarts4taro3";
import * as echarts from "echarts4taro3/lib/assets/echarts"; // 框架内置了一份，也可以用官网自定义的 echarts.js
// 初始化加载 echarts 库
import "./app.scss";

const App = createApp({
  onShow(options) {
    loadEcharts(echarts);
    console.log("App onShow.");
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

export default App;
