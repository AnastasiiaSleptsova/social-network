import classes from './ProfileStatus.module.css'
import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  }

activateEditMode = () => {
  this.setState ({
    editMode: true
  })
}

deactivateEditMode = () => {
  this.setState ({
    editMode: false
  })
}

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span className={classes.status} onDoubleClick={this.activateEditMode}>{this.props.status}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} ></input>
          </div>
        }
      </div>

    )
  }
}


export default ProfileStatus;