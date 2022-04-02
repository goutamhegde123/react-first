import React,{Component} from 'react'

// const Welcome=() => <h1>hi welcome </h1>

class Welcome extends Component{
  constructor(){
    super()
    this.state={
      message:'please subscribe'
    }
  }
  changeMessage(){
    this.setState({
      message:'thanks for subscribing'
    }
    )
  }

  render(){
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>{this.changeMessage()}}>subscribe</button>
      </div>
    )
      
    
  }
};

export default Welcome 