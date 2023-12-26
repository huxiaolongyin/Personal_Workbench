from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect


# Create your views here.
@login_required(login_url="account/login/")
def index(request):
    # 如果没有登录跳转到登录页
    return render(request, 'index.html')
