from budget.models import Budget
from rest_framework import viewsets, permissions
from .serializers import BudgetSerializer

# Budget Viewset create full crud api
class BudgetViewSet(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = BudgetSerializer
    def get_queryset(self):
        return self.request.user.budgets.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
  