import classes from './ProfileStatus.module.css'
import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  doubleClickHandler = () => {
    const myId = this.props.myId;
    const profileId = this.props.profileId;
    const canEditStatus = myId === profileId;
    if (canEditStatus) {
      this.activateEditMode()
    } 
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateProfileStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status != this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span className={classes.status} onDoubleClick={this.doubleClickHandler}>{this.props.status || 'Status does not specified'}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} ></input>
          </div>
        }
      </div>

    )
  }
}


export default ProfileStatus;