"""
# -*- coding: utf-8 -*-
@author:Jacob
@create_date:2023/12/28 14:49 
@target: 
@version:
@logs:
"""
from django import forms


class FileUploadForm(forms.Form):
    file = forms.FileField()
