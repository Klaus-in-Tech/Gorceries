import React, { Component } from "react";
import TextInputForm from "../../Layouts/TextInputForm";
import "./sign.css";

export default class Sign extends Component {
  render() {
    return (
      <div className="container">
        {/* Horizontal Form */}
        <div className="box  box-info">
          <div className="box-header with-border">
            <h3 className="box-title text-center">Sign In</h3>
          </div>
          {/* /.box-header */}
          {/* form start */}
          <form className="form-horizontal">
            <div className="box-body">
              <TextInputForm
                name="inputEmail3"
                label="Email"
                type="email"
                id="inputEmail3"
                placeholder="Email or Phone Number"
              />
              <TextInputForm
                name="inputPassword3"
                label="Password"
                type="password"
                id="inputPassword3"
                placeholder="Password"
              />
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> Remember me
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* /.box-body */}
            <div className="box-footer">
              <button type="submit" className="btn btn-default">
                Register
              </button>
              <button type="submit" className="btn btn-info pull-right">
                Sign in
              </button>
            </div>
            {/* /.box-footer */}
          </form>
        </div>
      </div>
    );
  }
}
