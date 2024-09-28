import React from "react";

const NotFoundContacts = () => {
  return (
    <div className="flex h-screen items-start justify-center gap-4 my-6">
      <div>
        <img src="/user-icon.png" alt="User icon" />
      </div>
      <h3 className="text-white text-2xl">Contacts not found</h3>
    </div>
  );
};

export default NotFoundContacts;
