# Generated by Django 4.0.5 on 2022-06-18 17:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='employee_registration_date',
            field=models.DateField(auto_now_add=True, verbose_name='Registration Date'),
        ),
    ]
