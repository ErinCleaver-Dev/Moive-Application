from rest_framework import serializers
from .models import Movie, Rating

#first create clas for the Serializer for the movies
class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        #declare a variable to hold the Movie object
        model = Movie
        #then you declare the fields for the Movie api.
        fields = ('id', 'title', 'description')

#first create clas for the Serializer for the Rating
class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        #declare a variable to hold the Rating object
        model = Rating
        #then you declare the fields for the Movie api.
        fields = ('id', 'stars', 'user', 'movie')