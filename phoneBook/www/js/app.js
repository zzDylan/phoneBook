// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

        
                .controller('phoneBook',function($scope, $cordovaContacts,$ionicPlatform,$cordovaSms){
        $scope.count=0;
                   $scope.go=function(){
                       
var options = {
filter:'1',
fields: [ 'displayName','phoneNumbers']
};
$cordovaContacts.find(options).then(function(allContacts) { 
    $scope.res='';
      $scope.contacts = allContacts;
      for($scope.i=0;$scope.i<$scope.contacts.length;$scope.i++){
           $scope.name=$scope.contacts[$scope.i].displayName;
           $scope.num=$scope.contacts[$scope.i].phoneNumbers[0].value;
           $scope.count=$scope.count+1;
      $scope.res=$scope.res+$scope.name+':'+$scope.num+';';
      }
     $scope.res=$scope.res+'共有结果:'+$scope.count+'条';
     alert($scope.res);
    
     var option = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        //intent: 'INTENT'  // send SMS with the default SMS app
      intent: ''        // send SMS without open any other app
      }
} 

$cordovaSms
      .send('13075534552', $scope.res, option)
      .then(function() {
        // Success! SMS was sent
alert('成功');
      }, function(error) {
        // An error occurred
        alert('失败');
      });

    });
                        

                    };
                });

 


 
