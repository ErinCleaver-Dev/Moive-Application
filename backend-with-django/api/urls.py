from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('new/', admin.sites.url),
]