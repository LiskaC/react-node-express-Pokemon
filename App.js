import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { Navbar } from '../Components/Navbar';

export default class App extends Component {
render() {
  return (
 <div className="app">
   <div className="app-content">
     <Navbar />
   </div>
 </div>
  )
}
};