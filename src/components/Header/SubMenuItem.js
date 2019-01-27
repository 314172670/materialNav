import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames'
import Icon from '@material-ui/core/Icon';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

//TODO:这部分还未做成自适应

const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
  title: {
    color: "#fff"
  },
  menuHere: {
    width: 0,
    height: 0,
    borderRight: '8px solid transparent',
    borderLeft: '8px solid transparent',
    borderBottom: '10px solid white',
    position: 'relative',
    left:'36%'
  },
  label: {
    textTransform: 'capitalize',//默认字体大写，改为小写
  },
  icon: {
    margin: theme.spacing.unit * 2,
    fontSize: 16
  },
  menuItem: {
    '&:focus': {
      backgroundColor: '#2C2D3A',  //选中设置背景颜色
      //backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,  //修改默认全局
      },

    }
  },
  primary: {},  //取消默认
  // icon: {},

});

class SubMenuItem extends Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    // if (this.anchorEl.contains(event.target)) {  //？？？？
    //   return;
    // }

    this.setState({ open: false });
  };
  render() {
    const { classes, title, icon } = this.props;
    const { open } = this.state;

    return (
      <div className="submenuItem">
        <Button
          // buttonRef={node => {
          //   this.anchorEl = node;  //按钮关联Popper的关闭？？？
          // }}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
          className={classNames(classes.title, classes.label)}
        >
          <Icon className={classes.icon}>{icon}</Icon> {title}
        </Button>

        <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <div>
                {/* 附加的三角箭头 */}
                <div className={classes.menuHere}></div>
                <Paper>
                  {/* 点击监听 */}
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList >
                      <MenuItem onClick={this.handleClose} className={classes.menuItem} >
                        <ListItemIcon className={classes.icon}>
                          <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Drafts" />
                      </MenuItem>
                      <MenuItem onClick={this.handleClose} className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                          <SendIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Sent mail" />
                      </MenuItem>
                      <MenuItem onClick={this.handleClose} className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                          <InboxIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Inbox" />
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </div>
            </Grow>

          )}
        </Popper>
      </div>
    );
  }
}

export default withStyles(styles)(SubMenuItem);
