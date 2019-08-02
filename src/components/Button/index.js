import React from 'react';

export function Button({onClick, className='', children}) {
    return (
      <button className= {className} onClick={ onClick }>
        {children}
      </button>
    )
  }
  
export function Loading() {
    return(
    <h2>
      Loading...
    </h2>
    );
  }
  
export function Sort({sortKey, onSort, children, className, activeSortKey}) {
    const sortClass = ['btn default']
    if(sortKey === activeSortKey) {
      sortClass.push('btn btn-primary');
    }
    return (
    <Button className={sortClass} onClick={()=> onSort(sortKey)}>
      {children}
    </Button>
    );
  }