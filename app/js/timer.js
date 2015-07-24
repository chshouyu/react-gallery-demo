
require('../css/timer.less');

var React = require('react');

var PREFIX_0_REG = /(^|:)(\d)(?!\d)/g;

var Timer = React.createClass({
    getInitialState () {
        return {
            currTime: this.getCurrTime()
        };
    },
    componentDidMount () {
        this.timer = setInterval(this.tick, 1000);
    },
    componentWillUnmount () {
        clearInterval(this.timer);
    },
    getCurrTime () {
        var d = new Date();
        var hour = d.getHours();
        var min = d.getMinutes();
        var sec = d.getSeconds();
        return `${ hour }:${ min }:${ sec }`.replace(PREFIX_0_REG, '$10$2');
    },
    tick () {
        this.setState({
            currTime: this.getCurrTime()
        });
    },
    render () {
        return (
            <div className="timer">当前时间：{ this.state.currTime }</div>
        );
    }
});

module.exports = Timer;