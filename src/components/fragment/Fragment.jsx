import React from "react";

export default function Fragment(props) {
  // this.handleChange = () => {
  //     console.log()
  // }

  const isLoading = true;
  const showMe = true;

  return isLoading ? (
    <div>
      Loading...
      <h4>{props.last}</h4>
      <h3>{showMe && props.last}</h3>
      {/* {props.names.map(e =>  <select name="" id=""><option value={e}>{e}</option></select> )} */}
      <select name="" id="">{props.names.map( (e) => <option value={e}>{e}</option>)}</select>
    </div>
  ) : (
    <React.Fragment>
      <h3>Fragment</h3>

      {/* <select value={this.props.}>
                {props.map((e) => <option value="pass from props">{props.name}</option>)}
            </select> */}
      {/* <select multiple={true} value={['B', 'C']}> */}

      <select value={props.names} onChange={this.handleChange}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
      <select name="" id="">
        {/* <option value={props.names}></option> */}
        <option value={props.last}>{props.last}</option>
      </select>
    </React.Fragment>
  );
}
