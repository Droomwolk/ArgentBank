/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { userLogin } from '../../redux/userActions';
import { toggleTask } from '../../redux/userSlice';
import '../../scss/main.scss'

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      email,
      password,
    };
    submitForm(postData);
  };

  const submitForm = (data) => {
    console.log(data);
    dispatch(userLogin(data));
  };

  useEffect(() => {
    if (userInfo) {
      navigate('/profile');
    }
  }, [navigate, userInfo]);

  return (
    <main className="login">
      <section className="login__content">
        <FontAwesomeIcon icon={faUserCircle} size="2xl" />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="login__content-input">
            <label htmlFor="email" className="login__content-input-label">Username</label>
            <input type="text" id="email" className="login__content-input-champs" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="login__content-input">
            <label htmlFor="password" className="login__content-input-label">Password</label>
            <input type="password" id="password" className="login__content-input-champs" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="login__content-remember">
            <input type="checkbox" id="remember-me" />
            <label className="login__content-remember-label" htmlFor="remember-me" onClick={() => dispatch(toggleTask())}>Remember me</label>
          </div>
          <input type="submit" className="login__content-button" value="Sign In" disabled={loading} />
        </form>
      </section>
    </main>
  );
}

export default LoginPage;
