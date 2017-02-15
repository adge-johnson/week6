var React = require('react')

var Card = React.createClass({

  render: function() {
    return (
      <div  <img className="img-responsive" src={"http://golearntocode.com/images/cards/" + this.props.card + ".png"} />
    )
  }

})

module.exports = Card
