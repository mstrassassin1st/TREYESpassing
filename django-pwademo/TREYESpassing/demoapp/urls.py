from django.conf.urls import url, include
from django.urls import path
from django.views.generic import ListView, DetailView
from . import views

urlpatterns = [
    path('processVideo/', views.processVideo, name="api-key"),
    path('notif/', views.get_notif, name="get-notif")
]