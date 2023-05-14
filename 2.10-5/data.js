(
    function(){
        angular.module('youtubeApp',[]);

   
})();
(function(){

    angular
    .module('youtubeApp')
    .controller('mainController',mainController);

    function mainController(youtubeSevice){

        var vm = this;
        vm.videoListing = [];
        vm.message = "Youtube Data API with AngularJS";

        function showVideo(){
            youtubeService.getVideo().success(function (data) {
                vn.videoListing = data.items;
                
            });
        }
        showVideo();
    
    
    }
 }   );

 (function (){
    angular.module('youtubeApp');
    .factory('youtubeService',youtubeService);

    function youtubeService($http){
        var apiKey = "AIzaSyCO_f4mE8n4Pw1R0XN3xUZO1tXUAXHuCHw",
        apiURL = "https://www.googleapis.com/youtube/v3/search?videoEmbeddable=true&order=date&part=snippet&channelId=UCWu91J5KWEj1bQhCBuGeJxw&type=video&maxResults=50&key="
        + apiKey,
        youtubeFactory={};

        youtubeFactory.getVideo = function(){
            return $http.get(apiURL);

        };
        return youtubeFactory;

    }
 }

 );