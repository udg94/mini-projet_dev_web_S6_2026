import Input from './input';
import Table from './Table';
import { proteinNeedsKeys, type typeproteinNeedsKeys } from "./proteinNeeds";
import { useState } from "react";





function App() {

    const [poidsMin, setPoidsMin] = useState(50);
    const [poidsMax, setPoidsMax] = useState(90);
    const [nbLignes, setNbLignes] = useState(5);

    const [checkedGoals, setCheckedGoals] = useState<typeproteinNeedsKeys[]>([]);

    function checkboxonChange(e:React.ChangeEvent<HTMLInputElement>){
       if (e.target.checked) {
            // ajouter
            setCheckedGoals((prev) => [...prev, e.target.value]);
          } else {
            // retirer
            setCheckedGoals((prev) =>
              prev.filter((g) => g !== e.target.value)
            );
          }
    }

  return (

    // generation tableau
    <div id="content" className='center center-column'>
        <div>
          <div id='checkbox' className='box center center-column'>
            {proteinNeedsKeys.map((proteinNeedsKey)=> <Input type="checkbox" name={proteinNeedsKey} 
              value={proteinNeedsKey} checked={checkedGoals.includes(proteinNeedsKey)} 
              onChange={(e) => checkboxonChange(e)} />)}
          </div>
          <div id='' className='box center'>
            <Input type="number" name="poid min" value={poidsMin} min={0} max={poidsMax} onChange={(e)=> setPoidsMin(Math.min(Math.max(Number(e.target.value),0),poidsMax))}/>
            <Input type="number" name="poid max" value={poidsMax} min={poidsMin} onChange={(e)=> setPoidsMax(Math.max(Number(e.target.value),poidsMin))}/>
            <Input type="number" name="nombre de ligne" value={nbLignes} min={2} max={100} onChange={(e)=> setNbLignes(Math.min(Math.max(Number(e.target.value),2),100))}/>
          </div>
          <div className='box center'>
            <Table collumnGoal={checkedGoals} minWeight={poidsMin} maxWeight={poidsMax} nbRow={nbLignes} />
          </div>
          
        </div>
    </div>
  );
}

export default App;
