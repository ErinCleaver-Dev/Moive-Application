from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.shortcuts import render
from .models import Movie, Rating
from .serilaizers import MovieSerializer, RatingSerializer, UserSerializer


# Create your views here.
# creating a view set for users 
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = (UserSerializer)


#added views for the Movie Set view
class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = (MovieSerializer)
    #added authetication classes
    authentication_classes = (TokenAuthentication)
    permission_classes = (IsAuthenticated)

    #create a new function to updating and creating raitings for the movies
    @action(detail=True, methods=['POST'])
    def rate_movie(self, request, pk=None):
        # created a response variable
        #used a if statement to test if stars are in the request.
        # else it will display an error message that they need to provide stars
        if 'stars' in request.data:
            movie = Movie.objects.get(id=pk)
            stars = request.data['stars']
            user = request.user

            #added a try catch statement
            try:
                # getting the user that is equal to the user id and the movie that is equal to the user id.
                rating = Rating.objects.get(user=user.id, movie=movie.id)
                rating.stars = stars
                rating.save()
                serializer = RatingSerializer(rating, many=False)
                response = {messages: 'Raiting Updated!', 'result': serializer.data}
                return Response(response, status=status.HTTP_200_OK)
                
            except: 
                rating = Rating.objects.create(user=user, movie=movie, stars=stars)
                serializer = RatingSerializer(rating, many=False)
                response = {messages: 'Raiting created!', 'result': serializer.data}
                return Response(response, status=status.HTTP_200_OK)



            
        else:
            response = {messages: 'You need to provide stars!'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)

        

#added the movie set view 
class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = (RatingSerializer)
    authentication_classes = (TokenAuthentication)
    permission_classes = (IsAuthenticated)

    def updating(self, request, *args, **kwargs):
            response = {'message' : 'You cant update rating like this'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)
    def create(self, request, *args, **kwargs):
        response = {'message' : 'You cant update rating like this'}
        return Response(response, status=status.HTTP_400_BAD_REQUEST)