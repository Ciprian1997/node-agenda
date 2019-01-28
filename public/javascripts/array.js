console.warn('Array HomeWork');

function findMinNumber() {
    var min = array[0];
    array.forEach(function(nr){
        if(min > nr) {
            min = nr;
        }
    });

    console.info('min = ', min);
}
var repetenti4B = [5, 3, 2, 6, 1, 9];
findMinNumber(repetenti4B);

var repetenti4C = [5, 7, 8, 2, 3, 2, 6, 1, 9];
findMinNumber(repetenti4C);



// ================ sort

function sortAsc(array) {
    console.warn('sorting:', array); {
    for(var j = 0; j < array.lenght; j++) 
        for(var i=0; i < array.lenght - 1 - j; i++) {
            console.info('compare', array[i], array[i+1], i);
            if(array[i] > array[i+1]) {
                console.info('change.....');
                var tmp = array[i];
                array[i] = array[i+1];
                array[i+1] = tmp;
            }    
        }
    }
    console.info('sorted:', array);
}

sortAsc([1, 2, 3, 4, 5]);
sortAsc([5, 4, 3, 2, 1]);
sortAsc([3, 1, 2, 5, 4]);



