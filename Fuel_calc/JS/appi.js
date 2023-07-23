let fuelOut =document.getElementById('fuelOut'),
    distance=document.getElementById('distance'),
    fuel=document.getElementById('fuel');



const calc=()=>{
  if(fuelOut.value!=''&&distance.value!=''){
    if(distance.value!=''){
      fuel.value=(Number(distance.value)/100*Number(fuelOut.value)).toFixed(1);
    }
  }else{
    return 0;
  }
}



fuelOut.addEventListener('input',calc);
distance.addEventListener('input',calc);
fuel.addEventListener('input',()=>{
      distance.value=(Number(fuel.value)/Number(fuelOut.value)*100).toFixed(1);

});