/*GAME VERSION */
var errors = 0;
function generateSudoku4x4(){
    var level = 2;

    /*----------- RANDOM ARRAY FOR FIRST SQUARE --------------*/

    let array = [1,2,3,4];

    for(let i = array.length -1; i > 0; i--){
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    // Declaring Variables for first Square
    let $a, $b, $c, $d;
    $a = array[0];
    $b = array[1];
    $c = array[2];
    $d = array[3];
    // console.log($a + ", " + $b + ", " + $c + ", " + $d);

    /*----------- END --------------*/

    /*----------- DECLARING VARIABLES FOR THE OTHERS SQUARES --------------*/
    let $1C, $1D, $2C, $2D;
    let $3A, $3B, $3C, $3D;
    let $4A, $4B, $4C, $4D;
    /*----------- END --------------*/

    /*----------- RANDOM NUMBERS FOR 1C AND 1D --------------*/
    function NumerosAleatorios(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    let rd1 = NumerosAleatorios(0, 1);
    if(rd1 >= 1){
        $1C = $c;
        $1D = $d;
    } else {
        $1C = $d;
        $1D = $c;
    }
    /*----------- END --------------*/

    /*----------- RANDOM NUMBERS FOR 2C AND 2D --------------*/
    if(rd1 >= 1){
        $2C = $a;
        $2D = $b;
    } else {
        $2C = $b;
        $2D = $a;
    }
    /*----------- END --------------*/

    /*----------- CHECKING DIAGONAL 1 AND GETTING NUMBERS 3B, 4B AND 4A --------------*/
        var tempArrayDiag1file3 = [1,2,3,4];

        tempArrayDiag1file3.splice(tempArrayDiag1file3.indexOf($b),1);
        tempArrayDiag1file3.splice(tempArrayDiag1file3.indexOf($d),1);
        if(tempArrayDiag1file3[0] === $2C || tempArrayDiag1file3[0] === $1D){
            $3B = tempArrayDiag1file3[1];
        } else {
            $3B = tempArrayDiag1file3[0];
        }
        tempArrayDiag1file3.splice(tempArrayDiag1file3.indexOf($3B),1);
        $4B = tempArrayDiag1file3[0];

        var tempArrayDiag1file4 = [1,2,3,4];
        tempArrayDiag1file4.splice(tempArrayDiag1file4.indexOf($1D),1);
        tempArrayDiag1file4.splice(tempArrayDiag1file4.indexOf($2C),1);
        tempArrayDiag1file4.splice(tempArrayDiag1file4.indexOf($3B),1);
        $4A = tempArrayDiag1file4[0];
    /*----------- END --------------*/

    /*----------- CHECKING DIAGONAL 2 AND GETTING NUMBERS 3C, 4C AND 4D --------------*/
        var tempArrayDiag2file3 = [1,2,3,4];

        tempArrayDiag2file3.splice(tempArrayDiag2file3.indexOf($1C),1);
        tempArrayDiag2file3.splice(tempArrayDiag2file3.indexOf($2C),1);
        
        if(tempArrayDiag2file3[0] === $d || tempArrayDiag2file3[0] === $a){
            $3C = tempArrayDiag2file3[1];
        } else {
            $3C = tempArrayDiag2file3[0];
        }

        tempArrayDiag2file3.splice(tempArrayDiag2file3.indexOf($3C),1);
        $4C = tempArrayDiag2file3[0];

        var tempArrayDiag2file4 = [1,2,3,4];
        tempArrayDiag2file4.splice(tempArrayDiag2file4.indexOf($a),1);
        tempArrayDiag2file4.splice(tempArrayDiag2file4.indexOf($d),1);
        tempArrayDiag2file4.splice(tempArrayDiag2file4.indexOf($3C),1);
        $4D = tempArrayDiag2file4[0];
    /*----------- END --------------*/

    /*----------- GETTING 3A --------------*/
    var tempArray3square = [1,2,3,4];
        tempArray3square.splice(tempArray3square.indexOf($3B),1);
        tempArray3square.splice(tempArray3square.indexOf($4A),1);
        tempArray3square.splice(tempArray3square.indexOf($4B),1);
        $3A = tempArray3square[0];
    /*----------- END --------------*/

    /*----------- GETTING 3D --------------*/
        var tempArray4square = [1,2,3,4]; 
        tempArray4square.splice(tempArray4square.indexOf($3C),1);
        tempArray4square.splice(tempArray4square.indexOf($4C),1);
        tempArray4square.splice(tempArray4square.indexOf($4D),1);
        $3D = tempArray4square[0];
    /*----------- END --------------*/


    /*----------- LOAD VALUES IN PUZZLE UI --------------*/

    window.onload = function() {

        /* GENERATING ARRAY WITH RANDOM VALUES FOR MISSING NUMBERS */
        let removeArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

        for(let i = removeArray.length -1; i > 0; i--){
            const j = Math.floor(Math.random() * i);
            const temp = removeArray[i];
            removeArray[i] = removeArray[j];
            removeArray[j] = temp;
        }
        console.log(removeArray);

        //Change the total of elements to remove depending on the choosen level
        var totToRemove = 0; 
        if(level === 1){
            console.log('level1');
            totToRemove = 6;
        } else if (level === 2){
            console.log('level2');
            totToRemove = 8;
        } else if (level === 3){
            console.log('level3');
            totToRemove = 10;
        } else if (level === 4){
            console.log('level4');
            totToRemove = 12;
        }


        /*----------- GAME UI --------------*/

            /*----------- SOLUTIONS --------------*/
                //First Square
                document.getElementById("a_sol").innerHTML = $a;
                document.getElementById("b_sol").innerHTML = $b;
                document.getElementById("c_sol").innerHTML = $c;
                document.getElementById("d_sol").innerHTML = $d;
                    //Second Square
                document.getElementById("1C_sol").innerHTML = $1C;
                document.getElementById("1D_sol").innerHTML = $1D;
                document.getElementById("2C_sol").innerHTML = $2C;
                document.getElementById("2D_sol").innerHTML = $2D;
                    //Third Square
                document.getElementById("3A_sol").innerHTML = $3A;
                document.getElementById("3B_sol").innerHTML = $3B;
                document.getElementById("3C_sol").innerHTML = $3C;
                document.getElementById("3D_sol").innerHTML = $3D;
                    //Fourth Square
                document.getElementById("4A_sol").innerHTML = $4A;
                document.getElementById("4B_sol").innerHTML = $4B;
                document.getElementById("4C_sol").innerHTML = $4C;
                document.getElementById("4D_sol").innerHTML = $4D;
            /*----------- END SOLUTIONS --------------*/
            
            /*----------- GAME --------------*/
                //First Square
            document.getElementById("a").innerHTML = $a;
            document.getElementById("b").innerHTML = $b;
            document.getElementById("c").innerHTML = $c;
            document.getElementById("d").innerHTML = $d;
                //Second Square
            document.getElementById("1C").innerHTML = $1C;
            document.getElementById("1D").innerHTML = $1D;
            document.getElementById("2C").innerHTML = $2C;
            document.getElementById("2D").innerHTML = $2D;
                //Third Square
            document.getElementById("3A").innerHTML = $3A;
            document.getElementById("3B").innerHTML = $3B;
            document.getElementById("3C").innerHTML = $3C;
            document.getElementById("3D").innerHTML = $3D;
                //Fourth Square
            document.getElementById("4A").innerHTML = $4A;
            document.getElementById("4B").innerHTML = $4B;
            document.getElementById("4C").innerHTML = $4C;
            document.getElementById("4D").innerHTML = $4D;

            let arrayElements= ["a", "b","c","d","1C","1D","2C","2D","3A","3B","3C","3D","4A","4B","4C","4D"];
            let k = 0;
            let j;
            for(i=1;i<=totToRemove;i++){
                j = [removeArray[k]];
                console.log("j="+ arrayElements[j]);
                document.getElementById(arrayElements[j]).style.opacity = 0;
                k++;
            }


    }
    /*----------- END --------------*/

    /*----------- CHECKING  --------------*/
        var diagonal1Array = [$a,$d,$3C,$4D];
        console.log(diagonal1Array);
        var diagonal2Array = [$1D,$2C,$3B,$4A];
        console.log(diagonal2Array);
        let sumFile1 =  $a + $b + $1C + $1D;
        console.log("File 1: " + sumFile1);
        let sumFile2 = $c + $d + $2C + $2D;
        console.log("File 2: " + sumFile1);
        let sumFile3 = $3A + $3B + $3C + $3D;
        console.log("File 3: " + sumFile1);
        let sumFile4 = $4A + $4B + $4C + $4D;
        console.log("File 4: " + sumFile1);

        
        if(diagonal1Array === diagonal2Array){
            console.log("Attention: diagonals can be equals");
            errors = errors +1;
        } else {
            if(sumFile1 === sumFile2 && sumFile1 === sumFile3 && sumFile1 === sumFile4){
                console.log("Sudoku Created correctly");
            } else {
                console.log("Attention: there is some error in the puzzle");
                errors = errors +1;
            }  
        }
        


}/*END FUNCTION*/

for(let i = 0; i<1;i++)
{
    generateSudoku4x4();
    console.log("Errores = " + errors);
}
