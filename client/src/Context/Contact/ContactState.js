import React, { useReducer } from 'react';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import axios from 'axios';
import {
    GET_CONTACT,
    ADD_CONTACT,
    CONTACT_ERROR,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_CONTACT,
    CLEAR_FILTER
} from '../types';

const ContactState = props =>{
    const initialState ={
        contacts: null,
        current: null, 
        filltered: null,
        error: null
    };
    const [ state, dispatch ] =  useReducer(ContactReducer, initialState);

    //Get Contact

    const getContacts = async () =>{
        
        try {
            const res = await axios.get('/api/contact');
           dispatch({ 
               type: GET_CONTACT, 
               payload: res.data});

        } catch (err) {
            dispatch({ 
                type: CONTACT_ERROR, 
                payload: err.response.msg })
            
        }
    }

     //Add contact

     const addContact = async contact =>{
         const config = {
             headers: {
                 'Content-Type' : 'application/json'
             }
         }
         try {
             const res = await axios.post('/api/contact', contact, config);
            dispatch({ type: ADD_CONTACT, payload: res.data});

         } catch (err) {
             dispatch({ type: CONTACT_ERROR, payload: err.response.msg })
             
         }
     }

     //Delete contact

     const deleteItem = async id => {
        try {
            await axios.delete(`/api/contact/${id}`);

            dispatch({ type: DELETE_CONTACT, payload: id});

        } catch (err) {
            dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
            
        }
         
     }
      //Update Contact
      const updateContact = async contact =>
      {
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        try {
            const res = await axios.put(`/api/contact/${contact._id}`, contact, config);
           dispatch({ type: UPDATE_CONTACT, payload: res.data});

        } catch (err) {
            dispatch({ type: CONTACT_ERROR, payload: err.response.msg })
            
        }
         
      }
 
     //clear contact
     const clearContact = ()=>{
        dispatch({ type: CLEAR_CONTACT });
    }

     //Set current contact

     const setCurrent = contact =>
     dispatch({ type: SET_CURRENT, payload: contact});

     //Clear current contact

     const clearCurrent = ()=>{
         dispatch({ type: CLEAR_CURRENT });
     }

    
     //Filter Contact

     const filterContacts = text => {
         dispatch({ type: FILTER_CONTACT, payload: text });
     }

     //Clear Filter
     const clearFilter = () =>
     {
         dispatch({ type: CLEAR_FILTER});
     }

     return (
         <ContactContext.Provider
         value = {{
             contacts: state.contacts,
             current: state.current,
             filltered:state.filltered,
             error: state.error,
             getContacts,
             addContact,
             deleteItem,
             setCurrent,
             clearCurrent,
             updateContact,
             filterContacts, 
             clearFilter,
             clearContact
         }}>
             {props.children}

         </ContactContext.Provider>
     );
};

export default ContactState;