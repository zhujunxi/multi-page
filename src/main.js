// alert("123451456");

var typeWriter = {
  msg: function(msg) {
    return msg;
  },
  len: function() {
    return this.msg.length;
  },
  seq: 0,
  speed: 150, //����ʱ��(ms)
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
    "JS���ֻ�Ч�� ��ԭ��ܼ򵥣�ÿ�ζ��ȡһ����������ַ�����ֵ�����������ԭ����������ݼ���";
  function getMsg() {
    return msg;
  }
  typeWriter.msg = getMsg(msg);
  typeWriter.type();
};
