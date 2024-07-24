import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  server:{
    host:'0.0.0.0', //ip地址
    port:'8081 ', //设置服务启动端口
    open:true, //设置启动服务时是否打开浏览器
  }
})
