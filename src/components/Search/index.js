import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import { Button } from '../Button/index';
 
class Search extends Component {
    
    componentDidMount() {
      this.input.focus();
    }
  
    render() {
      const {onChange, value, children, onSubmit} = this.props;
      return (
        <form onSubmit={onSubmit}>
          <FormGroup>
            <h1 className="text-center text-white">{children}</h1><hr style={{border: '2px solid white', width: '200px'}}/>
  
            <div className="input-group">
              <input className="form-control width100 searchForm" type="text" onChange={onChange} value={value} ref={(node) => {this.input = node}}/>
              <span className="input-group-btn">
                <Button className="btn btn-primary searchButton" type="submit">
                  Search
                </Button>
              </span>
            </div>
          </FormGroup>
        </form>
      );
    }
  }

export default Search;
  