import React, { Component } from "react";
import TextInputForm from "../../Layouts/TextInputForm";
import "./sign.css";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

export default class Sign extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="row"
          align="center"
          style={{ display: "block", overflow: "auto" }}
        >
          <div className="col-md-6 col-lg-6	col-xl-6 col-sm-6">
            <h1>Groceries</h1>
            <br />
            <br />
            <p>
              Lorem, &nbsp;&nbsp; ipsum &nbsp;&nbsp; dolor &nbsp;&nbsp;sit
              &nbsp;&nbsp;amet &nbsp;&nbsp;consectetur&nbsp;&nbsp;
              adipisicing&nbsp;&nbsp; elit. Mollitia rem
              &nbsp;&nbsp;excepturi,&nbsp;&nbsp; dolores &nbsp;&nbsp;suscipit
              &nbsp;&nbsp;atque &nbsp;&nbsp;error &nbsp;&nbsp;in
              &nbsp;&nbsp;numquam&nbsp;&nbsp; minus &nbsp;&nbsp;vitae
              &nbsp;&nbsp; dolorem &nbsp;&nbsp; porro
              &nbsp;&nbsp;quo&nbsp;&nbsp; aut&nbsp;&nbsp; reprehenderit
              &nbsp;&nbsp;quaerat &nbsp;&nbsp;inventore
              &nbsp;&nbsp;fugiat&nbsp;&nbsp; quos &nbsp;&nbsp;hic
              &nbsp;&nbsp;labore!
            </p>
            <div>
              <i className="fab fa-facebook-square" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <i className="fab fa-twitter-square" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <i className="fab fa-instagram" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <i className="fab fa-google-plus-square" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <footer>Copyright@witsmind</footer>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6">
            <div className="box  box-info">
              <div className="box-header with-border">
                <h3 className="box-title text-center">Sign In</h3>
                <form noValidate autoComplete="off">
                  <TextField id="standard-name" label="Name" margin="normal" />
                  <br />
                  <TextField id="standard-name" label="Phone" margin="normal" />
                  <br />
                  <button type="button" className="btn btn-light">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
