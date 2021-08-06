import React from 'react'
import Utils from '../../utils/utils'

const TimerSessionCard = (props) => (
  <div className="card">
    <div className="card-body">
      <div className="row">
        <h5 className="card-title col-md-11">{props.name}</h5>
        <button className="btn btn-primary col-md-1" onClick={props.deleteASession}><b>&times;</b></button>
      </div>
      <h6 className="card-subtitle mb-2 text-muted">{props.createdAt}</h6>
      <p className="card-text">Duration: {Utils.formatTime(props.time)}</p>
    </div>
  </div>
)

export default TimerSessionCard
