/* eslint-disable */
import '@babel/polyfill';
import { signup, login, logout, deleteNote, editNote } from './login'
import { submit } from './submit'

// DOM Elements;
const signupForm = document.querySelector('#signup');
const loginForm = document.querySelector('#login');
const submitForm = document.querySelector('#submit_note');
const logoutBtn = document.querySelector('#logout');
const deleteButtons = document.querySelectorAll('.btn-delete');
const editButtons = document.querySelectorAll('.btn-edit');

if(signupForm) {
  signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const password_confirm = document.getElementById('password_confirm').value;
    signup(name, email, password, password_confirm);
  })
}

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

// if(editButtons.length) {
//   for (let i = 0; i < editButtons.length; i++) {
//     editButtons[i].addEventListener('click', function() {
//       const id = this.getAttribute("data-id");
//       editNote(id);
//     })
//   }
// }

if(submitForm) {
  submitForm.addEventListener('submit', e => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const password = document.getElementById('note').value;

    submit(title, password);
  })
}