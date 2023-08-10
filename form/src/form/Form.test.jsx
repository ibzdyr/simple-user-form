import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Form from './Form';

const mockStore = configureMockStore();
const initialState = {
    user: {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    },
};
const store = mockStore(initialState);

describe('Form Component', () => {
    it('renders form inputs and submit button', () => {
        const { getByLabelText, getByText } = render(
            <Provider store={store}>
                <Form />
            </Provider>
        );

        expect(getByLabelText('First name:')).toBeInTheDocument();
        expect(getByLabelText('Last name:')).toBeInTheDocument();
        expect(getByLabelText('Email:')).toBeInTheDocument();
        expect(getByLabelText('Message:')).toBeInTheDocument();
        expect(getByText('Submit')).toBeDisabled();
    });

    it('validates form inputs correctly', () => {
        const { getByLabelText, getByText } = render(
            <Provider store={store}>
                <Form />
            </Provider>
        );

        const firstNameInput = getByLabelText('First name:');
        const lastNameInput = getByLabelText('Last name:');
        const emailInput = getByLabelText('Email:');
        const messageTextarea = getByLabelText('Message:');
        const submitButton = getByText('Submit');

        fireEvent.change(firstNameInput, { target: { value: '' } });
        fireEvent.change(lastNameInput, { target: { value: '' } });
        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
        fireEvent.change(messageTextarea, { target: { value: 'Short' } });

        expect(submitButton).toBeDisabled();
    });
});