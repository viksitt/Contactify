import React, { useEffect, useState } from 'react';
import Navbar from './componenets/Navbar'; // Fixed typo in 'componenets'
import { FiSearch } from "react-icons/fi";
import { IoIosAddCircle, IoMdTrash } from "react-icons/io";
import { db } from "./config/firebase";
import { collection, getDocs, onSnapshot } from 'firebase/firestore'; // Ensure 'collection' is imported correctly
import { FaRegUserCircle } from "react-icons/fa";
import { RiEditCircleLine } from 'react-icons/ri';
import ContactCard from './componenets/ContactCard';
import Modal from './componenets/Modal';
import AddandUpdate from './componenets/AddandUpdate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notfound from './componenets/Notfound';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const [isOpen, setopen] =useState(false);
  const onOpen =()=>{
    setopen(true);
  }
  const onClose =()=>{
    setopen(false);
  }

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts"); // Corrected variable name
      
        onSnapshot(contactRef,(snapshot)=>{
          const contactList = snapshot.docs.map((doc) => {
            return{
            id: doc.id,
            ...doc.data(),
          };
        });
          setContacts(contactList);
          return contactList
        });
        
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    getContacts();
  }, []);

  const filtercontact=(e)=>{
    const value=e.target.value;

    const contactRef = collection(db, "contacts"); // Corrected variable name
      
        onSnapshot(contactRef,(snapshot)=>{
          const contactList = snapshot.docs.map((doc) => {
            return{
            id: doc.id,
            ...doc.data(),
          };
        });
        const  filteredcontact = contactList.filter((contact)=>
          contact.name.toLowerCase().includes(value.toLowerCase())
        );
          setContacts(filteredcontact);
          return filteredcontact;
        });

  }

  return (
    <>
     <div className="bg-blu min-h-screen flex justify-center items-center">
      {/* Mobile screen boundary */}
      <div className="w-[375px] h-[667px]  rounded-3xl shadow-lg border bg-white border-white flex flex-col overflow-hidden">
    <div className="flex-grow p-4">
      <Navbar />
      <div className="flex gap-1">
        <div className="relative items-center flex grow ">
          <FiSearch className="text-black absolute text-2xl ml-2" />
          <input onChange={filtercontact}
            type="text"
            className="h-10 flex-grow rounded-md border bg-transparent bg-gray text-black pl-9"
            placeholder="Search contacts"
          />
        </div>
        <IoIosAddCircle className="text-5xl cursor-pointer text-black" onClick={onOpen} />
      </div>
      <div className="mt-4">
        {contacts.length <= 0 ?(
          <Notfound/>):(contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact}/>
        ))
        )}
      </div>
    </div>
    
    <AddandUpdate onClose={onClose} isOpen={isOpen}/>
    <ToastContainer position="bottom-center" autoClose={4000}  />
    </div>
    </div>
    
    </>
  );
};

export default App;
