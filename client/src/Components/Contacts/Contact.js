import React, { Fragment, useContext, useEffect } from 'react';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../Context/Contact/ContactContext';
import Spinner from '../Layout/spinner';
import { ContactItem } from './ContactItem';

export const Contact = () => {
    const contactContext = useContext(ContactContext);

    const { contacts, filltered , getContacts, loading} = contactContext;

    useEffect(() => {

        getContacts();
        //eslint-disable-next-line
    }, []);

    if( contacts!== null && contacts.length === 0 && !loading)
    {
        return <h4>Please Add a contact</h4>
    }

    return (
        <Fragment>
            {contacts !== null && !loading ? (<TransitionGroup>
                {filltered !== null ?
                filltered.map( contact => (
                    <CSSTransition key={contact._id} timeout={500} classNames="item">
                    <ContactItem  contact={contact}/></CSSTransition>)) : 
                contacts.map( contact => (
                    <CSSTransition key={contact._id} timeout={500} classNames="item">
                <ContactItem key={contact.id} contact={contact}/></CSSTransition>))}
            </TransitionGroup>) : <Spinner />}
            
        </Fragment>
    )
}
export default Contact;
