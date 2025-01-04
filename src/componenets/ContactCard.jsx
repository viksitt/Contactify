import React, { useState } from 'react';
import { RiEditCircleLine } from 'react-icons/ri';
import { IoMdTrash } from 'react-icons/io';
import { FaRegUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import AddandUpdate from './AddandUpdate';
import SendMailButton from './SendMailButton'; // Import the SendMailButton component

const ContactCard = ({ contact }) => {
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, 'contacts', id));
      toast.success('Contact Deleted Successfully');
    } catch (error) {
      console.error('Error deleting contact:', error);
      toast.error('Failed to delete contact');
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="flex items-center justify-between bg-yellow p-2 my-2 rounded-lg"
      >
        <FaRegUserCircle className="text-4xl text-orange" />
        <div className="text-black ml-4 flex-grow">
          <h2 className="font-bold text-xl">{contact.name}</h2>
          <p>{contact.email}</p>
        </div>
        <div className="flex gap-2 text-black">
          <RiEditCircleLine
            onClick={onOpen}
            className="cursor-pointer text-3xl"
          />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="cursor-pointer text-3xl text-orange"
          />
         <SendMailButton
          email={contact.email}
          subject={`Hello ${contact.name}`}
          body="I wanted to reach out to discuss..."
        />
        </div>
      </div>
      <AddandUpdate contact={contact} isUpdate  isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ContactCard;
