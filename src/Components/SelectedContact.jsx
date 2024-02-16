import { useState, useEffect } from "react";
import React from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const API_URL =
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}";
        const response = await fetch(API_URL);
        const parsedResponse = await response.json();
        setContact(parsedResponse);
        console.log("Contact:", parsedResponse);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, []);
  return (
    <>
      <div className='peopleInfo'>
        <h2>Selected Contact</h2>
        <p>Contact Id: {selectedContactId}</p>

        {contact && (
          <>
            <p>Name: {contact.name}</p>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
            <p>
              Company: {contact.company.bs}, {contact.company.name}
            </p>
            <p>
              Address: {contact.address.street}, {contact.address.suite},{" "}
              {contact.address.city}, {contact.address.zipcode}
            </p>
            <p>Website: {contact.website}</p>
            <p>User Name: {contact.username}</p>
          </>
        )}

        <button
          className='backButton'
          onClick={() => setSelectedContactId(null)}
        >
          Back to List
        </button>
      </div>
    </>
  );
}
