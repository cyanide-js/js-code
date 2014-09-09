/**
 * Created by rahul.kandari on 06/09/14.
 */
angular.module('myModule', ['ui.bootstrap']);

function KillerCtrl($scope){

    $scope.totalCount = 0;

    $scope.inputValue = 0;

    $scope.killerNo = 0;

    $scope.count = function(){

     //   alert("count called");
        var length = $scope.inputValue;
        var startPoint = 1;
        var i = startPoint;
        var arr = [];
        while(i<=length){

            arr.push(i);
            i++;
        }

        console.log(arr);
        var j = startPoint;
        var tempArr = new Array();

        var n=0
        do{

            console.log("Saved Element:",arr[j-1]);
            var obj = arr[j-1];
            tempArr.push(obj);

            j = j+2;



           // console.log('j:'+j);

            if(j > length) {
                console.log("j value:"+j+":length:"+length);
                if(tempArr[tempArr.length-1] == arr[arr.length-1])
                {
                    j = startPoint + 1;
                }
                else
                {
                    j = startPoint;
                }

                arr = tempArr;
                length = arr.length;


                tempArr  = new Array();



                console.log("j value:"+j);
                console.log("length:"+length);
                console.log(arr);
            }
        }while(j <= length && length>1);

        console.log(arr);
        $scope.killerNo = arr[0];
    }

}
