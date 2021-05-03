from django.contrib import admin
from django.urls import path
from rest_framework import routers
from django.conf.urls import include

#used the router to create a new default router
router = routers.DefaultRouter()

#included the router urls 
urlpatterns = [
    path('', include(router.urls)),
]