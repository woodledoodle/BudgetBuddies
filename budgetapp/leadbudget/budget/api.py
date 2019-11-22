from budget.models import Budget
from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from .serializers import BudgetSerializer, RecordSerializer
from django.http import JsonResponse
from .models import Budget, Record
# Budget Viewset create full crud api
class BudgetViewSet(viewsets.ModelViewSet):
    queryset = Budget.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = BudgetSerializer
    # def retrieve(self, request, pk=None):
    #     queryset = self.request.user.budgets.all()
    #     budget = get_object_or_404(queryset, pk=pk)
    #     serializer = BudgetSerializer(budget)
    #     return Response(serializer.data)

    def get_queryset(self, pk=None):
        # self.queryset.filter(id=self.kwargs.get('game_pk'))
        # print("balance queryset", (self.request.user.budgets.get(id=1)).balance)
        return self.queryset.filter(owner=self.request.user.id)
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    #arguments keyword arduemnts, (self, instance, validated_data) return instance
    # def update(self, instance):
    #     print("inside of update")
    #     return instance
    #     # print("validated", validated_data.get("balance"))
    #     # instance.balance = validated_data.get('balance')
        
    def update(self, request, *args, **kwargs):
        print("requestadsfadf", request.data)
        data = self.request.data
        newBalance = data["balance"]
        print("new balance: ", data["balance"])
        instance = self.get_object()
        instance.balance = newBalance
        instance.save()
        
        serializer = self.get_serializer(data=instance)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer)


class RecordView(viewsets.ModelViewSet):
    serializer_class = RecordSerializer
    bs = BudgetSerializer
    queryset = Record.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    def get_queryset(self, pk=None):
        budget = self.request.query_params.get("budget")
        print("query parameters areP ", budget)

        return self.queryset.filter(budget=budget)
    
    def perform_create(self, serializer):
        record = self.request.data
        action = record["action"]
        amount = record["amount"]
        budgetInstance = Budget.objects.get(id=self.request.data["budget"])
        if action=="addition":
            budgetInstance.balance = budgetInstance.balance + amount
        elif action=="expense":
            budgetInstance.balance = budgetInstance.balance - amount

        budgetInstance.save()
        serializer.save(budget=budgetInstance)

    # def update(self, request, *args, **kwargs):
    #     data = self.request.data

    # def perform_create(self, request, *args, **kwargs):
    #     #method
    #     print("api record inside gonna create record")
    #     serializer = self.get_serializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     record = serializer.save()
    #     return Response({
    #         "record": RecordSerializer(record, context=self.get_serializer_context()).data
    #     })