import React,{Component} from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {createUser} from '../redux/store'
import {connect} from 'react-redux'
import './Form.scss'

interface FormState {
    email:string,
    password:string
    mode:string,
    title:string,
    btnName:string,
    error:boolean,
    errorPass:string,
    errorEmail:string
}
interface FormProps {
   createUser: (user:any) => void,
   setLoged: (value:boolean) =>void,
   user:userType,
   title:string,
   mode:string
}
type userType = {
    email?:string,
    pass?:string
}
class Form extends Component<FormProps,FormState> {
    constructor(props:FormProps) {
        super(props);

        this.state = {
                email:'',
                password:'',
                mode:'',
                title:'',
                btnName:'',
                error: false,
                errorPass: '',
                errorEmail:'',
        }
    }
    componentDidMount() {
        let btnName = this.props.mode === 'signUp' ? 'Create' : 'Log In';
        this.setState({btnName,title:this.props.title,mode:this.props.mode})
    }

    componentDidUpdate(prevProps:FormProps){
      
        let btnName = this.props.mode === 'signUp' ? 'Create' : 'Log In';
        if (prevProps.mode !== this.props.mode) {
            this.setState({title:this.props.title,mode:this.props.mode,email:'',password:'',btnName})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        let email = this.state.email;
        let pass = this.state.password;
        switch(this.state.mode) {
            case 'signIn':
                let valid = this.isValidete(email,pass);
                if(valid) {
                    this.props.setLoged(true)
                }
                break;
            case 'signUp':
                let user:userType = {};
                user.email = email;
                user.pass = pass;
                this.props.createUser(user)  
                break;
            default:alert('Something went wrong')
        }
             
    }
    handleChange(name:string, value:string){
      this.setState<never>({
          [name]:value
      })
    }

    isValidete(email:string,pass:string) {
        this.setState({error:false, errorEmail:'', errorPass:''})

        let valide = false;

        let userEmail = this.props.user.email;
        let userPass = this.props.user.pass;

        if (userEmail === email) {

            if (userPass === pass) {
                valide = true;
            } else {
                this.setState({error:true, errorPass:'Wrong passsword value'})
            }
        } else {
            this.setState({error:true, errorEmail:'Wrong email'})
        }
        
        return valide

    }

    render() {
        return(
            <form className={`form ${this.props.mode}`} noValidate autoComplete="off" onSubmit={(e) =>{this.handleSubmit(e) }}>
                <h2>{this.state.title}</h2>
                <div className="input">
                <Input placeholder="Your email"
                       name="email" 
                       onChange={(e) => {this.handleChange(e.target.name, e.target.value)}}
                       value={this.state.email}
                        inputProps={{ 'aria-label': 'description' }} />
                {this.state.error && <span className="errorMsg">{this.state.errorEmail}</span>}
                </div>
                <div className="input">
                <Input placeholder="Your password"
                       name="password" 
                       type="password"
                       value={this.state.password}
                       onChange={(e) => {this.handleChange(e.target.name, e.target.value)}}
                         inputProps={{ 'aria-label': 'description' }} />
                         {this.state.error && <span className="errorMsg">{this.state.errorPass}</span> }
                </div>
            
                <Button variant="contained" type="submit">{this.state.btnName}</Button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
          createUser: (user) => dispatch(createUser(user)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form)