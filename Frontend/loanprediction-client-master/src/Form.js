import React, { useState } from 'react';
import {  Button, Input } from 'reactstrap';
import axios from 'axios';
import './App.css';

const FormApp = () => {
    const [formData,setFormData] = useState({
            Name: null,
            Age: null,
            gender: null,
            Marriage: null,
            Dependents: null,
            Education: null,
            Self_Employed: null,
            ApplicantIncome: null,
            CoapplicantIncome: null,
            LoanAmount: null,
            Loan_Term: null,
            CreditHistory: null,
            PropertyArea: null
    })

    
    const predictModel = async (formData) => {
        try{
            const data = formData;
            data.Age = parseInt(formData.Age)
            data.Dependents = parseInt(formData.Dependents)
            data.ApplicantIncome = parseInt(formData.ApplicantIncome)
            data.CoapplicantIncome = parseInt(formData.CoapplicantIncome)
            data.LoanAmount=parseInt(formData.LoanAmount)
            data.Loan_Term = parseInt(formData.Loan_Term)
            data.CreditHistory = parseInt(formData.CreditHistory)
            const response = axios.post('http://127.0.0.1:8000/predict',data)
            console.log(response)
            axios.post('http://127.0.0.1:8000/api/loan/',data)
            
        }catch(e){
            console.log(e.response)
        }
    }
    const onChange = e => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault()
        console.log(formData)

        predictModel(formData);
    }

    const { Name, Age, gender, Marriage, Dependents, Education, Self_Employed, ApplicantIncome, CoapplicantIncome, LoanAmount, Loan_Term, CreditHistory, PropertyArea } = formData
    return (

        <div className="login">
            <h1>Loan Prediction System</h1>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <table>
                            <colgroup>
                                <col span="4"></col>
                                <col span="8"></col>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td>Name</td>
                                <td>
                                    <Input
                                        type="text"
                                        name="Name"
                                        placeholder="Enter your name"
                                        style={{width:"400px"}}
                                        onChange={onChange}
                                        value={Name || ''}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>
                                    <Input
                                        type="text"
                                        name="gender"
                                        placeholder="Enter your gender"
                                        onChange={onChange}
                                        value={gender || ''}

                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Dependents</td>
                                <td>
                                    <Input
                                        type="number"
                                        name="Dependents"
                                        placeholder="Enter the number of dependents you have"
                                        onChange={onChange}
                                        value={Dependents || ''}

                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Self Employeed</td>
                                <td>
                                    <Input
                                        type="text"
                                        name="Self_Employed"
                                        placeholder="Are you self Employeed"
                                        onChange={onChange}
                                        value={Self_Employed || ''}

                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Co Applicant Income</td>
                                <td>
                                    <Input
                                        type="number"
                                        name="CoapplicantIncome"
                                        placeholder="Enter co-applicant's income"
                                        onChange={onChange}
                                        value={CoapplicantIncome || ''}

                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Loan Term</td>
                                <td>
                                    <Input
                                        type="number"
                                        name="Loan_Term"
                                        placeholder="Enter the loan term"
                                        onChange={onChange}
                                        value={Loan_Term || ''}

                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Property Area</td>
                                <td>
                                    <Input
                                        type="text"
                                        name="PropertyArea"
                                        placeholder="Enter the property area"
                                        onChange={onChange}
                                        value={PropertyArea || ''}

                                    />
                                </td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                    <div className="col-md-6">
                        <table>
                            <colgroup>
                                <col span="4"></col>
                                <col span="8"></col>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td>Age</td>
                                <td>
                                    <Input
                                        type="number"
                                        name="Age"
                                        placeholder="Enter your age"
                                        onChange={onChange}
                                        value={Age || ''}

                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Married</td>
                                <td>
                                    <Input
                                        type="text"
                                        name="Marriage"
                                        placeholder="Are you married?"
                                        onChange={onChange}
                                        value={Marriage || ''}

                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Education</td>
                                <td>
                                    <Input
                                        type="text"
                                        name="Education"
                                        placeholder="What's your highest education level?"
                                        onChange={onChange}
                                        value={Education || ''}

                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Applicant Income</td>
                                <td>
                                    <Input
                                        type="number"
                                        name="ApplicantIncome"
                                        placeholder="What's your income?"
                                        onChange={onChange}
                                        value={ApplicantIncome || ''}

                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Loan Amount</td>
                                <td>
                                    <Input
                                        type="number"
                                        name="LoanAmount"
                                        placeholder="Enter the loan amount?"
                                        onChange={onChange}
                                        value={LoanAmount || ''}

                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Credit History</td>
                                <td>
                                    <Input
                                        type="number"
                                        name="CreditHistory"
                                        placeholder="Enter your credit history"
                                        onChange={onChange}
                                        value={CreditHistory || ''}

                                    />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <Button 
                                        color="warning" 
                                        style={{width:'400px'}}
                                        onClick={onSubmit}
                                    >
                                        Predict
                                    </Button>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default FormApp;