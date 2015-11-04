var React = require('react')
var DefaultLayout = require('./layouts/default')

var StatusMessage = React.createClass({
    render: function () {
        return (
                <DefaultLayout title={this.props.title}>
                    <div>Hello {this.props.name}</div>
                    <div>Unauthenticated page to view botnet status</div>
                </DefaultLayout>
               )
    }
})

module.exports = StatusMessage
