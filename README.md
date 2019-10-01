### Live on https://srikrishnan96.github.io/NewsMan-React-App/
# NEWSMAN - A Web app fetching data from Hacker Noon API

## public
### index.html
Application mount (Root component in src -> index.js)

## src
### components
#### App
index.js -> Main App component
#### Static methods:
Loading - Higher order component - Checks isLoading true? if true returns <Loading> component else original component passed in as argument.
    
updateTopStories
  enables retaining previously loaded results and concatenates with recently fetched page results.
 
#### Component Object Methods:
onSort - Sorting results displayed in Table Component

checkTopStoriesSearchTerm - checks state cache data for searchTerm, if not present fetches from API.
  
setTopStories - update App state when new data fetched from API (pagination- implemented by Hacker News API).
  
fetchTopStories (called in componentDidMount) - data from backend using 'fetch API'.

onSubmit - Search input submit functionality.

searchValue - sets state searchTerm with search input value.

removeItem - remove button functionality, for each result.
  

#### NavMenu
Nav bar menu components -> Express, MongoDB, Node, React -> reuses App component.

#### Other child components of App component
 ##### Button
 ##### Search
 ##### Table - contains search results

## npm packages
  ### bootstrap
  ### react-bootstrap
  ### react-router-dom : page routing





