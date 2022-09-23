from django.urls import path
from . import views

app_name = "account"

urlpatterns = [
    path("csrf/", views.get_csrf, name="api-csrf"),
    path("login/", views.get_csrf, name="api-login"),
    path("me/", views.get_csrf, name="me"),
]