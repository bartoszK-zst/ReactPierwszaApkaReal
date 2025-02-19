function Bird(props){
    return <li>
        I am a
        <span style={{color: props.color}}> {props.color} </span>
        Bird and I do {(props.migratesForWinter) ? "" : "NOT"} migrate for winter
        </li>
        ;
}

export default Bird;