import React from 'react';

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.title}</td>
      <td>{contact.description}</td>
      <td>{contact.markdown}</td>
      <td>{contact.createdAt}</td>

      <td>
        <button
          type='button'
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type='button' onClick={() => handleDeleteClick(contact._id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
