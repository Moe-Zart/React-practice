import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this); //must bind in order to use the setState method
  }
  handleClick() {
    //setState is used to change the state
    this.setState((prev) => {
      //prev represents the counter before the the state is changed
      return {
        counter: prev.counter + 1,
      };
    });
  }

  //lifecycle methods: componentDidMount() , componentWillUnmount() , component WillReceiveProps(nextProps) , shouldComponentUpdate(nextProps , nextState)

  componentDidMount() {
    /*like saying you were just born. this method runs once  //rerender which changes the way the component is displayed, does not 
    rerun this method*/
    //most common use case for this method is an api call, or getting data from an external source
    //as soon as the component finishes mounting, you can get the data u need to correctly display
  }

  componentWillUnmount() {
    //to make the component disappear from the App. cleans up your code before your component diappears
    //common usecase is removing an event listener. e.g(you want to write code for everytime someone scrolls, you can remove the event listener in this method)
  }

  /**componentWillReceiveProps(nextProps) {    //NOT TOO IMPORTANTv 
    //like when someone gives you a gift. everytime this component is receiving props, it will run this method
    //will run when the component is first mounted and when a parent component passes down props to a child component
    //Usually used to see if the incoming props are different. e.g:
    /* if (nextProps.whatever !== this.props.whatever){
            //do something
          }
  }*/
  
  shouldComponentUpdate(nextProps, nextState) {
    // like making a decision whether to change your clothes
    // allows us to choose whether a component in our app is going to be updated/re-rendered
    //Here, you return true if you want it to update
    //Here, you return false if not
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    );
  }
}

export default Counter;
