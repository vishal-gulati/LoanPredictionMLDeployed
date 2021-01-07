from django.contrib import admin

# Register your models here.
from .models import Gender,Stat,edu,cred,prop,Application,Sta
class ApplicationAdmin(admin.ModelAdmin):  # add this
    list_display = ('Name', 'Age', 'gender', 'Marriage','Dependents','Education','Self_Employed','ApplicantIncome','CoapplicantIncome','LoanAmount','Loan_Term','CreditHistory','PropertyArea') # add this
admin.site.register(Gender)
admin.site.register(Stat)
admin.site.register(edu)
admin.site.register(cred)
admin.site.register(prop)
admin.site.register(Application,ApplicationAdmin)
admin.site.register(Sta)