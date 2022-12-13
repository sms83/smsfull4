import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import TourismService from "./../services/TourismService";
import axios from "axios";
const AddPackage = () => {

    const [branch, setBranch] = useState("");
    const [place, setPlace] = useState("");
    const [website, setWebsite] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const savePackage = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:4000/packages", {
          branch,
          place,
          website,
          contact,
          email
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <div className="columns mt-5">
        <div className="column is-half">
        <Link to="/" className="button is-link">
          Back
        </Link>
          <form onSubmit={savePackage}>
            <div className="field">
              <label className="label">Branch</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="Branch"
                  value={branch}
                  required
                  onChange={(e) => setBranch(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Place</label>
              <div className="control">
              <div className="select is-fullwidth">
              <select
              value={place}
              required
              onChange={(e) => setPlace(e.target.value)}>
                  <option value="">SELECT</option>
                  <option value="Andaman">Andaman</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Dubai">Dubai</option>
              </select>
              </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Website</label>
              <div className="control">
              <input
                  type="text"
                  className="input"
                  placeholder="website"
                  required
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Contact</label>
              <div className="control">
              <input
                  type="text"
                  className="input"
                  placeholder="contact"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
              <input
                  type="text"
                  className="input"
                  placeholder="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button type="submit" className="button is-success">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}

export default AddPackage;