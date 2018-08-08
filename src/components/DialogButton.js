import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class DialogButton extends React.Component {
  state = {
    open: false,
    scroll: 'paper',
  };

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen('paper')} size="small" color="primary" variant='contained'>
          Learn More
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
        >
          <DialogTitle>{this.props.course.title}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <img src={this.props.course.resource1.image} alt='' height='200' width='140' vspace="10" />
                <br/>
                {this.props.course.resource1.description}
                <br/>
                <img src={this.props.course.resource2.image} alt='' height='200' width='140' vspace="10" />
                <br/>
                {this.props.course.resource2.description}
                <br/>
                <img src={this.props.course.resource3.image} alt='' height='200' width='140' vspace="10" border='1' />
                <br/>
                {this.props.course.resource3.description}
                <br/>
              </DialogContentText>
            </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DialogButton;
