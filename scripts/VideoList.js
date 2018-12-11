const videoList = (function () {
 
const generateListItem = function (video) {
    return `<li data-video-id="${video.id}"> 
  <img src="${video.thumbnail}">
  <h1>${video.title}</h1></li>
  `;
  };

  const render = function () {
    const videos = store.videos;
    const htmlVideos = videos.map(video => generateListItem(video));
  
    $('.results').html(htmlVideos);
  };

  const handleFormSubmit = function () {


  $('form').submit((event) => {
    event.preventDefault();
    console.log('clicked');
    const inputVal = $('#search-term').val();
    $('#search-term').val('');
    console.log(inputVal);
    api.fetchVideos(inputVal, (res) => {
      api.decorateResponse(res);
      store.setVideos(api.decorateResponse(res));
      render();
    });
  });
}

const bindEventListeners = function (){
    handleFormSubmit()
}

return {
generateListItem,
render,
handleFormSubmit,
bindEventListeners
}

}())
