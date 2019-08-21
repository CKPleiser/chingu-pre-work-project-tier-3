/* eslint-disable */

import {showAlert} from './alerts'
import axios from 'axios';

export const signup = async (name, email, password, password_confirm) => {
  console.log(name, email, password, password_confirm)

  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm: password_confirm
      }
    })

    if (res.data.status === 'success') {
      showAlert('success', 'Registered successfully');
      window.setTimeout(() => {
        location.assign('/overview');
      }, 1500)
    }
  } catch (err) {
      showAlert('danger', err.response.data.message)
  }
}


export const login = async (email, password) => {
  console.log(email, password);
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/users/login',
      data: {
        email,
        password
      }
    });

    if(res.data.status === 'success') {
      showAlert('success', 'Logged in successfully');
      window.setTimeout(() => {
        location.assign('/overview');
      }, 1500)

    }
  } catch(err) {
    showAlert('danger', err.response.data.message)
  }
}

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/users/logout',
    });

    if (res.data.status === 'success') location.assign('/');

  } catch(err) {
    showAlert('danger', 'Error logging out. Try again!')
  }
}

export const deleteNote = async (id) => {
  try {
    const res = await axios({
      method: 'DELETE',
      url: `http://localhost:3000/api/v1/notes/${id}`
    });

    location.reload(true);

  } catch (err) {
    showAlert('danger', 'You must be logged in to delete the note')
  }
}