import React, {useCallback, useMemo} from 'react';
import {connect} from 'react-redux';
import validator from 'validator';
import {UserActions} from "../store/reducers/userReducer";

const Form = ({
                  firstName,
                  lastName,
                  email,
                  message,
                  updateUserData,
                  saveUserData
              }) => {

    const userDataChangeHandler = useCallback((e, action) => {
        updateUserData(action, e.target.value)
    }, [])

    const isValid = useMemo(() => validator.isLength(firstName, {min: 1})
        && validator.isLength(lastName, {min: 1})
        && validator.isEmail(email, {min: 1})
        && validator.isLength(message, {min: 10}), [firstName, lastName, email, message])

    return <div>
        <div>
            <h1>First name: {firstName}</h1>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Message: {message}</p>
        </div>
        <form>
            <label htmlFor="firstName">First name:</label><br/>
            <input type="text" id="firstName" name="firstName"
                   onChange={(e) => userDataChangeHandler(e, UserActions.UPDATE_FIRST_NAME)}
                   required/><br/>
            <label htmlFor="lastName">Last name:</label><br/>
            <input type="text" id="lastName" name="lastName"
                   onChange={(e) => userDataChangeHandler(e, UserActions.UPDATE_LAST_NAME)} required/><br/>
            <label htmlFor="email">Email:</label><br/>
            <input type="email" id="email" name="email"
                   onChange={(e) => userDataChangeHandler(e, UserActions.UPDATE_EMAIL)} required/><br/>
            <label htmlFor="message">Message:</label><br/>
            <textarea id="message" name="message" rows="5"
                      onChange={(e) => userDataChangeHandler(e, UserActions.UPDATE_MESSAGE)}/><br/>
            <button disabled={!isValid} onClick={saveUserData}>Submit</button>
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
        updateUserData: (action, payload) => dispatch({type: action, payload: payload}),
        saveUserData: () => dispatch({type: 'SAVE_USER_DATA'}),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);