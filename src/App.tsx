import React, { useState, useEffect } from "react";
import "./App.css";
// import db from "./firebase";
import database from "./config";

function App() {
  const [customerName, setCustomerName] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");
  const [customersData, setCustomersData] = useState<Array<any>>([]);
  const [updatedCustomerName, setUpdatedCustomerName] = useState("");
  const [updatedCustomerPassword, setUpdatedCustomerPassword] = useState("");
  const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");

  const [name, setName] = useState<string>();
  const [age, setAge] = useState<string>();

  const Push = () => {
    database.ref("user").set({
      name: name,
      age: age,
    }).catch(alert);
  }

  useEffect(() => {
    // db.collection("customersData").onSnapshot((snapshot) => {
    //   setCustomersData(
    //     snapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       data: doc.data(),
    //     }))
    //   );
    // });
  }, []);

  const submit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // db.collection("customersData").add({
    //   name: customerName,
    //   password: customerPassword,
    // });

    setCustomerName("");
    setCustomerPassword("");
  };

  const updateData = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // db.collection("customersData").doc(dataIdToBeUpdated).update({
    //   name: updatedCustomerName,
    //   password: updatedCustomerPassword,
    // });

    setUpdatedCustomerPassword("");
    setUpdatedCustomerName("");
    setDataIdToBeUpdated("");
  };

  const deleteData = (id: string | undefined) => {
    // db.collection("customersData").doc(id).delete();
  };

  return (
    <div className="App">
      {!dataIdToBeUpdated ? (
        <div className="App__form">
          <input
            type="text"
            placeholder="Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            value={customerPassword}
            onChange={(e) => setCustomerPassword(e.target.value)}
          />
          <button onClick={submit}>Submit</button>
        </div>
      ) : (
        <div className="App__Updateform">
          <input
            type="text"
            placeholder="Name"
            value={updatedCustomerName}
            onChange={(e) => setUpdatedCustomerName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            value={updatedCustomerPassword}
            onChange={(e) => setUpdatedCustomerPassword(e.target.value)}
          />
          <button onClick={updateData}>Update</button>
        </div>
      )}

      <div className="App__DataDisplay">
        <table>
          <tr>
            <th>NAME</th>
            <th>PASSWORD</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>

          {customersData?.map(({ id, data }) => (
            <tr key={id}>
              <td>{data.name}</td>
              <td>{data.password}</td>
              <td>
                <button
                  onClick={() => {
                    setDataIdToBeUpdated(id);
                    setUpdatedCustomerPassword(data.password);
                    setUpdatedCustomerName(data.name);
                  }}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteData(id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className="App" style={{ marginTop: 250 }}>
          <input placeholder="Enter your name" value={name}
            onChange={(e) => setName(e.target.value)} />
          <br /><br />
          <input placeholder="Enter your age" value={age}
            onChange={(e) => setAge(e.target.value)} />
          <br /><br />
          <button onClick={Push}>PUSH</button>
      </div>
    </div>
  );
};
export default App;
