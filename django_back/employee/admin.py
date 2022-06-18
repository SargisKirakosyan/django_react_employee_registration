from django.contrib import admin
from .models import Employee


class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('employee_name', 'employee_email', 'employee_document',
                    'employee_phone_number', 'employee_registration_date')

# Register your models here.


admin.site.register(Employee, EmployeeAdmin)
