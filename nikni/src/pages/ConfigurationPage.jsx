import React, { useState } from 'react';
import './ConfigurationPage.css';
import { validate_Checkboxes } from '../components/Input_Validator'



function ConfigurationPage() {

    const fqes = ["Dremio","Apache_Spark","Trinio","Presto"];
    const [isChecked, setCheckedValue] = useState({Dremio: false, Apache_Spark: false, Trinio: false, Presto: false});
    const [input, setInput] = useState({
        numberInput: '', urlInput: '', intervalInput: '', queryInput: '' });
    const [errorMessage, setErrorMessage] = useState({
        numberInput: '', urlInput: '', intervalInput: '', queryInput: '' });    
    return(
    <>
   <h1>Add a configuration</h1>
   
    <div className='fqe-options'>
        <h2>Select your FQE(s)</h2>
          {fqes.map((fqe) => (
           <> <label key={fqe}><input type="checkbox" checked={isChecked.fqe}/>{fqe}</label><br/> </>
            ))}
    </div>

    <div className='query-repititions'>
       <h2>Repetition of Query Execution</h2>
       <label>Enter the amount of times you want to execute your queries [1 - 100]: </label><br/>
       <input type = "number" id = "numberInput" name = "numberInput"></input>
    </div>

    <div className="connection_details">
        <h2>Connection Details</h2>
        <label> Specify the Connection Details [URL]:</label><br></br>
        <input type="url" id ="urlInput" name ="urlInput" />
    </div>

    <div className="timeIntervals">
        <h2>Time Intervals between Query Executions</h2>
        <label> Set a time interval [ms]:</label><br/>
        <input type="number" id="intervalInput" name="intervalInput" min="0" max="1000000" required />
    </div>

    <div className="query-section">
        <h2>Enter Your Query:</h2>
        <input type="text" id="queryInput" name="queryInput" placeholder="Type your query here..." /><br/>
    </div>
    <div className="Endbutton">
        <button id="submit_button">Submit Query</button>
        <button id="remove_button">Remove Query</button><br/>
    </div>
    
   </>
)};

export default ConfigurationPage;

