from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<str:page_name>.html', views.generic_page, name='generic_page'),
]
