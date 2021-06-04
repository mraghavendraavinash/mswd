import React, {useState} from 'react';


const Statistic = (props) => {
    return (
        <p>{props.text} {props.value}</p>
    )
}

const Statistics = (props) => {
    const all = props.good  + props.bad + props.netural
    const average = (props.good  + (props.bad*-1))/all
    const positive = (props.good )/all *100
    if(all===0){
        return (
            <p>Feedbacks weren't given by the customers right now</p>
        )
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><Statistic text="good "  /></td>
                        <td><Statistic text=":"value={props.good } /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="netural"  /></td>
                        <td><Statistic text=":"value={props.netural} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="Bad"  /></td>
                        <td><Statistic text=":"value={props.bad}/></td>
                    </tr>
                    <tr>
                        <td><Statistic text="Total" /></td>
                        <td><Statistic text=":"value={all} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="Average " /></td>
                        <td><Statistic text=":"value={average}  /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="Positivity" /></td>
                        <td><Statistic text=":"value={positive} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.event}>{props.text}</button>
    )
}
const App = () => {
    const [good , setgood ] = useState(0)
    const [netural, setnetural] = useState(0)
    const [bad, setBad] = useState(0)

    
    return (
        <div>
            <h2> Hello WELCOME To Unicafe Hope Have a good day</h2>
            <h2> Please give your feedback it helps us to improve:</h2>
            <div>
                <Button event={()=> setgood (good +1)} text="good " />
                <Button event={()=> setnetural(netural+1)} text="netural" />
                <Button event={()=> setBad(bad+1)} text="Bad" />
                                
            </div>
            <br></br>
            <br></br>
            <h4>Review Statics Are Shown Below </h4>
            <Statistics good ={good } bad ={bad} netural={netural} />
        </div>
    )
}



export default App