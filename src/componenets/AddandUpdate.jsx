import React from 'react';
import Modal from './Modal';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';
import * as yup from "yup";

// Validation schema for the form
const contactvalidation = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

const AddandUpdate = ({ isOpen, onClose, isUpdate, contact }) => {
  // Add new contact
  const addContact = async (newContact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, newContact);
      onClose();
      toast.success("Contact added successfully");
    } catch (error) {
      console.error("Error adding contact:", error);
      toast.error("Failed to add contact");
    }
  };

  // Update an existing contact
  const updateContact = async (updatedContact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, updatedContact);
      onClose();
      toast.success("Contact updated successfully");
    } catch (error) {
      console.error("Error updating contact:", error);
      toast.error("Failed to update contact");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Formik
        validationSchema={contactvalidation}
        initialValues={
          isUpdate
            ? {
                name: contact.name || "",
                email: contact.email || "",
              }
            : {
                name: "",
                email: "",
              }
        }
        onSubmit={(values) => {
          // If updating, pass contact id for the update
          if (isUpdate) {
            updateContact(values, contact.id);
          } else {
            addContact(values);
          }
        }}
      >
        <Form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <Field name="name" className="h-10 border" />
            <div className="text-red-600 text-xs">
              <ErrorMessage name="name" />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <Field name="email" className="h-10 border" />
            <div className="text-red-600 text-xs">
              <ErrorMessage name="email" />
            </div>
          </div>

          <button
            type="submit"
            className="self-end border bg-black text-white px-3 py-2"
          >
            {isUpdate ? "Update" : "Add"} contact
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default AddandUpdate;
