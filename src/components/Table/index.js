import React, {Component} from 'react';
import {sortBy} from 'lodash';
import { Button, Sort } from '../Button/index';

const SORTS = {
    NONE: list => list,
    TITLE: list => sortBy(list, 'title'),
    AUTHOR: list => sortBy(list, 'author'),
    COMMENTS: list => sortBy(list, 'num_comments').reverse(),
    POINTS: list => sortBy(list, 'points').reverse()
  }

class Table extends Component {
    constructor(props) {
      super(props)
      this.state = {
        sortKey: 'NONE',
        isSortReverse: 'false'
      }
      this.onSort = this.onSort.bind(this)
    }
  
    // Sorting  
    onSort(sortKey) {
      const isSortReverse = this.state.sortKey === sortKey && !this.state.isSortReverse;
      this.setState({ sortKey, isSortReverse })
    }
  
    render() {
      const {list, removeItem} = this.props;
      const {sortKey, isSortReverse} = this.state;
      const sortedList = SORTS[sortKey](list);
      const reverserSortedList = isSortReverse? sortedList.reverse() : sortedList;
    return (
      <div className="col-sm-10 col-sm-offset-1">
        <div className="text-center mt-4">
          <Sort className="btn btn-default btn-xs sortBtn" sortKey={'NONE'} onSort={this.onSort} activeSortKey={sortKey}>Default</Sort>
          <Sort className="btn btn-default btn-xs sortBtn" sortKey={'TITLE'} onSort={this.onSort} activeSortKey={sortKey}>Title</Sort>
          <Sort className="btn btn-default btn-xs sortBtn" sortKey={'AUTHOR'} onSort={this.onSort} activeSortKey={sortKey}>Author</Sort>
          <Sort className="btn btn-default btn-xs sortBtn" sortKey={'COMMENTS'} onSort={this.onSort} activeSortKey={sortKey}>Comments</Sort>
          <Sort className="btn btn-default btn-xs sortBtn" sortKey={'POINTS'} onSort={this.onSort} activeSortKey={sortKey}>Points</Sort>
          <hr/> 
        </div>
         {
            reverserSortedList.map(
              item => 
                <div key={item.objectID}>
                  <h2>
                    <a href={item.url}>
                      {item.title}
                    </a> 
                  </h2>
                  <h4>
                   { item.author } | { item.num_comments } Comments | {item.points} Points
                    <Button onClick={() => removeItem(item.objectID)} className="btn btn-danger ml-3">REMOVE</Button>
                  </h4><hr/>
                </div>
                )
         }
        </div>
    )
  }
}

  export default Table;