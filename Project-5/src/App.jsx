import NavBar from "./components/NavBar";
import { FaSearch } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useModalState from "./components/hooks/useModalState";
import "react-toastify/dist/ReactToastify.css";
import NotFoundContacts from "./components/NotFoundContacts";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onOpen, onClose } = useModalState();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef, (snapshot) => {
          const contactsList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactsList);
          return contactsList;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const searchContact = (e) => {
    const search = e.target.value;

    try {
      const contactsRef = collection(db, "contacts");
      onSnapshot(contactsRef, (snapshot) => {
        const contactsList = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        const searchedList = contactsList.filter((contact) =>
          contact.name.toLowerCase().includes(search.toLowerCase())
        );
        setContacts(searchedList);
        return searchedList;
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mx-auto max-w-[370px] px-4">
      <NavBar />
      <div className="flex justify-around items-center gap-2">
        <div className="relative flex items-center flex-grow">
          <FaSearch className="absolute ml-1 text-3xl text-white" />
          <input
            type="text"
            className="h-10 flex-grow rounded-md border border-white bg-transparent pl-10 text-white"
            onChange={searchContact}
          />
        </div>
        <AiFillPlusCircle
          onClick={onOpen}
          className="cursor-pointer text-5xl text-white"
        />
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {contacts.length == 0 ? (
          <NotFoundContacts />
        ) : (
          contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        )}
      </div>

      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default App;
