import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import PageContainer from '../PageContainer/PageContainer'
import TimerForm from '../../components/TimerForm/timerform'

class NewSession extends React.Component {
  componentDidMount() {
    this.props.getTimerSessions()
  }

  submit(values) {
    return new Promise((resolve, reject) => {
      return this.props.postNewTimerSession(values, (err) => {
        if(!err) {
          alert(
            'Your session has been saved!\n\nPlease view your sessions by clicking on the `View Saved Sessions` button on the left.'
          )
          this.props.getTimerSessions();
          resolve();
        } else {
          reject(err);
        }
      })
    });
  }

  onViewChange() {
    this.props.changeView(this.props.view)
  }

  onSelectedDate(date) {
    this.props.setTimerSessionViewDate(date)
  }

  render() {
    return (
      <PageContainer>
        <TimerForm onSubmit={this.submit.bind(this)} />
      </PageContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    view: state.view,
    sessions: state.sessions,
  }
}

export default connect(mapStateToProps, actions)(NewSession)
