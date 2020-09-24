import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import Swal from 'sweetalert2'
import PageContainer from '../PageContainer/PageContainer'
import TimerForm from '../../components/TimerForm/timerform'

class NewSession extends React.Component {
  componentDidMount() {
    this.props.getTimerSessions()
  }

  submit(values) {
    const newValues = Object.assign({}, values, {
      createdAt: new Date().toString(),
    })
    return this.props.postNewTimerSession(newValues, () => {
      
      Swal.fire({
        title: 'Your session has been saved!',
        text: 'Please view your sessions by clicking on the `View Saved Sessions` button on the left.',
        icon: 'success',
        timerProgressBar:true,
        timer: 2*1000,
      })
      
      this.props.getTimerSessions()
    })
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
