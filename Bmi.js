import React, { useState } from 'react'
import './Bmi.css'
function Bmi() {
    const [Result,setResult]=useState("");
    const [Value,setValue]=useState("");
    const calculate=()=>{
        
        const h=parseInt(document.getElementById("ht").value);
        const w=parseInt(document.getElementById("wt").value);
        if(h && w){
            const bmi= w/ ((h / 100)^2)
            ;
            if(parseInt(bmi)<18.5){
                setResult("UnderWeight");
                setValue(bmi);
            }
            else if(bmi>18.5 && bmi<24.9){
                setResult("Normal");
                setValue(bmi);
            }
            else if(bmi>25 && bmi<29.9){
                setResult("Overweight");
                setValue(bmi);
            }
            else{
                setResult("Obese");
                setValue(bmi);
            }
        }
        else{
            setResult("Please give the input values");
            setValue("Please give the input values");
        }
      
    }
    const reset=()=>{
        document.getElementById("bmi").value="";
        document.getElementById("bmiVal").value="";
        document.getElementById("ht").value="";
        document.getElementById("wt").value="";
      }
  return (
    <div>
        
       <div class="Main-Div">
       <h2>BODY MASS INDEX CALCULATOR</h2>
           <h3>Height: <input type="number" id="ht" placeholder="Enter your height in cms" Required></input></h3>
           <h3> Weight:  <input  type="number" id="wt" placeholder="Enter your weight in kgs" Required></input></h3>
            <form> <h3 Style="margin-right:25px;">BMI Value:<input Style="margin-left:20px;" id="bmiVal" value={Value} placeholder="Here is your Body Mass Index"  ></input></h3>
                   <h3 Style="margin-left:30px;"> BMI: <input Style="margin-left:15px;" id="bmi" value={Result} placeholder="Here is your Body Mass Index"  ></input></h3>
            </form>
          <button id="cal" onClick={calculate}>Calculate</button>
          <button id="reset" onClick={reset}>Reset</button>
       </div>


    </div>
  )
}

export default Bmi