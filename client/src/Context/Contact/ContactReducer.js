import {
    GET_CONTACT,
    ADD_CONTACT,
    CONTACT_ERROR,
    DELETE_CONTACT,
    CLEAR_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER
} from '../types';

export default (state, action) => {
    switch(action.type){
        case GET_CONTACT:
            return {
                ...state,
                contacts: action.payload,
                loading: false
            }
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [ action.payload, ...state.contacts],
                loading: false
            };
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map( contact => contact._id === action.payload._id ? action.payload : contact),
                loading: false
            };
        case FILTER_CONTACT:
            return {
                ...state,
                filltered: state.contacts.filter( contact =>{
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return contact.name.match(regex)  || contact.email.match(regex);
                })
            };
        case CLEAR_FILTER:
            return {
                ...state,
                filltered: null
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter( contact => contact._id !== action.payload),
                loading: false
        
            };
        case CLEAR_CONTACT:
            return {
                ...state,
                contacts: null,
                filltered: null,
                error: null,
                current: null
            }

        case SET_CURRENT:
            return  {
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        case CONTACT_ERROR:
            return{
                ...state,
                error: action.payload

               };
        default:
            return state;
    }
}