function pic_center(){
	var img = new Image();
    img.onload = function(){
   var div_w = $("#pic").width();
   var div_h = $("#pic").height();
   var div_b = div_w / div_h;
   var img_b = img.width / img.height;
   if(div_b > img_b){
      var img_h = div_h;
      var img_w = img_h * img_b;
      console.log(1);
      console.log(img_h);
      console.log(img_w);
      $("#preview").css({
         "height":img_h+"px",
         "width":img_w+"px",
         "margin":"auto auto",
         "position":"relative",
         "vertical-align":"middle"
      });
   }else{
      var img_w = div_w;
      var img_h = img_w / img_b;
      console.log(2);
      $("#preview").css({
         "height":img_h+"px",
         "width":img_w+"px",
         // "margin":"auto auto",
         "margin-top":(div_h - img_h) / 2 + 'px',
         "position":"relative",
         "vertical-align":"middle"
      });
   }
}
img.src = $("#preview").attr("src");
}

function preView(file) {
        var src = window.URL.createObjectURL(file);
        $('#preview').attr('src', src);
        pic_center();
        $(".inputfile>img").hide();
    }

    

    //转base64
    function readFile(file, cb) {
        if (!/image\/\w+/.test(file.type)) {
            // $(".weui_dialog_bd").html("请确保文件为图像类型");
            $('#preview').attr('src', '');
            // $(".weui_dialog_alert").show();
            return false;
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);		//将文件读取为二进制字符串
        reader.onload = function (e) {
            cb(reader);
        }
    }
$(function(){
	var data={};
	data.pic_info;
	$('.ipt').on('change', function (e) {
        $('.myimg>img').css('display','block');
        var file = e.target.files[0];
        //预览
        preView(file);
        //转base64
        readFile(file, function (reader) {
            data.pic_info = reader.result;
        });
    });
})
