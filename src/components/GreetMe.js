
import * as React from "react"
import * as ReactDOM from "react"


class Greeting extends React.Component {
    state = {
      hour: null,
      username: 'Alyssa'
    }
    
    componentDidMount() {
      this.getHour()
    }
  
    getHour = () => {
     const date = new Date();
     const hour = date.getHours()
     this.setState({
        hour
     });
    }
  
    render(){
      const {hour, username} = this.state;
      return (
        <div className='App'>
          <h2>{hour < 12 ? "Good Morning" : "Good evening"} {username}</h2>
        </div>
      );
    }
  
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<Greeting />, rootElement);