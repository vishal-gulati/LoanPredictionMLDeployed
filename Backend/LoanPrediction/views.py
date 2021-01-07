from django.shortcuts import render
import pickle
from rest_framework import viewsets          # add this
from .serializers import ApplicationSerializer      # add this
from .models import Application                     # add this
import sklearn
class ApplicationView(viewsets.ModelViewSet):       # add this
    serializer_class = ApplicationSerializer          # add this
    queryset = Application.objects.all()  
    #file=open('C:/Users/Vishal/Documents/MachineLearningIntegrated/machinelearning/LoanPrediction/RandomForest.pickle','rb') 
    #model=pickle.load(file)              # add this