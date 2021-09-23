import { useState } from "react";
import PropTypes from "prop-types";
import s from "./ContactForm.module.css";

export default function ContactForm ({ submitProp }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const change = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const formSubmit = event => {
    event.preventDefault();
    submitProp({ name, number });
    reset();
  };
    const reset = () => {
    setName('');
    setNumber('');
  };
  
    return (
      <form className={s.container} onSubmit={formSubmit}>
        <label className={s.label} id={name}>Name</label>
        <input
          className={s.input}
          type="text"
          id="inputName"
          name="name"
          value={name}
          onChange={change}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <label className={s.label} id={name}>Number</label>
        <input
          className={s.input}
          id="inputNumber"
          type="tel"
          name="number"
          value={number}
          onChange={change}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
}
  
ContactForm.propTypes = {
  submitProp: PropTypes.func,
  change: PropTypes.string,
};




