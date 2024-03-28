from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Transaction


def transactions(request):
    transactions = Transaction.objects.all().values()
    template = loader.get_template("all_transactions.html")

    context = {
        "transactions": transactions,
    }
    return HttpResponse(template.render(context=context, request=request))


def details(request, transaction_id):
    transaction = Transaction.objects.get(id=transaction_id)
    template = loader.get_template("transaction_detail.html")

    context = {
        "transaction": transaction,
    }
    return HttpResponse(template.render(context=context, request=request))


def main(request):
    template = loader.get_template("main.html")
    return HttpResponse(template.render(request=request))
