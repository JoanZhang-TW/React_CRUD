import React,{Component} from 'react';


class Form extends Component {
    initialState = {
       name: '',
       job: '',
    }

    state = this.initialState

    handleChange = (event) => {
        const {name,value} = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
         const {name,job} = this.state;

        return(
        <from>
            <label htmlFor="name">Name</label>
            <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange} />
            <label htmlFor="job">Job</label>
            <input
            type="text"
            name="job"
            id="job"
            value={job}
            onChange={this.handleChange} />
            <input type="button" value="Submit" onClick={this.submitForm}/>
        </from>)
    };

}

export default Form


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
