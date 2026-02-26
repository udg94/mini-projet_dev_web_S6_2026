import {type FC} from 'react';
import { proteinNeeds, type typeproteinNeedsKeys } from "./proteinNeeds";

type TapbleProps = {
    collumnGoal:typeproteinNeedsKeys[];
    minWeight:number;
    maxWeight:number;
    nbRow:number;
}



function roundToHalf(value: number): number {
  return Math.round(value * 2) / 2;
}

const Table:FC<TapbleProps> = ({collumnGoal, minWeight, maxWeight, nbRow, ...props}) => {
        if (collumnGoal.length ===0){
            return(<p>Sélectionner un objectif </p>)
        }
        if (nbRow <2){
            return(<></>)
        }
    const pas = (maxWeight - minWeight)/(nbRow-1)
    const rows = Array.from({ length: nbRow }, (_, i) =>(roundToHalf(minWeight + i * pas)));

        return(
            <table>
                <thead>
                    <tr>
                        <th> poids</th>
                         {collumnGoal.map((goal) => (<th>{goal}</th>))}
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row) => {return(
                            <tr>
                                <th>{row}</th>
                                {collumnGoal.map((goal) => (<td>{Math.round(proteinNeeds[goal].min*row)}
                                    -{Math.round(proteinNeeds[goal].max*row)} g/jour</td>))}
                            </tr>
                        )}
                    )
                    
                    }
                </tbody>
            </table>
        )


}


export default Table;



