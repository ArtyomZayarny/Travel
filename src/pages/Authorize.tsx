import React,{Component} from 'react'
import Form from '../components/Form'
import Home from './Home'
import {connect} from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";


type AuthorizeState = {
    haveAccount:boolean,
    isLoged:boolean
}
type userType = {
    email?:string,
    pass?:string
}
interface AuthorizeProps {
    user: userType
}

class Authorize extends Component<AuthorizeProps,AuthorizeState>{
    constructor(props:AuthorizeProps) {
          super(props)
            this.state = {
                haveAccount : false,
                isLoged:false
            }
    }
       
    componentDidUpdate(prevProps:{user:userType}) {
        //Check if user is signup
        if (this.props.user.email !== prevProps.user.email) {
            this.setState({haveAccount:true})
        }
     
    }
    setLoged = (value:boolean) =>{
        this.setState({isLoged:value})
    }
    render() {

        return(
            <>
               <Router>
                <Route exact path="/">
                        {this.state.isLoged ? <Redirect to="/home" /> : 
                        this.state.haveAccount ? <Form mode='signIn' title="Log in" setLoged={this.setLoged}/> :
                                                 <Form mode='signUp' title="Create an account"/> 
                        }
                    </Route>
                    <Switch>
                        <Route exact path="/home">
                            <Home />
                    </Route>
                    </Switch>
               </Router>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps,null)(Authorize);