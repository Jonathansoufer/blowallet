import * as yup from 'yup';
import { Formik } from 'formik';

import React, { Component, Fragment } from 'react';
import { TextInput, Text, Button, Alert } from 'react-native';
import { PaymentText, PaymentFormView } from './styles';

export default function Form() {
  return (
    <Formik
      initialValues={{
        beneficiary: '',
        type: '',
        amount: '',
        category: '',
        description: '',
        date: '',
      }}
      onSubmit={values => Alert.alert(JSON.stringify(values))}
      validationSchema={yup.object().shape({
        type: yup.string().required(),
        beneficiary: yup.string().required(),
        amount: yup.number().required(),
        category: yup.string(),
        description: yup.string(),
        date: yup.date().required(),
      })}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <>
          <PaymentFormView>
            <PaymentText
              value={values.type}
              onChangeText={handleChange('type')}
              onBlur={() => setFieldTouched('type')}
              placeholder="Payment Type"
            />
            {touched.email && errors.email && (
              <Text
                style={{
                  fontSize: 12,
                  color: '#441771',
                  backgroundColor: '#eee',
                }}>
                {errors.type}
              </Text>
            )}
          </PaymentFormView>
          <PaymentFormView>
            <PaymentText
              value={values.beneficiary}
              onChangeText={handleChange('beneficiary')}
              onBlur={() => setFieldTouched('beneficiary')}
              placeholder="Beneficiary"
            />
            {touched.beneficiary && errors.beneficiary && (
              <Text
                style={{
                  fontSize: 12,
                  color: '#441771',
                  backgroundColor: '#eee',
                }}>
                {errors.beneficiary}
              </Text>
            )}
          </PaymentFormView>
          <PaymentFormView>
            <PaymentText
              value={values.amount}
              onChangeText={handleChange('amount')}
              onBlur={() => setFieldTouched('amount')}
              placeholder="Amount"
            />
            {touched.amount && errors.amount && (
              <Text
                style={{
                  fontSize: 12,
                  color: '#441771',
                  backgroundColor: '#eee',
                }}>
                {errors.amount}
              </Text>
            )}
          </PaymentFormView>
          <PaymentFormView>
            <PaymentText
              value={values.category}
              onChangeText={handleChange('category')}
              onBlur={() => setFieldTouched('category')}
              placeholder="Category"
            />
            {touched.category && errors.category && (
              <Text
                style={{
                  fontSize: 12,
                  color: '#441771',
                  backgroundColor: '#eee',
                }}>
                {errors.category}
              </Text>
            )}
          </PaymentFormView>
          <PaymentFormView>
            <PaymentText
              value={values.description}
              onChangeText={handleChange('description')}
              onBlur={() => setFieldTouched('catdescriptiongory')}
              placeholder="Description"
            />
            {touched.description && errors.description && (
              <Text
                style={{
                  fontSize: 12,
                  color: '#441771',
                  backgroundColor: '#eee',
                }}>
                {errors.description}
              </Text>
            )}
          </PaymentFormView>
          <PaymentFormView>
            <PaymentText
              value={values.date}
              onChangeText={handleChange('date')}
              onBlur={() => setFieldTouched('date')}
              placeholder="Date"
            />
            {touched.date && errors.date && (
              <Text
                style={{
                  fontSize: 12,
                  color: '#441771',
                  backgroundColor: '#eee',
                }}>
                {errors.date}
              </Text>
            )}
          </PaymentFormView>
          <Button
            title="ADD PAYMENT"
            disabled={!isValid}
            onPress={handleSubmit}
          />
        </>
      )}
    </Formik>
  );
}
