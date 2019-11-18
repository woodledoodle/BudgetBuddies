from budget.models import Budget
from rest_framework import viewsets, permissions
from .serializers import BudgetSerializer

# Budget Viewset create full crud api
class BudgetViewSet(viewsets.ModelViewSet):
    queryset = Budget.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BudgetSerializer