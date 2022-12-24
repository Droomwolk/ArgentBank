/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editNames } from '../redux/userActions';
import { toggleEdit } from '../redux/userSlice';
import Compte from '../components/compte/compte';

function UserProfile() {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const modifyForm = (data) => {
    if (!data) {
      console.log('Data missing');
    }
    else {
      dispatch(editNames(data));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass object to our main function submitForm
    const postData = {
      firstName,
      lastName,
    };
    modifyForm(postData);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{userInfo.body.firstName} {userInfo.body.lastName}</h1>
        <button onClick={() => dispatch(toggleEdit())} className="edit-button edit-toggler">Edit name</button>

        <form className="form-display form-edit-user" onSubmit={handleSubmit}>
          <div className="form-edit-inputs">
            <input type="text" id="firstname" placeholder={userInfo.body.firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <input type="text" id="lastname" placeholder={userInfo.body.lastName} onChange={(e) => setLastName(e.target.value)} required />
          </div>
          <div className="form-edit-btns">
            <input type="submit" className="edit-button form-edit-btn-self" value="Save" />
            <button type="button" onClick={() => dispatch(toggleEdit())} className="edit-button edit-button-cancel form-edit-btn-self">Cancel</button>
          </div>
        </form>

      </div>
      <h2 className="sr-only">Accounts</h2>
      <Compte title="Argent Bank Checking x8349" cash="2,082.79" balance="Available Balance" />
      <Compte title="Argent Bank Savings x6712" cash="10,928.42" balance="Available Balance" />
      <Compte title="Argent Bank Credit Card x8349" cash="184.30" balance="Current Balance" />
    </main>
  );
}

export default UserProfile;
