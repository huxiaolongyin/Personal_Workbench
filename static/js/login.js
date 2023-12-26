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

//let getButtons = (e) => e.preventDefault()

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

//// 添加异步更新的
//let refresh = (e) => {
//      $.ajax({
//        url: "{% url 'log_in' %}",  // 指定处理AJAX请求的URL
//        type: 'POST',  // 请求类型为POST
//        data: {},  // 可选的请求数据
//        success: function(response) {
//          // 在成功接收到响应时执行的回调函数
//          // 更新页面上的数据或执行其他操作
//        },
//        error: function(xhr, status, error) {
//          // 在请求失败时执行的回调函数
//          }
//        });
//      }
//}

let mainF = (e) => {
//    for (var i = 0; i < allButtons.length; i++)
//        allButtons[i].addEventListener("click", getButtons);
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}

window.addEventListener("load", mainF);