 STATE

 - State is a plain js object that is used to record and react to user events. Each class based component that we define has its own state object. Whenever a 's state is changed a component immediately re-renders and forces all of its children to re-render as well. Before we ever use state we need to initialize the state object. Only class based components have state. Each instance of a component has its own copy of state.

 API
 - get a key
 - import yt search
 - npm install --save youtube-api-search

DOWNWARD DATA FLOW
 - Only the most parent component in an app should be responsible for fetching data. Index is the most parent component we have. Therefore, App should fetch our data. 


 BOOTSTRAP
 - include in index.html file


 PROPS
 - passing data from the parent to the child component simply by defininf a property on the jsx tag.  ex: <VideoList videos={this.state.videos} />. this is passing props. Anytime the app re-renders Videol List will get the new videos as well. When we use a functional component the prop object arrives as an argument to the function. In a functional component the props object is an argument. In a class based component, props are available anywhere as: this.props. Keep in mind when changing from function to class based components. 

SEARCH FLOW
1. Lecture 29 4 - 5

CALLBACK
1. Beautiful Exlanation of Flow 9:40 - 10:15

Search Term Explanation
1. Lecture 30 6:11 - 

Listen to Final Wrap Up Video