// @flow
require('style!css!./index.css');

//左列表
const list = ["index", "intro", "talk", "Image"]
for (var item in list) {
    document.getElementById('list').innerHTML += '<li><a href="' + list[item] + '.html">' + list[item] + '</a></li><br>'
}

if (document.getElementById('btn_send')) {
    document.getElementById('btn_send').addEventListener("click", function () {
        var temp = document.getElementById('say').value
        console.log(temp)
        document.getElementById('display_area').innerHTML += temp + "<br>"
    });
}

if (document.getElementById('selpic')) {
    var input = document.getElementById('selpic')
    input.addEventListener("change", function () {
        if (input.files && input.files[0]) {
            var imageTagID = input.getAttribute("targetID");

            var reader = new FileReader();

            reader.onload = function (e) {

                var img = document.getElementById(imageTagID);

                img.setAttribute("src", e.target.result)

            }

            reader.readAsDataURL(input.files[0]);

        }
    });
}