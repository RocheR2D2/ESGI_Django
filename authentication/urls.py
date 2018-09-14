from django.urls import path
from . import views

urlpatterns = [
	path('', views.accueil, name="accueil"),
	path('login/', views.user_login, name="user_login"),
	path('logout/', views.user_logout, name="user_logout"),
	path('inscription/', views.user_inscription, name="user_inscription"),
]
