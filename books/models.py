from django.db import models
from uuid import uuid4

class Books(models.Model):
    id_book = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    release_year = models.IntegerField()
    state = models.CharField(max_length=255)
    pages = models.IntegerField()
    company = models.CharField(max_length=255)
    create_at = models.DateField(auto_now_add=True)