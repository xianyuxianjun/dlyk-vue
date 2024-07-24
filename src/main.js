//从vue框架导入createApp函数
import { createApp } from 'vue'

//导入样式，不需要from子句
// import './style.css'

//从./App.vue页面导入App组件
import App from './App.vue'

//从./App.vue页面导入App组件
import LoginView from './view/LoginView.vue'

//导入elemen-plus组件
import ElementPlus from 'element-plus'

//导入element-plus的样式
import 'element-plus/dist/index.css'

//利用上面的createApp函数创建一个vue应用
createApp(LoginView)
    //使用ElementPlus
    .use(ElementPlus)
    //把vue应用挂载到#app
    .mount('#app')
