/* eslint-disable */
import '@babel/polyfill';
import { login, logout } from './login'

// DOM Elements;
const loginForm = document.querySelector('#login');
const logoutBtn = document.querySelector('#logout');


if(loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}

if(logoutBtn) logoutBtn.addEventListener('click', logout )


