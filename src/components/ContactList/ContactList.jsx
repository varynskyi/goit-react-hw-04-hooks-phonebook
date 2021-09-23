import PropTypes from "prop-types";
import s from "./ContactList.module.css";

const ContactList = ({ getContact, deleteContact }) => {
  return (
    <div className={s.container}>
      <ul>
        {getContact.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <span>
              {name}: {number}
            </span>
            <button
              className={s.btn}
              type="submit"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  getContact: PropTypes.array.isRequired,
  deleteContact: PropTypes.func,
};

export default ContactList;
