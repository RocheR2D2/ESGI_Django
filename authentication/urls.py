from django.urls import path
from . import views

urlpatterns = [
	path('', views.acceuil, name="acceuil"),
	path('login/', views.login, name="login"),
]
