from django.db import models
from django.contrib.auth.models import User

class Habit(models.Model):
    name = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
     streak = models.IntegerField(default=0)
    last_completed = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.name