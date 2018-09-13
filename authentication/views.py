from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout

# Create your views here.
def acceuil(request):
	return render(request, 'authentication/acceuil.html', {})
	
def login(request):
	return render(request, 'authentication/login.html', {})
