from django.shortcuts import render


# Create your views here.
def index(request):
    # 如果没有登录跳转到登录页

    return render(request, 'index.html')