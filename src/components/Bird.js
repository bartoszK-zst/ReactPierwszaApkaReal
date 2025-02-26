//musi importować komponent Legs
import Legs from './Legs.js';
function Bird(props){
    return <li>
        I am a
        <span style={{color: props.color}}> {props.color} </span>
        Bird and I do {(props.migratesForWinter) ? "" : "NOT"} migrate for winter
        *****
        <Legs hasLegs={props.hasLegs}/>
        </li>
        ;
}

export default Bird;