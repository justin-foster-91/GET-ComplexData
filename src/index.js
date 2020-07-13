import $ from 'jquery';

function getAPI(userSearch, searchNum){
  const myAPI = 'hp3Q1Nh9Fhehjw9KGIvt8ZBVULqm4UVaCBcRwq7U';
  fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${userSearch}&limit=${searchNum}&api_key=${myAPI}`)
  .then(results => results.json())
  .then(resultsJson => resultsTemplate(resultsJson));
};

function resultsTemplate(resultsJson){
  let resultsHTML = '';
  resultsJson.data.forEach(parks => {
    resultsHTML += `<li>Park Name: ${parks.fullName} <br> Description: ${parks.description} <br> URL: ${parks.url}</li>`;
  });
  render(resultsHTML);
};

function handleSearch(){
  $('#searchForm').on('click', event =>{
    event.preventDefault();
    let userSearch = $('#mainInput').val();
    let searchNum = $('#searchNum').val();
    console.log(userSearch)
    getAPI(userSearch, searchNum)
  })
};

function render(html){
  $('div').html(
    `<h2>Parks by State:</h2>
    <ul> ${html} </ul>`
  )
};

function handleMain(){
  handleSearch();
}

$(handleMain);