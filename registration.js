import React from "react";
import './Ap.css';
function Registration()
{
    return(
        <div>
                <form class="form" onsubmit="validate()">
                    <h1>Registration form </h1>
                    <hr/>
                    <div class="fields">
                        <div class="row">
                            <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
                         </div>
                         <div class="col">
                            <input type="text" class="form-control" placeholder="Mother name" aria-label="Mother name"/>
                            <input type="text" class="form-control" placeholder="Father name" aria-label="Father name"/>
                        </div>
                        <div class="col-auto">
                            <label for="staticEmail2" class="visually-hidden">Email:</label>
                            <input type="text"  class="form-control-plaintext" id="staticEmail2" value="email@example.com" required/>
                        </div>
                        <div class="col-auto">
                            <label for="inputPassword2" class="visually-hidden">Password: </label>
                            <input type="password" class="form-control" id="inputPassword2" placeholder="Password" required/>
                        </div>
                        <p class="gender">Gender:</p>
                        <br></br>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Male
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                            <label class="form-check-label" for="flexRadioDefault2">
                                Female
                            </label>
                       </div>
                       <p class="college">College:
                           <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
                            <datalist id="datalistOptions">
                               <option value="AITS-HYDERABAD"></option>
                               <option value="AITS-KADAPA"></option>
                               <option value="AITS-RAJAMPET"></option>
                               <option value="AITS-TIRUPATHI"></option>
                            </datalist>
                        </p>
                        <p class="branch">Branch:
                            <input class="form-control" list="datalist" id="DataList" placeholder="Type to search..."/>
                            <datalist id="datalist">
                                <option value="CSE"></option>
                                <option value="AIDS"></option>
                                <option value="AIML"></option>
                                <option value="EEE"></option>
                                <option value="ECE"></option>
                                <option value="MECH"></option>
                                <option value="CIVIL"></option>
                           </datalist>
                        </p>
                        <p class="date">Date of joining:
                            <input type="date" placeholder="date" value="date"/>
                        </p>
                        <p class="date">Graduation date:
                            <input type="date" placeholder="date" value="date"/>
                        </p>
                        <p class="mobile">Mobile no:
                            <select name="phone" id="phone">
                                <option value="+91">+91</option>
                                <option value="+1">+1</option>
                                <option value="+86">+86</option>
                                 <option value="+7">+7</option>
                                <input class=" num"type="number" name="number" id="num"/>
                            </select>
                        </p>
                        <p class="adr">ADRESS:
                            <input type="text" class="form-controls" id="inputAddress" placeholder="1234 Main St"/>
                        </p>
                        <p class="resume">upload resume:
                            <input type="file"/>
                        </p>
                        <button  class ="button" type="submit" onclick="location.href='https://aitsrajampet.ac.in/about';">Submit</button>
                        <button class="reset" type="reset">Reset</button> 

                    </div>
                </form>
            </div>
        );
    }
export default Registration;