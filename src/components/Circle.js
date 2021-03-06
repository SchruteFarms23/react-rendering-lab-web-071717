import React from 'react';

class Circle extends React.Component {


  shouldComponentUpdate(nextProps){

    return(this.props.color !== nextProps.color)

  }

  render() {
    console.log(this.props)
    const  color  = this.props.color;
    console.log(`A ${color} circle was rendered!`);

    return (
      <div className={`circle ${color}`}></div>
    )
  }
}

export default Circle;
