import Vue from "vue";
import App from "./App.vue";
// import "./index.less";
import img from "./assets/image/up_logo.png";
new Vue({
  data: {
    msg: "hello",
    src: img
  },
  render: h => h(App)
}).$mount("#app");
