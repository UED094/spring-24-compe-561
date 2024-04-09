from django.http import JsonResponse
from transactions.models import Transaction
from rest_framework.decorators import api_view
from rest_framework.response import Response
from transactions_api.serializers import TransactionSerializer
from rest_framework import status


# def main(request):

#     transactions = Transaction.objects.all()
#     return JsonResponse(
#         [
#             {"description": transaction.description, "amount": str(transaction.amount)}
#             for transaction in transactions
#         ],
#         safe=False,
#     )
#     # return JsonResponse({"description": "Gas", "amount": "20.00", "date": "2021-01-01"})


@api_view(["GET", "POST"])
def transactions(request):
    """
    List all transactions
    """

    if request.method == "GET":
        transactions = Transaction.objects.all()
        serializer = TransactionSerializer(transactions, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = TransactionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "DELETE"])
def transaction(request, transaction_id):
    """
    Retrieve, update or delete a transaction
    """

    try:
        transaction = Transaction.objects.get(pk=transaction_id)
    except Transaction.DoesNotExist:
        return Response(
            status=status.HTTP_404_NOT_FOUND, data={"error": "Transaction not found"}
        )

    if request.method == "GET":
        serializer = TransactionSerializer(transaction)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = TransactionSerializer(transaction, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        transaction.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
