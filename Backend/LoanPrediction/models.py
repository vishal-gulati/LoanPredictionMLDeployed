from djongo import models

# Create your models here.
class Gender(models.Model):
    Name=models.CharField(max_length=15,primary_key=True)
    def __str__(Self):
        return '%s' % (Self.Name)

class Stat(models.Model):
    Status=models.CharField(max_length=3,primary_key=True)
    def __str__(Self):
        return '%s' % (Self.Status)
class Sta(models.Model):
    Status=models.CharField(max_length=3,primary_key=True)
    def __str__(Self):
        return '%s' % (Self.Status)

class edu(models.Model):
    Level=models.CharField(max_length=30,primary_key=True)
    def __str__(Self):
        return '%s' % (Self.Level)

class prop(models.Model):
    Area=models.CharField(max_length=15,primary_key=True)
    def __str__(Self):
        return '%s' % (Self.Area)

class cred(models.Model):
    Score=models.IntegerField(primary_key=True)
    def __str__(Self):
        return '%d' % (Self.Score) 

class Application(models.Model):
    Name=models.CharField(max_length=50,primary_key=True)
    Age=models.IntegerField()
    gender=models.ForeignKey(Gender,on_delete=models.CASCADE)
    Marriage=models.ForeignKey(Sta,on_delete=models.CASCADE)
    Dependents=models.IntegerField()
    Education=models.ForeignKey(edu,on_delete=models.CASCADE)
    Self_Employed=models.ForeignKey(Stat,on_delete=models.CASCADE)
    ApplicantIncome=models.IntegerField()
    CoapplicantIncome=models.IntegerField()
    LoanAmount=models.IntegerField()
    Loan_Term=models.IntegerField()
    CreditHistory=models.ForeignKey(cred,on_delete=models.CASCADE)
    PropertyArea=models.ForeignKey(prop,on_delete=models.CASCADE)