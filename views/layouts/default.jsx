var React = require('react')

var DefaultLayout = React.createClass({
    render: function () {
        return (
                <html>
                    <head><title>{this.props.title}</title></head>
                    <body>
                        <div class="nav">
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="/control">Control</a></li>
                                <li><a href="/status">Status</a></li>
                            </ul>
                        </div>
                        {this.props.children}
                    </body>
                </html>
               )
    }
})

module.exports = DefaultLayout
