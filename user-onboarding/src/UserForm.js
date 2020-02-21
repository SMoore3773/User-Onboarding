import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import styled from 'styled-components';


const UserForm = ({ touched, errors, status}) =>{
    const [user, setUser] = useState({});
    useEffect (()=> {
        status && setUser(status);
    }, [status]);

    return (
    
    <div className ='UserForm'>
        <Form className='form'>
            <label className='formLabel'>
                Name:
                <Field className='formLabel' type='text' name='name' placeholder='Name' />
            </label>
            <label className='formLabel'>
                Email:
                <Field className='formLabel' type='email' name='email' placeholder='Email' />
            </label>
            <label className='formLabel'>
                Password:
                <Field className='formLabel' type='password' name='password' placeholder='Password' />
            </label>
            <label className='formLabel'>
                Check here to agree to our Terms of Service:
                <Field className='formLabel' type='checkbox' name='TOScheck' />
                <span className='checkmark' />
            </label>
            <button type='submit'>Join the Crew!</button>

        </Form>
        
        
    </div>
    
    
    
    )
}

export default withFormik({
    mapPropsToValues: props =>({
        name: props.name ||'',
        email: '',
        password: '',
        TOScheck: false
    }),


})(UserForm);