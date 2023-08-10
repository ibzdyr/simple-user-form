# simple-user-form
# Form Component Props
#### firstName: The user's first name.
#### lastName: The user's last name.
#### email: The user's email address.
#### message: The user's message.
#### updateUserData: A function to update user data in Redux store. Accepts action and payload.
#### saveUserData: A function to trigger the saving of user data in Redux store.

## Validation
The component utilizes the validator library for form input validation. The isValid variable is calculated using useMemo and ensures that all input fields meet the specified criteria

## Input Fields
The component renders input fields for first name, last name, email, and message. Each input field's value is bound to its corresponding state value, and onChange events trigger the userDataChangeHandler function to update the Redux store.

## Submit Button
The submit button is disabled until the isValid variable evaluates to true, ensuring that all input criteria are met. Clicking the button triggers the saveUserData function, dispatching the SAVE_USER_DATA action to update the Redux store.
