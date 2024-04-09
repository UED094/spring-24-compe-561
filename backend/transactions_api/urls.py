from django.urls import path
from . import views

urlpatterns = [
    # path("", views.main, name="main"),
    path("transactions/", views.transactions, name="transactions"),
    path(
        "transactions/<uuid:transaction_id>/",
        views.transaction,
        name="transaction_details",
    ),
    # path("transactions/details/<uuid:transaction_id>/", views.details, name="details"),
]
