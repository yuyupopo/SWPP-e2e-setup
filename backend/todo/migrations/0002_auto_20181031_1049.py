# Generated by Django 2.1.2 on 2018-10-31 10:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todo',
            name='due',
        ),
        migrations.AlterField(
            model_name='todo',
            name='done',
            field=models.BooleanField(default=False),
        ),
    ]
