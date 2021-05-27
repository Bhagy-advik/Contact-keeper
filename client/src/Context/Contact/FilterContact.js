import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../Context/Contact/ContactContext';


export const FilterContact = (contact) => {

    const contactContext = useContext(ContactContext);

    const { filltered, filterContacts, clearFilter} = contactContext;

    const text = useRef('');

    useEffect(() => {
        if(filltered === null){
            text.current.value = '';
        }
    }, []);

    const onChange = e =>
    {
        if(text.current.value !== null)
        {
        filterContacts(e.target.value);
        }else{
           clearFilter();
        }
    }
    return (
        <form>
            <input ref={text} type='text' placeholder="Filter Contact" onChange={onChange}/>
        </form>
    )
}
export default FilterContact;