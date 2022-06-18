from rest_framework import serializers
from .models import Employee


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('id', 'employee_name', 'employee_email', 'employee_document',
                  'employee_phone_number', 'employee_registration_date')
