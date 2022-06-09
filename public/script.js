'use strict';

//elements
const journalName = document.getElementById('journal-name');
const date = document.getElementById('date');
const page_num = document.getElementById('page-num');
const submit = document.getElementById('submit');
const data1 = document.getElementById('data1');
const data2 = document.getElementById('data2');
const data3 = document.getElementById('data3');
const curr_time = document.getElementById('current-time');

// create arrays
const time = new Date();
const timeRead = time + 'm';
(() => (curr_time.textContent = timeRead.slice(0, 24)))();

const clearAll = () => {
  journalName.value = '';
  date.value = '';
  page_num.value = '';
  data1.value = '';
  data2.value = '';
  data3.value = '';
  const inputs = document.querySelectorAll('input[type=checkbox]:checked');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
};

submit.addEventListener('click', event => {
  const journalObj = {};
  const array = [];
  const checkBoxes = document.querySelectorAll('input[type=checkbox]:checked');

  for (let i = 0; i < checkBoxes.length; i++) {
    array.push(checkBoxes[i].value);
  }
  journalObj.journal_name = journalName.value;
  journalObj.date = date.value;
  journalObj.page_num = Number(page_num.value);
  const text = [data1.value, data2.value, data3.value];
  journalObj.text = text;
  journalObj.category = array;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(journalObj),
  };
  fetch('/add_journal_page', options)
    .then(() => {
      alert('Sucessful');
    })
    .then(() => {
      clearAll();
    })
    .catch(() => {
      alert('Something Went Wrong!');
    });
});
