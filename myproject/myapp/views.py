from django.shortcuts import render
from .models import Habit
from django.contrib.auth.decorators import login_required
# Create your views here.

from django.shortcuts import render

@login_required
def home(request):
    habits = Habit.objects.filter(user=request.user)
    return render(request, 'habit_list.html', {'habits': habits})

@login_required
def add_habit(request):
    if request.method == 'POST':
        name = request.POST.get('habit')
        Habit.objects.create(name=name, user=request.user)
        return redirect('habit_list')
    return render(request, 'add_habit.html')