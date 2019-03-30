import React, {Component} from 'react';
import classes from './ContactForm.css';
import axios from 'axios';

const API_PATH = 'http://localhost:3000/api/contact/index.php';
// const API_PATH = '../../../../api/contact/index.php';


class ContactForm extends Component {
    state = {
        fname: '',
        lname: '',
        email: '',
        message: '',
        mailSent: false,
        error: null
      }

   handleFormSubmit=( e )=> {
       console.log('hi')
    e.preventDefault();
  axios({
    method: 'post',
    url: `${API_PATH}`,
    headers: { 'content-type': 'application/json' },
    data: this.state
  })
    .then(result => {
        console.log('hilo')
      this.setState({
        mailSent: result.data.sent
      })
    })
    .catch(error =>{
        this.setState({ error: error.message })
        console.log(error.message)
    } );
};



render(){
    return(
        <div className={classes.ContactForm}>
            <p>Contact Me</p>
        <div>
        <form action="#">
            <label>First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." 
                 value={this.state.fname}
                 onChange={e => this.setState({ fname: e.target.value })}
                />
            <label>Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." 
                value={this.state.lname}
                onChange={e => this.setState({ lname: e.target.value })}
                />
            <label>Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" 
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                />
            <label>Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."
                onChange={e => this.setState({ message: e.target.value })}
                value={this.state.message}
                ></textarea>
            <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
            <div>
                {this.state.mailSent  &&
                  <div className="sucsess">Thank you for contcting me.</div>
                }
                {this.state.error  &&
                  <div className="error">Sorry we had some problems.</div>
                }
                </div>
            </form>
            </div>
        </div>
    )
}
   
}
export default ContactForm