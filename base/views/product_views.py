from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes #decorator view
from rest_framework.permissions import IsAuthenticated, IsAdminUser # auth
from rest_framework.response import Response #decorator view

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger


from base.models import Product 
from base.serializers import ProductSerializer

from rest_framework import status




#GET Products
@api_view()
def getProducts(request):
    # product = Product.objects.all()
    # serializer = ProductSerializer(product, many=True)
    
    # return Response(serializer.data)
    
    query = request.query_params.get('keyword')
    if query == None:
        query = ''


    products = Product.objects.filter(name__icontains=query)
    productsAdminPage = Product.objects.all()
    page = query = request.query_params.get('page')
    paginator = Paginator(products, 50)

    try:
        products  = paginator.page(page)
    except PageNotAnInteger:
        products  = paginator.page(1)
    except EmptyPage:
        products  = paginator.page(paginator.num_pages)
    
    if page == None:
        page = 1
    page = int(page)

    serializer = ProductSerializer(products, many=True)
    serializerAdminPage = ProductSerializer(productsAdminPage, many=True)
    return Response({'products':serializer.data, 'productsAdmin': serializerAdminPage.data, 'page':page, 'pages':paginator.num_pages})



#Single Product
@api_view()
def getProduct(request,pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    
    return Response(serializer.data)



#CREATE Product
@api_view(['POST'])
@permission_classes([IsAdminUser])
def createProduct(request):
    user = request.user

    product = Product.objects.create(
        user=user,
        name='Sample Name',
        price=0,
        category='Sample Category',
        description=''
    )

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)



#UPDATE Product
@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateProduct(request, pk):
    data = request.data
    product = Product.objects.get(_id=pk)

    product.name = data['name']
    product.price = data['price']
    product.category = data['category']
    product.description = data['description']

    product.save()

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)



#DELETE Product
@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteProduct(request, pk):
    product = Product.objects.get(_id=pk)
    product.delete()
    return Response('Producted Deleted')




#Upload Image from frontend
@api_view(['POST'])
def uploadImage(request):
    data = request.data

    product_id = data['product_id']
    product = Product.objects.get(_id=product_id)

    product.image = request.FILES.get('image')
    product.save()

    return Response('Image was uploaded')

