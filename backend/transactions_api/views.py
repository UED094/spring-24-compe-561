from django.http import JsonResponse
from transactions.models import Transaction


def main(request):

    transactions = Transaction.objects.all()
    return JsonResponse(
        [
            {"description": transaction.description, "amount": str(transaction.amount)}
            for transaction in transactions
        ],
        safe=False,
    )
    # return JsonResponse({"description": "Gas", "amount": "20.00", "date": "2021-01-01"})
