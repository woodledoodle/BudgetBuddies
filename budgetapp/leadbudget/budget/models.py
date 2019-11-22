from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Budget(models.Model):
    balance = models.DecimalField(max_digits=999, decimal_places=2, default=0.00)
    owner = models.ForeignKey(User, related_name="budgets", on_delete=models.CASCADE, null=True, unique=True )
    created_at = models.DateTimeField(auto_now_add=True)

class Record(models.Model):
    budget = models.ForeignKey(Budget, related_name="records", on_delete=models.CASCADE, null=True )
    amount = models.DecimalField(max_digits=999, decimal_places=2, default=0.00)
    action = models.CharField(max_length=20)
    description = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

# class SharedBudget(models.Model):
#     budget = model.ForeignKey(Budget, related_name="sharedBudget", on_delete=models.CASCADE, null=True)
#     owner = models.ForeignKey(User, related_name="balance", on_delete=models.CASCADE, null=True)
    # amount = models.DecimalField(max_digits=999, decimal_places=2)
    # updated_at = models.DateTimeField(auto_now_add=True)
