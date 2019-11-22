from rest_framework import serializers
from budget.models import Budget, Record


# serializers allow data such as querysets and model instances to be converted to native python datatypes that will be rendered into JSON or XML. Deserialization allows parsed data to be converted back into complex types after validation.
class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = '__all__'

class BudgetSerializer(serializers.ModelSerializer):
    records = RecordSerializer(many=True, read_only=True)
    class Meta:
        model = Budget
        fields = ("id", "balance", "owner", "records")
