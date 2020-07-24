import React, { Component } from "react";

class Form extends Component {
	constructor() {
		super();
		this.state = {
			title: "",
			year: "",
			posterImg: "",
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
    }
    
    handleAdd(event) {
        const {title, year, posterImg} = this.state
        event.preventDefault()
        this.props.addMovie(title, year, posterImg)
        this.setState({
            title: "",
            year: "",
            posterImg: ""
        })
    }

	render() {
        const {title, year, posterImg} = this.state
		return (
			<form className="Form" onSubmit={this.handleAdd}>
				<input name="title" onChange={this.handleChange} placeholder="Title" value={title}/>
				<input name="year" onChange={this.handleChange} placeholder="Year" value={year}/>
				<input
					name="posterImg"
					onChange={this.handleChange}
                    placeholder="Poster url"
                    value={posterImg}
				/>
				<button type="submit">Add Movie</button>
			</form>
		);
	}
}

export default Form;
