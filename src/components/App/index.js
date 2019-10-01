import React, {Component} from 'react';
import { Row } from 'react-bootstrap';
import { DEFAULT_HPP, DEFAULT_PAGE, PARAM_HPP, PATH_BASE, PARAM_PAGE, PARAM_SEARCH, PATH_SEARCH} from '../../constants/index';
import Table from '../Table/index';
import { Button, Loading } from '../Button/index';
import Search from '../Search/index';

// HIGHER ORDER 
// const withLoading = (Component) => ({isLoading, ...rest}) =>
//   isLoading?<Loading /> : <Component {...rest} />

// const ButtonWithLoading = withLoading(Button);

// function updateTopStories(hits, page) {
//   return function(prevState)  {
//     const { searchKey, results } = prevState;
//     const oldHits = results &&  results[searchKey] ? results[searchKey].hits : [];
//     const updatedHits = [...oldHits, ...hits]
//     return {results:{ ...results, [searchKey]: {hits: updatedHits, page}}, isLoading: false}
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      searchKey: '',
      searchTerm: props.searchTerm?props.searchTerm:'',
      isLoading: false
    }
    this.fetchTopStories = this.fetchTopStories.bind(this);
    this.setTopStories = this.setTopStories.bind(this);
    this.searchValue = this.searchValue.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSort = this.onSort.bind(this);

  }

  static Loading = (Component) => ({isLoading, ...rest}) =>
  isLoading?<Loading/> : <Component {...rest} />

  static updateTopStories(hits, page) {
    return function(prevState)  {
      const { searchKey, results } = prevState;
      const oldHits = results &&  results[searchKey] ? results[searchKey].hits : [];
      const updatedHits = [...oldHits, ...hits]
      return {results:{ ...results, [searchKey]: {hits: updatedHits, page}}, isLoading: false}
    }
  }

  // Sorting
  onSort(sortKey) {
    const isSortReverse = this.state.sortKey === sortKey && !this.state.isSortReverse;
    this.setState({ sortKey, isSortReverse })
  }

  checkTopStoriesSearchTerm(searchTerm) {
    return !this.state.results[searchTerm];
  }

  //Setting stories
  setTopStories(result) {
    const {hits, page} = result;
    this.setState(App.updateTopStories(hits, page));
  }

  //Fetching from API
  fetchTopStories(searchTerm, page) {
    this.setState({isLoading: true});
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
    .then(response => response.json())
    .then(result => this.setTopStories(result)).catch(err => err);
  }

  componentDidMount() {
    const {searchTerm} = this.state;
    this.setState({searchKey: searchTerm});
    this.fetchTopStories(searchTerm, DEFAULT_PAGE);
  }

  // search (on server side) submit function
  onSubmit(event) {
    const {searchTerm} = this.state;
    this.setState({searchKey: searchTerm});
    if(this.checkTopStoriesSearchTerm(searchTerm)) {
      this.fetchTopStories(this.state.searchTerm, DEFAULT_PAGE);
    }
    event.preventDefault();
  }

  searchValue(e) {
    this.setState({searchTerm: e.target.value});
  }

  filterOut(item) {
    return item.title.toLowerCase().includes(this.state.searchTerm.toLowerCase());
  }

  removeItem(objectID) {
    const { results, searchKey } =this.state;
    const { hits, page } = results[searchKey];
    function isNotId(item) {
      return item.objectID !== objectID;
    }
    var newList = hits.filter(isNotId);
    this.setState({results: { ...results, [searchKey]: { hits: newList, page }}});
  }
  
  render() {
    const { results, searchTerm, searchKey, isLoading } = this.state;
    const page = (results && results[searchKey] && results[searchKey].page ) || 0;
    const list = (results && results[searchKey] && results[searchKey].hits) || [];
    const ButtonWithLoadingg = App.Loading(Button);
    return (
      <div className="App">
        {this.props.notHome?
        '':<Row>
            <div className="jumbotron">
              <Search className="justify-content-md-center" onChange={this.searchValue} value={searchTerm} onSubmit={this.onSubmit}> NEWS MAN </Search>
            </div>
        </Row>
        }
        <Row className="justify-content-md-center">
          {
            <Table list = {list} removeItem={this.removeItem} />
          }
        </Row>
        <div className="text-center alert">

            {
              <ButtonWithLoadingg isLoading={ isLoading } className="btn btn-success" onClick={()=>this.fetchTopStories(searchTerm, page+1)}>LOAD MORE</ButtonWithLoadingg>
            }
        </div>
      </div>
    );
  }
}

export default App;

