/* eslint-disable */

import {showAlert} from './alerts'
import axios from 'axios';

export const signup = async (name, email, password, passwordConfirm) => {

  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm
      }
    })

    if (res.data.status === 'success') {
      showAlert('success', 'Registered successfully');
      window.setTimeout(() => {
        location.assign('/overview');
      }, 1500)
    }
  } catch(err) {
    showAlert('danger', err.response.data.message)
  }
}


export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
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
      url: '/api/v1/users/logout',
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
      url: `/api/v1/notes/${id}`,

    });

    location.reload(true);

  } catch (err) {
    showAlert('danger', 'You must be logged in to delete the note')
  }
}

export const updateNote = async (id, title, body) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: `/api/v1/notes/${id}`,
      data: {
        id,
        title,
        body
      }
    })
    if (res.data.status === 'success') location.assign('/overview');
  } catch(err) {
    showAlert('danger', 'Cannot update this note. Does it belong to you?')
  }
}