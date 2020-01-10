import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchParables } from '../actions/parables';

export class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rice: 'beans'
        }
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <h1>Welcome home</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})


export default connect(mapStateToProps, {fetchParables})(Landing)
