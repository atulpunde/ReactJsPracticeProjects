import NavBar from "./components/NavBar";
import { FaSearch } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactsList = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts;
        contactsList;
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  return (
    <div className="mx-auto max-w-[370px] px-4">
      <NavBar />
      <div className="flex justify-around items-center gap-2">
        <div className="relative flex items-center flex-grow">
          <FaSearch className="absolute ml-1 text-3xl text-white" />
          <input
            type="text"
            className="h-10 flex-grow rounded-md border border-white bg-transparent pl-10 text-white"
          />
        </div>
        <AiFillPlusCircle className="cursor-pointer text-5xl text-white" />
      </div>
    </div>
  );
};

export default App;
