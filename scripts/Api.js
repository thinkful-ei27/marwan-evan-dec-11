const api = (function(){
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

  const API_KEY = 'AIzaSyDgwDsmtKujjcLVeq_ZQhveaOjQIoeeCgE';
  
  const fetchVideos = function(searchTerm,callback){
      const youQuery = {
          q: searchTerm,
          key: API_KEY,
          part: 'snippet'
        };
        $.getJSON(BASE_URL, youQuery, callback)
  
      };

      const decorateResponse = function(res){
        return res.items.map(item=> {
          return {
            id: item.id.videoId,
            title:item.snippet.title,
            thumbnail: item.snippet.thumbnails.default.url 
          }
        })
      }; 

      return {
        BASE_URL,
        API_KEY,
        fetchVideos,
        decorateResponse
      }
}())




