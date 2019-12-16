import React from "react";
import {connect} from "react-redux";
import Loader from "react-loader-spinner";

import {getQuote} from "../actions";

const Quote = props => {


    return (
        <div>
            <h1>Quote of the Day!</h1>
            {/* if props.quote is falsey, and we are not fetching then add a message that says to fetch a quote */}
            {!props.quote && !props.isFetching && <p>🌼Click here for a daily quote from our garden!🌼</p>}
            {/* If props.isFetching is true then lets add a spinner */}
            {props.isFetching && (
             <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
              />
            )}
            {/* If props.quote is truthy '&&'  we will go ahead and display the quote*/}
            {props.quote && <p>{props.quote.body}</p>}
            <button onClick={props.getQuote}>Get a Quote</button>
          
        </div> 
    )
}
const mapStateToProps = state => {
    return { 
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
    };
};





export default connect(mapStateToProps, {getQuote})(Quote);