import React,{useState} from "react";
function Component(){
const[cars,setCars]=useState([]);
const [carYear,setYear]=useState(new Date().getFullYear())
const[carModel,setModel]=useState("")
const[carMake,setMake]=useState("")
function addCar(){
const newCar={
    year:carYear,make:carModel,model:carModel
}
setCars(c=>[...c,newCar])
setYear(new Date().getFullYear())
setModel("")
setMake("")
}
function removeCar(index){
setCars(cars.filter((_,i)=>i!==index))
}
function handleYearChange(e){
    setYear(e.target.value)
}
function handleMakeChange(e){
    setMake(e.target.value)
}
function handleModelChange(e){
    setModel(e.target.value)
}
    return(
<>
<h1>list of car objects:</h1>
<ul>
{cars.map((car,index)=><li key={index} onClick={()=>removeCar(index)}>{car.year} {car.make} {car.model}</li>)}
</ul>
<input type="number" value={carYear} onChange={handleYearChange}></input><br/>
<input type="text"  placeholder="Enter the Model" value={carModel} onChange={handleModelChange}></input><br/>
<input type="text"  placeholder="Enter the Make" value={carMake} onChange={handleMakeChange}></input>
<button onClick={addCar}>Add Car</button>
</>
    );
}
export default Component