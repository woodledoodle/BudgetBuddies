from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer

#register api
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        #method
        print("api regiester inside")
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data, "token":AuthToken.objects.create(user)[1]
        })


#logn api
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        #method
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        print(user)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data, "token":AuthToken.objects.create(user)[1]
        })



#get user api a retrieve api view
class UserAPI(generics.RetrieveAPIView):
    # want this route to be protected, needs a valid token
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer
    #want to return the user
    def get_object(self):
        #looks at token and send back whichever user is associated with that token
        return self.request.user