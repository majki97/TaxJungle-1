# Generated by Django 3.1.4 on 2021-01-26 20:51

import apps.authentication.models
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='RegistrationProfile',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='registration_profile', serialize=False, to='user.user')),
                ('code', models.CharField(default=apps.authentication.models.code_generator, max_length=5, validators=[django.core.validators.RegexValidator(message='Code must contain exactly 5 numbers from 0-9.', regex='^[0-9]{5}$')])),
            ],
        ),
    ]