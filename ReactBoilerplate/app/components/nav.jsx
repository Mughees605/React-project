var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
    render:function(){
        return (
            <div>
            <h2>Navigation bar</h2>
            <Link to = "/">Get Weather</Link>
            <Link to = "/about">About</Link>
            <Link to = "/example">example</Link>
            </div>
        )
    }
})
module.exports = Nav;