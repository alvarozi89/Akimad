import React from "react";

import Spinner from "../Spinner";

const Form = ({ user, loading, error, buttonAction, changeUser }) => (
  <div className="container">


 
    <input
      type="text"
      className="form-control"
      value={user}
      placeholder="Usuario Git"
      onChange={e => changeUser(e.target.value)}
    />

 
    
    <br />
    <div className="col-md-6">

    <button className="btn btn-success" onClick={buttonAction}>
      {loading ? <Spinner /> : "Buscar"}
    </button>
    </div>
    
 


    <p className="errorText">{error}</p>

 
  </div>
);

export default Form;
