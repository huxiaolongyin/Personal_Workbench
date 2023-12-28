/*
		Designed by: SELECTO
		Original image: https://dribbble.com/shots/5311359-Diprella-Login
*/

let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault()

let changeForm = (e) => {

    switchCtn.classList.add("is-gx");
    setTimeout(function(){
        switchCtn.classList.remove("is-gx");
    }, 2100)

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
}


let mainF = (e) => {
//    for (var i = 0; i < allButtons.length; i++)
//        allButtons[i].addEventListener("click", getButtons);
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}

window.addEventListener("load", mainF);

$(document).ready(function(){
      $('#login').click(function(e){
        e.preventDefault(); // 阻止默认的提交功能

        var csrfToken = $('input[name="csrfmiddlewaretoken"]').val(); // 获取CSRF令牌的值
        var loginName = $('input[name="login_name"]').val();
        var loginPwd = $('input[name="login_pwd"]').val();
        var loginUrl = $(this).attr('action');

        $.ajax({
          url: loginUrl,
          type: 'POST',
          headers: {
          'X-CSRFToken': csrfToken // 将CSRF令牌添加到请求头中
          },
          data: {
          'login_name': loginName,
          'login_pwd': loginPwd
          },
          success: function(response){
                  if (response.error){
                  $('#login_message').text(response.error);
                  } else {
                  window.alert('登录成功');
                  window.location.href = '/index/';
                  }

          },
          error: function(xhr, status, error) {
            console.log('请求失败：',error);
            }
          });
        });
      });