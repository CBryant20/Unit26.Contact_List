import React from "react";
import { useState, useEffect } from "react";

function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const API_URL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`;
        const response = await fetch(API_URL);
        const parsedResponse = await response.json();
        setContact(parsedResponse);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, []);

  return (
    <>
      <div>
        <h2>Selected Contact</h2>
        <p>Contact Id: {selectedContactId}</p>

        {contact && (
          <>
            <p>
              Name: <br />
              {contact.name}
            </p>
            <p>
              Phone: <br />
              {contact.phone}
            </p>
            <p>
              Email: <br />
              {contact.email}
            </p>
            <p>
              Company: <br />
              {contact.company.bs}, <br />
              {contact.company.name}
            </p>
            <p>
              Address: <br />
              {contact.address.street},{contact.address.suite},
              <br />
              {contact.address.city},{contact.address.zipcode}
            </p>
            <p>
              Website: <br />
              {contact.website}
            </p>
            <p>
              User Name: <br />
              {contact.username}
            </p>
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

export default SelectedContact;
