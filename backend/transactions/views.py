from django.shortcuts import render
from django.http import HttpResponse


def transactions(request):
    return HttpResponse("Transactions data will be displayed here.")
