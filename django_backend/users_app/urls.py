from django.urls import path
from .views import get_users, add_user, remove_user, get_user_by_id

urlpatterns = [
    path('users/', get_users, name="get_users"),
    path('users/add/', add_user, name="add_user"),
    path('users/remove/<int:user_id>/', remove_user, name="remove_user"),
    path('users/getdetails/<int:user_id>/', get_user_by_id, name="get_user_by_id"),
]
