from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages

# Create your views here.
def accueil(request):
	return render(request, 'authentication/accueil.html', {})
	
def user_login(request):
	if request.method == 'POST':
		username = request.POST['username']
		password = request.POST['password']
		user = authenticate(request, username=username, password=password)
		if user is not None:
			login(request, user)
			messages.success(request,('Vous êtes connecté! '))
			return redirect('accueil')
		else:
			messages.success(request,('Error! Essayez à nouveau! '))
			return redirect('user_login')
	else:
		return render(request, 'authentication/login.html', {})

def user_logout(request):
	logout(request)
	messages.success(request,('Vous avez bien déconnecté !'))
	return redirect('accueil')

def user_inscription(request):
	if request.method == 'POST':
		form = UserCreationForm(request.POST)
		if form.is_valid():
			form.save()
			username = form.cleaned_data['username']
			password = form.cleaned_data['password1']
			user = authenticate(username=username, password=password)
			login(request,user)
			messages.success(request, ('Vous avez bien inscrit !'))
			return redirect('accueil')
	else:
		form = UserCreationForm()

	return render(request, 'authentication/inscription.html', {'form': form} )