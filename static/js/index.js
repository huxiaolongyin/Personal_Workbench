$(document).ready(function () {
  $("a#pageLink").click(function () {
    $("a#pageLink").removeClass("active");
    $(this).addClass("active");
  });

  $(".btn-show-left-area").click(function () {
    $(".left-area").removeClass("show");
    $(".left-area").addClass("show");
  });

  $(".btn-show-right-area").click(function () {
    $(".right-area").removeClass("show");
    $(".right-area").addClass("show");
  });

  $(".btn-close-right").click(function () {
    $(".right-area").removeClass("show");
  });

  $(".btn-close-left").click(function () {
    $(".left-area").removeClass("show");
  });
});

$('.main-area').scroll( function() {
    if ($('.main-area').scrollTop() >= 88) {
       $('div.main-area-header').addClass('fixed');
    }
    else {
       $('div.main-area-header').removeClass('fixed');
    }
});

function select(element) {
    var activeElement = document.querySelector(".active");
	var id = element.id;
    var targetPage = document.getElementById(id + '_page');
    var pageElements = document.querySelectorAll(".page");

	document.querySelector(".page_button").classList.remove("active")

	for (var i = 0; i < pageElements.length; i++) {
      pageElements[i].style.display = "none";
    }
    if (activeElement) {
      activeElement.classList.remove("active");
    }

    targetPage.style.display = 'block';
	element.classList.add("active")
}

function uploadFile() {
  var fileInput = document.getElementById('file-input');
  var file = fileInput.files[0];

  var formData = new FormData();
  formData.append('file', file);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/index/upload/', true);

  // 添加CSRF令牌到请求头
  var csrftoken = getCookie('csrftoken');
  xhr.setRequestHeader('X-CSRFToken', csrftoken);

  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log('文件上传成功！');
    } else {
      console.log('文件上传失败。');
    }
  };
  xhr.send(formData);
}

// 从Cookie中获取CSRF令牌的值
function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

var button = document.querySelector('.more-action');
var fileManager = document.querySelector('.file-manager');

function file_manager() {
    // 切换文件管理窗口的显示状态
    var fileManager = document.querySelector('.file-manager');
    fileManager.style.display = 'block';
};