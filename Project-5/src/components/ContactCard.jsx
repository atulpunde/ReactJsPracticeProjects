import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";

const ContactCard = ({ contact }) => {
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (error) {
      console.log("Error while deleting the contact: ", error);
    }
  };

  return (
    <div
      key={contact.id}
      className="flex items-center justify-between mt-4 rounded-lg bg-yellow p-2"
    >
      <div className="flex gap-1">
        <HiOutlineUserCircle className="text-4xl bg-orange" />
        <div>
          <h2 className="font-medium">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
        </div>
      </div>
      <div className="flex text-3xl">
        <RiEditCircleLine />
        <IoMdTrash
          className="text-orange"
          onClick={() => deleteContact(contact.id)}
        />
      </div>
    </div>
  );
};

export default ContactCard;
