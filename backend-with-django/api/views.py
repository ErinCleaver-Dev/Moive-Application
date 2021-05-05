from rest_framework import viewsets
from django.shortcuts import render
from .models import Movie, Rating
from .serilaizers import MovieSerializer, RatingSerializer

# Create your views here.
#added views for the Movie Set view
class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = (MovieSerializer)

#added the movie set view 
class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = (RatingSerializer)

    