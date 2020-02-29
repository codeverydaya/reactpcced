import React,{Component} from 'react';
import { HashRouter, BrowserRouter,Route,Switch} from 'react-router-dom';
import Life from './pages/life'
import Admin from './pages/admin'
import QButton from './pages/ui/button';
import Modal from './pages/ui/modal';
import Table from './pages/ui/table'
export default class QRouter extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <BrowserRouter>
                <Route  path='/' exact component={Life}></Route>

                <Route path='/ui'
                       render={()=>
                           <Admin>
                               <Route  path='/ui/buttons' component={QButton}></Route>
                               <Route  path='/ui/modal' component={Modal}></Route>
                               <Route  path='/ui/table' component={Table}></Route>
                           </Admin>
                       }></Route>
            </BrowserRouter>
        )
    }
}
