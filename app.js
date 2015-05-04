var app = angular.module('myapp', []); // module created "myapp"

app.controller("myappctrl", function($scope) { // The controller name "myappcntrl"
    $scope.message = 'angularjs is cool';
    $scope.list = ['comment1', 'comment2', 'comment3'];
    $scope.addcomment = function() {
        if ($scope.appmodel == null) {
            alert("Pls add some text");
        } else {
            $scope.list.push($scope.appmodel);
            $scope.message1 = 'Comment is added';
        }
    };


});










// var main = function() {
//     "use strict";

//     var addCommentFromInputBox = function() {
//         var $new_comment;

//         if ($(".comment-input input").val() !== "") {
//             $new_comment = $("<p>").text($(".comment-input input").val());
//             $new_comment.hide();
//             $(".comments").append($new_comment);
//             $new_comment.fadeIn();
//             $(".comment-input input").val("");
//         }
//     };

//     $(".comment-input button").on("click", function(event) {
//         addCommentFromInputBox();
//     });

//     $(".comment-input input").on("keypress", function(event) {
//         if (event.keyCode === 13) {
//             addCommentFromInputBox();
//         }
//     });
// };


// $(document).ready(main);
