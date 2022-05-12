from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from beca.models import * # MODELS
from beca.api.serializers import  * # Serializers

# API 

## Pais
@api_view(['GET', 'POST'])
def pais_list(request):
    # Api list and create
    if request.method == 'GET':
        all_apis = Pais.objects.all()
        pais_serializer = PaisSerializer(all_apis, many=True)
        return Response(pais_serializer.data, status=status.HTTP_200_OK) 
    elif request.method == 'POST':
        pais_serializer = PaisSerializer(data=request.data)
        if pais_serializer.is_valid():
            pais_serializer.save()
            return Response(pais_serializer.data, status=status.HTTP_201_CREATED)
        return Response(pais_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'PUT', 'DELETE'])
def categoria_detail(request, pk):
    # api read, delete, update
    try:
        pais_to_view =  Pais.objects.get(pk=pk)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        pass
    elif request.method == 'PUT':
        pass
    elif request.method == 'GET':
        pass