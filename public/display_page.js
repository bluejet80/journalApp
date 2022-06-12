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
    'Systems Theory', // 11
    'Choices', // 12
    'Books', // 13
    'Problem Solving', // 14
    'Explanation', // 15
    'Psychology', // 16
    'Glass Blowing', // 17
    'School', // 18
    'Economics', // 19
    'Drawing', // 20
    'Steps of the Journey', // 21
  ],
  [
    'Perspective', // 0
    'Image of Ourselves', // 1
    'Dreams', // 2
    'Ideas', // 3
    'Creative Perspective', // 4
    'Motivation', // 5
    'Stress', // 6
    'Joy', // 7
    'Imagination', // 8
    'The Blues', // 9
    'Spirituality', // 10
    'Distraction', // 11
    'Advice', // 12
    'Subconscious', // 13
    'Dicipline', // 14
    'Experience', // 15
    'Thankfulness', // 16
    'Strength', // 17
    'Weakness', // 18
    'Contentment', // 19
    'Ego', // 20
    'Asking Why', // 21
    'Feeling Unknown', // 22
    'Darkness', // 23
    'Honesty', // 24
    'Misunderstood', // 25
    'Something Wrong', // 26
    'Asking for Help', // 27
    'Suffering', // 28
    'Letting Go', // 29
    'Balance', // 30
  ],
  [
    'Government', // 0
    'Society', // 1
    'Media', // 2
    'Internet', // 3
    'Habits and Routines', // 4
    'Deception of Desire', // 5
    'Isreal', // 6
    'Relationships', // 7
    'Public Place', // 8
    'Freedom', // 9
    'Colorado', // 10
    'Sports', // 11
    'Safety', // 12
    'Wyoming', // 13
    'Liquor Store', // 14
    'Old Age', // 15
    'Art', // 16
    'Alchohol', // 17
    'Kansas', // 18
    'The Planet Earth', // 19
    'Youth', // 20
    'Headlines', // 21
    'Before Technology', // 22
    'Loss', // 23
    'Chaos', // 24
    'Parties', // 25
    'The Ocean', // 26
    'Space', // 27
    'Cliff', // 28
    'Alley', // 29
    'Surface', // 30
  ],
  [
    'Watching Television', // 0
    'Healthy Behavior', // 1
    'Unhealthy Behavior', // 2
    'Expression', // 3
    'Becoming Angry', // 4
    'Control', // 5
    'Sacrifice', // 6
    'Travelling and Exploration', // 7
    'Observation and Description', // 8
    'Bravery and Courage', // 9
    'Self Justification', // 10
    'Solitude', // 11
    'Self Presentation', // 12
    'Conflict', // 13
    'Accomplishment', // 14
    'Destruction', // 15
    'Organization', // 16
    'Greed', // 17
    'Love', // 18
    'Struggle', // 19
    'Waster and Excess', // 20
    'Patience', // 21
    'Hard Work', // 22
    'Exploration', // 23
    'Description', // 24
    'Relaxation', // 25
    'Physical Affection', // 26
    'Communication', // 27
    'Preventing Discomfort', // 28
    'Persistence', // 29
    'Criticism', // 30
    'Conforming', // 31
  ],
  [
    'Adaptation', // 0
    'Physical Body', // 1
    'Birds', // 2
    'Physical Forces', // 3
    'River', // 4
    'Natures Example', // 5
    'Beauty of Nature', // 6
    'Death', // 7
    'Countryside', // 8
    'The Mind', // 9
    'Trees', // 10
    'Cows', // 11
    'Hands', // 12
    'Evolution', // 13
    'Birth', // 14
    'The Senses', // 15
    'Color', // 16
    'Nurturing', // 17
    'Stars', // 18
    'Women', // 19
  ],
  [
    'Transportation', // 0
    'Logic Gates', // 1
    'Wear and Tear', // 2
    'Deconstruction', // 3
    'Build', // 4
    'Defense Mechanism', // 5
    'Time', // 6
    'Trains', // 7
    'Cars', // 8
    'Handwriting', // 9
    'Nuclear Bomb', // 10
    'Violin', // 11
    'Metal', // 12
    'A Ship', // 13
  ],
];

// functions

const getCat = function (cat_array, pg_array) {
  const newArray = [];
  pg_array.forEach(item => {
    const [a, b] = item.split('.');
    console.log(a, b);
    newArray.push(cat_array[a - 1][b]);
  });
  console.log(newArray);
  return newArray;
};

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
    const catArray = getCat(categories, item.category);
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
            <td>${catArray.join(', ')}</td>
          </tr>
        </table>
`;
    mainContain.insertAdjacentHTML('beforeend', html);
  });
})();
