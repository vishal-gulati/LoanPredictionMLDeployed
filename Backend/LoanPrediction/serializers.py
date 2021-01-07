from rest_framework import serializers
from .models import Application

class ApplicationSerializer(serializers.ModelSerializer):
  class Meta:
    model = Application
    fields = ('Name', 'Age', 'gender', 'Marriage','Dependents','Education','Self_Employed','ApplicantIncome','CoapplicantIncome','LoanAmount','Loan_Term','CreditHistory','PropertyArea')