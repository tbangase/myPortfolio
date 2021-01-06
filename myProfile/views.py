from django.shortcuts import render
from django.shortcuts import redirect
from django.contrib import messages
from django.core.mail import send_mail

# Create your views here.

def top(request):
    return render(request, 'top.html')

def inquiry(request):
    send_mail(
        'お問い合わせ', 
        'テスト',
        'example@mail.com',
        ['toshiki.ichibangase.7853@gmail.com']
    )
    messages.info(request, 'お問い合わせを送信しました')
    return redirect('/')