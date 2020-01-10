import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Landing extends Component {
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


export default connect(mapStateToProps, {})(Landing)
