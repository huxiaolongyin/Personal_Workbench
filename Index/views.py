from django.contrib.auth.decorators import login_required
from django.core.files.storage import default_storage
from django.http import JsonResponse
from django.shortcuts import render, redirect


# Create your views here.
# @login_required(login_url="account/login/")
def index(request):
    # 如果没有登录跳转到登录页
    return render(request, 'index.html')


def upload_file(request):
    if request.method == 'POST' and request.FILES['file']:
        file = request.FILES['file']
        # 处理文件，例如保存到指定目录
        file_path = 'files/{}'.format(file)  # 指定要保存的文件路径和名称
        #
        # # 使用default_storage保存文件
        default_storage.save(file_path, file)
        # 返回JSON响应，表示文件上传成功
        return JsonResponse({'status': 'success'})
    else:
        # 返回JSON响应，表示文件上传失败
        return JsonResponse({'status': 'error'})
