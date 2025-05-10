
function calculatingResults(){   
let weightInKG =document.getElementById("UserWeight").value;
let usersName = document.getElementById("UsersName").value;
let heightCM = document.getElementById("UserHeight").value;

if(heightCM && weightInKG){
    let heightINmeters = heightCM / 100; // 1/100
let bmi = weightInKG / (heightINmeters * heightINmeters);
let conversion = weightInKG * 2.20462; //in pounds

    //toFixed() to set result to be 2 decimals
    document.getElementById("Results").textContent = `${weightInKG} kg is equal to ${conversion.toFixed(1)} lbs`;
    document.getElementById("BMI").textContent = `${usersName} BMI is ${bmi.toFixed(2)}`;
}else{
    document.getElementById("Results").textContent = "Input entered is invalid try again, may be empty";
    document.getElementById("BMI").textContent = "Input entered is invalid try again, may be empty";

}

};

