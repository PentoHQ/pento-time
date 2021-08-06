import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import PageContainer from '../PageContainer/PageContainer'
import TimerSessionsView from '../../components/TimerSessionsView/timersessionsview'

class Sessions extends React.Component {
  componentDidMount() {
    this.props.getTimerSessions()
  }

  deleteSession(session) {
    return new Promise((resolve, reject) => {
      return this.props.deleteASession(session._id, (err) => {
        if(!err) {
          alert(`This session : ${session.name} was deleted`)
          this.props.getTimerSessions();
          resolve();
        } else {
          reject(err);
        }
      })
    })
  }

  render() {
    const { sessions } = this.props
    return (
      <PageContainer>
        <TimerSessionsView sessions={sessions} onSessionDelete={this.deleteSession.bind(this)} />
      </PageContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sessions: state.sessions,
  }
}

export default connect(mapStateToProps, actions)(Sessions)
