import React from 'react'
import Utils from '../../utils/utils'
import * as actions from '../../actions'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'

const TimerSessionCard = (props) => {

    const deleteTimer = () => {
      props.deleteTimerSession(props.id, props.index,(success) => {

        let _message = {
          title: success?'Your session has been removed!':'Session could not be deleted',
          text: success?'Successfully removed the session.':'We were unable to remove this session, perhaps it doesnt exists?',
          icon: success?'success':'error',
          timerProgressBar:true,
          timer: 2*1000,
        }

        Swal.fire(_message)

      })
      
    }

    return  <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.createdAt}</h6>
        <p className="card-text">Duration: {Utils.formatTime(props.time)}</p>
        <button className="btn btn-outline-danger" onClick={deleteTimer}>Delete</button>
      </div>
    </div>
  }


const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, actions)(TimerSessionCard)
