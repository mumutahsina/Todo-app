
from django.contrib import admin
from django.urls import path
from . import views 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('signup/', views.signup),
    path('loginnn/', views.loginnn),
    path('todopage/',views.todo,name='todopage'),
    path('edit_todo/<int:srno>',views.edit_todo,name='edit_todo'),
    path('delete_todo/<int:srno>/', views.delete_todo, name='delete_todo'),
    path('signout',views.signout,name='signout'),

    path('', views.loginnn, name='home'),
]
