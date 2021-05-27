import React, { useContext, useEffect } from 'react';
import FilterContact from '../../Context/Contact/FilterContact';
import Contacts  from '../Contacts/Contact';
import ContactForm from '../Contacts/ContactForm';
import AuthContext from '../../Context/Auth/AuthContext';

export const Home = () => {

    const authContext = useContext(AuthContext);
    const { loadUser } = authContext;

    useEffect(() =>{
        loadUser();

        // eslint-disable-next-line
    }, []);
    return (
        <div className='grid-2'>

            <div>

                <ContactForm />
            </div>
            <div>
                <FilterContact />
                <Contacts />
            </div>
            
        </div>
    )
}

export default Home;
