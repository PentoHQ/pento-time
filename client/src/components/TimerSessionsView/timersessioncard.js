import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import Utils from '../../utils/utils'

const TimerSessionCard = (props) => {
  const deleteSession = () => {
    props.deleteTimerSession(props.id, () => {
      alert(
        'Session '+ props.name +' has been deleted!'
      )
      props.getTimerSessions()
    })
  }

  return <div className="card">
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{props.createdAt}</h6>
      <p className="card-text">Duration: {Utils.formatTime(props.time)}</p>
    </div>
    <div>
      <button
        className="btn btn-danger btn-block"
        onClick={deleteSession}
      >
        Delete
      </button>
    </div>
  </div>
}

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps, actions)(TimerSessionCard)
