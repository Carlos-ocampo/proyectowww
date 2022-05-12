from django.contrib.auth.models import User, Group
from rest_framework import serializers
from beca.models import *


class  PaisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pais
        fields = '__all__'
        
class  UniversidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Universidad
        fields = '__all__'

class  BecaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Universidad
        fields = '__all__'