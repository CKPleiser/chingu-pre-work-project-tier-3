/* eslint-disable */

import {showAlert} from './alerts'
import axios from 'axios';

export const submit = async (title, body) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/notes',
      data: {
        title,
        body,
      }
    });

    if(res.data.status === 'success') location.assign('/overview')
  } catch(err) {
    showAlert('danger', err.response.data.message)
  }
}

