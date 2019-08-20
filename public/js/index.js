/* eslint-disable */
import '@babel/polyfill';
import { login } from './login'

// DOM Elements;
const loginForm = document.querySelector('#login');


if(loginForm) {
  document.querySelector('#login').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}

