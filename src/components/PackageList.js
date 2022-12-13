import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PackageList() {
  const [packages, setPackages] = useState([]);
 
  useEffect(() => {
    getPackages();
  }, []);
 
  const getPackages = async () => {
    const response = await axios.get("http://localhost:4001/packages");
    console.log('res', response);
    setPackages(response.data);
  };
 

    return (
        <div className="columns mt-5">
      <div className="column is-half">
        <Link to="add" className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>Branch</th>
              <th>Place</th>
              <th>Website</th>
              <th>Contact</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {packages.map((user, index) => (
              <tr key={user._id}>
                <td>{user.branch}</td>
                <td>{user.place}</td>
                <td>{user.website}</td>
                <td>{user.contact}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    to={`edit/${user._id}`}
                    className="button is-info is-small mr-1"
                  > Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
}

export default PackageList;