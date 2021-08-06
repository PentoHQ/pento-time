import React from 'react'

import TimerSessionCard from './timersessioncard'

class TimerSessionsView extends React.Component {

  sessionDeletion(session) {
    this.props.onSessionDelete(session);
  }

  renderTimeSessions(sessions) {
    if (sessions.length > 0) {
      return sessions.map((session) => {
        return (
          <TimerSessionCard
            key={session._id}
            name={session.name}
            time={session.time}
            createdAt={session.createdAt}
            deleteASession={this.sessionDeletion.bind(this, session)}
          />
        )
      })
    } else {
      return <h3>You have no sessions.</h3>
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-12"></div>
        <div className="col-12">
          {this.props.sessions && this.renderTimeSessions(this.props.sessions)}
        </div>
      </div>
    )
  }
}

export default TimerSessionsView
