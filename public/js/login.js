/* eslint-disable */

import {showAlert} from './alerts'
import axios from 'axios';


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
