from django.contrib import admin
from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from .views import MovieViewSet, RatingViewSet

#used the router to create a new default router
router = routers.DefaultRouter()
router.register('movies', MovieViewSet)
router.register('ratings', RatingViewSet)

#included the router urls 
urlpatterns = [
    path('', include(router.urls)),
]