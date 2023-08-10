export const UserActions = {
    UPDATE_FIRST_NAME: 'UPDATE_FIRST_NAME',
    UPDATE_LAST_NAME: 'UPDATE_LAST_NAME',
    UPDATE_EMAIL: 'UPDATE_EMAIL',
    UPDATE_MESSAGE: 'UPDATE_MESSAGE',
    SAVE_USER_DATA: 'SAVE_USER_DATA',
};

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActions.UPDATE_FIRST_NAME:
            return { ...state, firstName: action.payload };
        case UserActions.UPDATE_LAST_NAME:
            return { ...state, lastName: action.payload };
        case UserActions.UPDATE_EMAIL:
            return { ...state, email: action.payload };
        case UserActions.UPDATE_MESSAGE:
            return { ...state, message: action.payload };
        case UserActions.SAVE_USER_DATA:
            alert('Saving data');
            return state;
        default:
            return state;
    }
};

export default userReducer;