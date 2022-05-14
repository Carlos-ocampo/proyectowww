from django.urls import path
from beca.api import views
from rest_framework.urlpatterns import format_suffix_patterns

app_name = 'api'

urlpatterns = [
    path('', views.apimain, name='main'),
    
    path('api/v1/paises/', views.pais_list),
    path('api/v1/paises/<int:pk>', views.pais_detail),
    
    path('api/v1/universidad/', views.universidad_list),
    path('api/v1/universidad/<int:pk>', views.universidad_detail),
    
    path('api/v1/beca/', views.beca_list),
    path('api/v1/beca/<int:pk>', views.beca_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)
