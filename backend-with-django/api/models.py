from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator

#create a Model for holding the movies.
class Movie(models.Model):
    title = models.CharField(max_length=32)
    description = models.TextField(max_length=360)

# Added a model of the raiting that will have a one to one relationship with the movies
class Rating(models.Model):
    
    #has a refernce between movie and raiting
    #if a movie is removed the rating has to be removed
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    
    #if a movie is removed the rating has to be removed
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    # you can use pre-existing classes to check for the max and min values that are included in the django package
    stars = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    class Mata:
        # lets you declare that a object is unique_together
        unique_together = (('user', 'movie'))
        #lets you index to values together
        index_together = (('user', 'movie'))        