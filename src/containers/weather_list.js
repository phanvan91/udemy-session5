import React, {Component} from 'react'
import {connect} from 'react-redux'
import Chart from './../components/chart'

class WeatherList extends Component {
    renderWeather = (cityData) => {
        const name = cityData.city.name
        // console.log(cityData)
        const temps = cityData.list.map(weather => weather.main.temp)

        return (
          <tr key={name}>
              <td>{name}</td>
              <td>
                <Chart color={'red'} temps={temps}/>
              </td>
          </tr>
        );
    }
    render () {
        return (
            <table className={'table table-hover'}>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}
function mapStateToProps ({weather}) {
    return {
        weather
    }
}
export default connect(mapStateToProps,null)(WeatherList)