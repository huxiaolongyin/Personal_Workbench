from django.contrib import messages
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout


def log_in(request):
    # 采用模板的方式
    if request.method == 'POST':
        if 'register' in request.POST:
            username = request.POST['username']
            password = request.POST['password']
            password2 = request.POST['password2']

            # 验证用户是否已经存在
            try:
                if User.objects.get(username=username).get_username() == username:
                    error_message = '用户名已存在'
                    return render(request, 'login.html', {'error_message': error_message})
            except:
                pass
            # 检查密码复杂度
            if len(username) < 6:  # 用户名长度匹配
                error_message = '用户名长度需大于6位'
                return render(request, 'login.html', {'error_message': error_message})
            if len(password) < 6:  # 密码长度匹配
                error_message = '密码长度需大于6位'
                return render(request, 'login.html', {'error_message': error_message})
            if not any(char.isdigit() for char in password) or \
                    not any(char.isalpha() for char in password):  # 密码长度匹配
                error_message = '密码必须包含至少一个数字和一个英文字母'
                return render(request, 'login.html', {'error_message': error_message})
            if password != password2:  # 密码一致匹配
                error_message = '两次密码不一致'
                return render(request, 'login.html', {'error_message': error_message})

            # 创建用户对象并保存到数据库
            user = User(username=username)
            user.set_password(password)

            user.save()
            messages.error(request, '注册成功!')  # 注册成功后的逻辑，例如重定向到登录页面

        elif 'login' in request.POST:

            login_name = request.POST['login_name']
            login_pwd = request.POST['login_pwd']
            user = authenticate(username=login_name, password=login_pwd)
            if user is not None:
                login(request, user)
                return redirect('/index/')
            else:
                error_message = '无效的用户名或密码'
                return render(request, 'login.html', {'error_message2': error_message})

    return render(request, 'login.html')


# 登出
def log_out(request):
    logout(request)
    return redirect('/account/login/')
