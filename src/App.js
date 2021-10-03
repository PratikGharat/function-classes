import React from 'react';
import './App.css';
import Function from './components/function';

import {Student,Student1} from './components/class';
 
class App extends React.Component {
  render() {
    var myStyle = {
      fontSize: 50,
      color: 'Salmon',
      
   }
     return (
        <div>
          <h1 style={myStyle}>Hi!!Pushti here Here.. !!</h1>
          <Function />
          <Student />
          <Student1 />
                    <p data-myattribute = "somevalue">Thankyou for reading..</p>
        </div>
     );
    }
  }
  export default App;
  
  