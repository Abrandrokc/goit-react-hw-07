import css from "./ContactList.module.css"
import Contact from "../Contact/Contact"

import { useSelector } from "react-redux";
import { selectFilterConsts } from "../../redux/contactsSlice";



export default function ContactList() {
  const filteredContacts = useSelector(selectFilterConsts)
    return (
    <ul className={css.ul}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact}  />
      ))}
    </ul>
  );
   
}
