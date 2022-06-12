'use strict';

//elements
const mainContain = document.getElementById('node-contain');

// Category Obj
const categories = [
  [
    'Book Notes', // 0
    'Writing', // 1
    'Conditioning the Mind', // 2
    'History', // 3
    'Study Habits', // 4
    'Music', // 5
    'Developing a Skill', // 6
    'Romantic Period', // 7
    'Philosophy', // 8
    'Education', // 9
    'Math', // 10
  ],
  [
    'perspective', // 0
    'image of ourselves', // 1
    'dreams', // 2
    'ideas', // 3
    'creative perspective', // 4
    'motivation', // 5
    'stress', // 6
    'joy', // 7
    'imagination', // 8
    'the blues', // 9
    'spirituality', // 10
    'distraction', // 11
    'advice', // 12
    'subconscious', // 13
    'dicipline', // 14
    'experience', // 15
  ],
  [
    'government', // 0
    'society', // 1
    'media', // 2
    'internet', // 3
    'habits and routines', // 4
    'deception of desire', // 5
    'isreal', // 6
    'relationships', // 7
    'dark', // 8
    'freedom', // 9
    'colorado', // 10
    'sports', // 11
    'safety', // 12
    'wyoming', // 13
    'liquor store', // 14
  ],
  [
    'watching television', // 0
    'healthy behavior', // 1
    'unhealthy behavior', // 2
    'expression', // 3
    'becoming angry', // 4
    'steps of the journey', // 5
    'sacrifice', // 6
    'travelling and exploration', // 7
    'observation and description', // 8
    'bravery and courage', // 9
    'self justification', // 10
    'solitude', // 11
    'self presentation', // 12
    'conflict', // 13
    'accomplishment', // 14
    'destruction', // 15
    'organization', // 16
    'greed', // 17
    'love', // 18
    'struggle', // 19
  ],
  [
    'adaptation and evolution', // 0
    'physical body', // 1
    'birds', // 2
    'physical forces', // 3
    'river', // 4
    'natures example', // 5
    'beauty of nature', // 6
    'death', // 7
    'countryside', // 8
    'the mind', // 9
    'trees', // 10
  ],
  [
    'transportation', // 0
    'logic gates', // 1
    'wear and tear', // 2
    'deconstruction', // 3
    'build', // 4
    'defense mechanism', // 5
    'time', // 6
    'trains', // 7
    'cars', // 8
  ],
];

// functions

const getCat = function (obj, array) {};

const getData = async function () {
  const data = await fetch('/pages');
  const result = await data.json();
  return result;
  //console.log(result);
  //console.log(result.data.pages[0].journal_name);
};

(async function () {
  const res = await getData();
  const data = await res.data.pages;
  data.forEach(function (item) {
    const cat = item.category;
    const html = `
      <div class="node ltgreen">
        <table>
          <tr>
            <td>Journal Name:</td>
            <td>${item.journal_name}</td>
          </tr>
          <tr>
            <td>Page Number:</td>
            <td>${item.page_num}</td>
          </tr>
          <tr>
            <td>Date:</td>
            <td>${item.date}</td>
          </tr>
          <tr>
            <td>Thought 1:</td>
            <td>${item.text[0]}</td>
          </tr>
          <tr>
            <td>Thought 2:</td>
            <td>${item.text[1]}</td>
          </tr>
          <tr>
            <td>Thought 3:</td>
            <td>${item.text[2]}</td>
          </tr>
          <tr>
            <td>Categories:</td>
            <td>Writing, The Blues, Society, Encouragement, Trains</td>
          </tr>
        </table>
`;
    mainContain.insertAdjacentHTML('beforeend', html);
  });
})();
