import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Modal.scss'

interface ModalProps {
    updateContext: (email)=>void,
    closeModal: () => void
  }

  type EmailType = {
      id?:number,
      first_name?:string,
      last_name?:string,
      object?:string,
      text?:string
  }
const Modal:React.FC<ModalProps> = (props) => {

  const [receiver,setReceiver] = useState('');
  const [object, setObject] = useState('');
  const [text,setText] = useState('')


    const handleChange = (name:string, value:string) => {
           switch(name) {
               case 'receiver':
                    setReceiver(value)
               break;
               case 'object':
                    setObject(value)
               break;
                case 'text':
                    setText(value)
                break
                default:alert('Something went wrong')
           }
    }

    const handleSubmit = (e) => {
            e.preventDefault();

            let newEmail:EmailType = {};
            newEmail.id = Date.now();
            newEmail.first_name = 'John';
            newEmail.last_name = 'Dow';
            newEmail.object = object;
            newEmail.text = text;

            props.updateContext(newEmail);
            props.closeModal();
    }

    return (
        <div className={`modal ${'show'}`}>
            <div className="modal__content">
                <form className="send" noValidate autoComplete="off" onSubmit={ (e) =>{ handleSubmit(e)} }>
                    <h2>Send message</h2>
                    <TextField onChange={(e)=>{handleChange(e.target.name,e.target.value)}} className="input" name="receiver" id="outlined-basic" label="Reciver" variant="outlined" />
                    <TextField onChange={(e)=>{handleChange(e.target.name,e.target.value)}} required className="input" name="object" id="outlined-basic" label="Subject" variant="outlined" />
                    <TextField onChange={(e)=>{handleChange(e.target.name,e.target.value)}} required className="input" name="text" id="outlined-basic" label="Text" variant="outlined" />
                    <div className="btns-area">
                        <Button variant="contained" color="secondary" onClick={ () => {props.closeModal()}}>Cancel</Button>
                        <Button variant="contained" type="submit" color="primary">Send</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Modal