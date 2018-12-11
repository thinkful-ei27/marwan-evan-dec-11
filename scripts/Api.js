const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
function fetchVideos(searchTerm,callback){
    const youQuery = {
        q: searchTerm,
        key: API_KEY,
        part: 'snippet'
      };
      $.getJSON(BASE_URL, youQuery, callback)

    };
