import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class StudentInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            mobileNumber: "",
            city: "",
            state: "",
            zip: "",
            email: "",
            password: "",
            gender: "",
            branch: "",
            college: ""
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { firstName, lastName, mobileNumber, city, state, zip, email, password, gender, branch, college } = this.state;
        if (!firstName || !lastName || !mobileNumber || !city || !state || !zip || !email || !password || !gender || !branch || !college) {
            alert("Please fill all fields");
        } else {
            // Handle form submission logic here
            console.log(this.state);
        }
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-center mt-5">
                    <form className="shadow-lg p-3 mb-5 bg-body rounded pt-4" onSubmit={this.handleSubmit}>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label">First name</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label">Last name</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label">Mobile Number</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" name="mobileNumber" value={this.state.mobileNumber} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="inputCity" className="form-label">City</label>
                                <div>
                                    <input type="text" className="form-control" name="city" value={this.state.city} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputState" className="form-label">State</label>
                                <select name="state" className="form-select" value={this.state.state} onChange={this.handleChange}>
                                    <option value="">--select--</option>
                                    <option value="AP">AP</option>
                                    <option value="MP">MP</option>
                                    <option value="TN">TN</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label htmlFor="inputZip" className="form-label">Zip</label>
                                <input type="text" className="form-control" name="zip" value={this.state.zip} onChange={this.handleChange} />
                            </div>
                        </div>
                        <br />
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
                            </div>
                        </div>
                        <fieldset className="row mb-3">
                            <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" value="Male" onChange={this.handleChange} />
                                    <label className="form-check-label">Male</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" value="Female" onChange={this.handleChange} />
                                    <label className="form-check-label">Female</label>
                                </div>
                            </div>
                        </fieldset>
                        <div className="row mb-3">
                            <label htmlFor="branch" className="col-sm-2 col-form-label">Branch</label>
                            <div className="col-sm-10">
                                <select name="branch" className="form-select" value={this.state.branch} onChange={this.handleChange}>
                                    <option value="">--select--</option>
                                    <option value="CSE">CSE</option>
                                    <option value="MECH">MECH</option>
                                    <option value="EEE">EEE</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="clg" className="col-sm-2 col-form-label">College</label>
                            <div className="col-sm-10">
                                <select name="college" className="form-select" value={this.state.college} onChange={this.handleChange}>
                                    <option value="">--select--</option>
                                    <option value="AITS-KADAPA">AITS-KADAPA</option>
                                    <option value="AITS-RAJAMPET">AITS-RAJAMPET</option>
                                    <option value="KSRM-KADAPA">KSRM-KADAPA</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default StudentInfo;
