from django.db import models

# Create your models here.


class Employee(models.Model):
    employee_name = models.CharField("Name", max_length=120)
    employee_email = models.EmailField()
    employee_document = models.CharField("Document", max_length=20)
    employee_phone_number = models.CharField(max_length=20)
    employee_registration_date = models.DateField(
        "Registration Date", auto_now_add=True)
