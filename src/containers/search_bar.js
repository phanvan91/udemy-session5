import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchWeather} from "../actions";

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            term : ''
        }
    }
    onInputChange = (e) => {
        this.setState({
            term : e.target.value
        })
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.fetchWeather(this.state.term)
        this.setState({ term : ''})
    }
    render () {
        console.log(this.props.weather)
        return (
            <form onSubmit={this.onFormSubmit} className={'input-group'}>
                <input
                    type="text"
                    className={'form-control'}
                    value={this.state.term}
                    onChange={this.onInputChange}
                    placeholder={'Insert city'}
                />
                <span className={'input-group-btn'}>
                    <button type={'submit'} className={'btn btn-secondary'}>Search</button>
                </span>
            </form>
        )
    }
}
function mapStateToProps (state) {
    return {
        weather : state.weather
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        fetchWeather
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar)