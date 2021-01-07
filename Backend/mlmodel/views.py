from django.shortcuts import render
import pickle
import math
from rest_framework.decorators import api_view
from rest_framework.response import Response
import numpy as np
import sklearn
# Create your views here.



@api_view(['POST'])
def predict_diabetictype(request):
    
    Name = request.data.get('Name',None)
    Age = int(request.data.get('Age',None))
    gender = request.data.get('gender',None)
    Marriage = request.data.get('Marriage',None)
    Dependents = int(request.data.get('Dependents',None))
    Education = request.data.get('Education',None)
    Self_Employed = request.data.get('Self_Employed',None)
    ApplicantIncome = int(request.data.get('ApplicantIncome',None))
    CoapplicantIncome = int(request.data.get('CoapplicantIncome',None))
    LoanAmount = int(request.data.get('LoanAmount',None))
    Loan_Term = int(request.data.get('Loan_Term',None))
    CreditHistory = int(request.data.get('CreditHistory',None))
    PropertyArea = request.data.get('PropertyArea',None)
    fields = [gender,Marriage,Dependents,Education,Self_Employed,ApplicantIncome,CoapplicantIncome,LoanAmount,Loan_Term,CreditHistory,PropertyArea]
    Gender_Female=0
    Gender_Male=0
    if gender=="Female":
        Gender_Female=1
    else :
        Gender_Male=1
    Married_No=0
    Married_Yes=0
    if Marriage=="Yes":
        Married_Yes=1
    else:
        Married_No=1
    Dependents_3=0
    Dependents_2=0
    Dependents_1=0
    Dependents_0=0
    if Dependents==3:
        Dependents_3=1
    elif Dependents==2:
        Dependents_2=1
    elif Dependents==1:
        Dependents_1=1
    else:
        Dependents_0=1
    Education_Graduate=0
    Education_NotGraduate=0
    if Education=="Graduate":
        Education_Graduate=1
    else:
        Education_NotGraduate=1
    Self_Employed_No=0
    Self_Employed_Yes=0
    if Self_Employed=="Yes":
        Self_Employed_Yes=1
    else:
        Self_Employed_No=1
    Property_Area_Rural=0
    Property_Area_Semiurban=0
    Property_Area_Urban=0
    if PropertyArea=="Urban":
        Property_Area_Urban=1
    else:
        Property_Area_Rural=1
    input_data = [[float(ApplicantIncome), float(CoapplicantIncome), float(LoanAmount), float(Loan_Term),float(CreditHistory),float(math.log(LoanAmount)),Gender_Female,Gender_Male,Married_No,Married_Yes,Dependents_3,Dependents_0,Dependents_1,Dependents_2,Education_Graduate,Education_NotGraduate,Self_Employed_No,Self_Employed_Yes,Property_Area_Rural,Property_Area_Semiurban,Property_Area_Urban]]
    if not None in fields:
            #Datapreprocessing Convert the values to float

            #Passing data to model & loading the model from disks
        model_path = 'C:/Users/Vishal/Documents/MachineLearningIntegrated/machinelearning/mlmodel/RandomForest.pickle'
        classifier = pickle.load(open(model_path, 'rb'))
        predict = classifier.predict(input_data)
            
        predictions = {
                'prediction' : predict[0],
            }
    else:
        predictions = {
                'error' : '1',
                'message': 'Invalid Parameters'                
            } 
    return Response(predictions)