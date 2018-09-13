from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

# Create your views here.
def acceuil(request):
	return render(request, 'authentication/acceuil.html', {})
	
def user_login(request):
	if request.method == 'POST':
		username = request.POST['username']
		password = request.POST['password']
		user = authenticate(request, username=username, password=password)
		if user is not None:
			login(request, user)
			messages.success(request,('Vous êtes connecté! '))
			return redirect('acceuil')
		else:
			messages.success(request,('Error! Essayez à nouveau! '))
			return redirect('user_login')
	else:
		return render(request, 'authentication/login.html', {})

def user_logout(request):
	logout(request)
	messages.success(request,('Vous avez bien déconnecté !'))
	return redirect('acceuil')