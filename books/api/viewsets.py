from rest_framework import viewsets
from books.api import serializers
from books import models


class BooksViewSet(viewsets.ModelViewSet):
    serializers_class = serializers.BooksSerializer
    queryset = models.Books.objects.all() 