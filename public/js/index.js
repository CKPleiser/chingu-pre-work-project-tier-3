/* eslint-disable */
import '@babel/polyfill';
import { login, logout, deleteNote } from './login'
import { submit } from './submit'

// DOM Elements;
const loginForm = document.querySelector('#login');
const submitForm = document.querySelector('#submit_note');
const logoutBtn = document.querySelector('#logout');
const editBtn = document.querySelector('#edit');
const deleteButtons = document.querySelectorAll('.btn-delete');


if(loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}

if(logoutBtn) logoutBtn.addEventListener('click', logout )

if(deleteButtons.length) {
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', function() {
      const id = this.getAttribute("data-id");
      deleteNote(id);
    })
  }
}

if(submitForm) {
  submitForm.addEventListener('submit', e => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const password = document.getElementById('note').value;

    submit(title, password);
  })
}