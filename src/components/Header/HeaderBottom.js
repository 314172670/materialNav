import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Toolbar from '@material-ui/core/Toolbar';
import SubMenuItem from './SubMenuItem'
import { withStyles } from '@material-ui/core/styles';
import data from '../../menudata'

const styles = theme => ({
    root: {
        width: '100%',

    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: 40,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),//search动效
        width: '100%',
        [theme.breakpoints.up('sm')]: { //屏幕大于‘sm’ 则width为120，当鼠标聚焦时width自动变为200
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    appBar: {
        backgroundColor: '#262734',
    },

});

class HeaderBottom extends Component {
    render() {
        const { classes } = this.props
        return (

            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>

                        {/* MenuList :Menu组件内部使用Popver组件 ,故自行封装了SubMenuItem*/}
                        <div className={classes.sectionDesktop}>
                            {data.map((item) =>
                                <SubMenuItem title={item.title} icon={item.icon} />
                            )}
                        </div>
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );

    }
}

export default withStyles(styles)(HeaderBottom);