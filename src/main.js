// alert("123451456");

var typeWriter = {
  msg: function(msg) {
    return msg;
  },
  len: function() {
    return this.msg.length;
  },
  seq: 0,
  speed: 150, //打字时间(ms)
  type: function() {
    var _this = this;
    document.getElementById("main").innerHTML = _this.msg.substring(
      0,
      _this.seq
    );
    if (_this.seq == _this.len()) {
      _this.seq = 0;
      clearTimeout(t);
    } else {
      _this.seq++;
      var t = setTimeout(function() {
        _this.type();
      }, this.speed);
    }
  }
};
window.onload = function() {
  alert("welcome to //www.jb51.net");
  var msg =
    "JS打字机效果 ，原理很简单：每次多获取一个待打出的字符串的值，输出，覆盖原来输出的内容即可";
  function getMsg() {
    return msg;
  }
  typeWriter.msg = getMsg(msg);
  typeWriter.type();
};
