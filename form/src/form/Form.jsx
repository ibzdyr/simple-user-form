import React, {useCallback, useMemo, useState} from 'react';
import {connect} from 'react-redux';


const Form = ({firstName, lastName, email, message, updateFirstName, updateLastName, updateEmail, updateMessage}) => {

    return <div>
        <div>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Message: {message}</p>
        </div>
        <form>
            <label htmlFor="firstName">First name:</label><br/>
            <input type="text" id="firstName" name="firstName" onChange={(e) => updateFirstName(e.target.value)}
                   required/><br/>
            <label htmlFor="lastName">Last name:</label><br/>
            <input type="text" id="lastName" name="lastName" onChange={(e) => updateLastName(e.target.value)} required/><br/>
            <label htmlFor="email">Email:</label><br/>
            <input type="email" id="email" name="email" onChange={(e) => updateEmail(e.target.value)} required/><br/>
            <label htmlFor="message">Message:</label><br/>
            <textarea id="message" name="message" rows="5" onChange={(e) => updateMessage(e.target.value)}/>
        </form>
    </div>
};
const mapStateToProps = (state) => {
    return {
        firstName: state.user.firstName,
        lastName: state.user.lastName,
        email: state.user.email,
        message: state.user.message,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateFirstName: (firstName) => dispatch({type: 'UPDATE_FIRST_NAME', payload: firstName}),
        updateLastName: (lastName) => dispatch({type: 'UPDATE_LAST_NAME', payload: lastName}),
        updateEmail: (email) => dispatch({type: 'UPDATE_EMAIL', payload: email}),
        updateMessage: (message) => dispatch({type: 'UPDATE_MESSAGE', payload: message}),
        saveUserData: () => dispatch({type: 'SAVE_USER_DATA'}), // Add this action
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);