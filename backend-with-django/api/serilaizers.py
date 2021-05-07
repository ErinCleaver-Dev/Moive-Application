from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Movie, Rating
from rest_framework.authtoken.models import Token

#create a class for the user serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        #declare a variable to hold the Movie object
        model = User
        #then you declare the fields for the User Serializer.
        fields = ('id', 'username', 'password')
        # this means that you won't be able to see it and it is required
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        # create a token to go with the new user profile
        Token.objects.create(user=user)
        return user


#create class for the Serializer for the movies
class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        #declare a variable to hold the Movie object
        model = Movie
        #then you declare the fields for the Movie Serializer.
        fields = ('id', 'title', 'description', 'number_of_ratings', 'avg_rating')

#create class for the Serializer for the Rating
class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        #declare a variable to hold the Rating object
        model = Rating
        #then you declare the fields for the Rating Serializer.
        fields = ('id', 'stars', 'user', 'movie')