var typeWriter = {
  msg: function(msg) {
    return msg;
  },
  len: function() {
    return this.msg.length;
  },
  seq: 0,
  speed: 150,
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
  var msg =
    "朱俊曦的打字机测试1<br>朱俊曦的打字机测试2<br>朱俊曦的打字机测试3<br>朱俊曦的打字机测试4<br>朱俊曦的打字机测试5<br>朱俊曦的打字机测试6<br>";
  function getMsg() {
    return msg;
  }
  typeWriter.msg = getMsg(msg);
  typeWriter.type();
};
