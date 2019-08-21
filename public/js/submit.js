/* eslint-disable */

import {showAlert} from './alerts'
import axios from 'axios';

export const submit = async (title, body) => {
  console.log(title, body);
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/notes',
      data: {
        title,
        body,
      }
    });

    if(res.data.status === 'success') location.reload(true)
  } catch(err) {
    showAlert('danger', err.response.data.message)
  }
}