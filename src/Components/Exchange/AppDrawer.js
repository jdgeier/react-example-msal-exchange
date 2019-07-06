import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab';
import ExchangeAppBar from './AppBar'
import Grid from '@material-ui/core/Grid';
import MessagesListComponent from './MessagesList'
import MessageComponent from './Message'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    button: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    toolbar: theme.mixins.toolbar,
    fab: {
        marginTop: theme.spacing(1),
    },
    content: {
        marginLeft: drawerWidth,
        marginTop: theme.mixins.toolbar.minHeight,
        margin: theme.spacing(0),
        padding: theme.spacing(0),
        flexGrow: 100,
        backgroundColor: theme.palette.background.default,
    },
}));

export default function AppDrawer() {
    const classes = useStyles();
    console.log(this)
    return (
        <div >
            <CssBaseline />
            <ExchangeAppBar />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} >
                    <Fab variant="extended" aria-label="Delete" className={classes.fab}>
                        <AddIcon className={classes.extendedIcon} />New Message
                  </Fab>
                </div>

                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Sent email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className={classes.toolbar} >
                <main className={classes.content}>
                    <Grid container spacing={3} >
                        <Grid item xs={4}>
                            <MessagesListComponent />
                        </Grid>
                        <Grid item xs={8}>
                            <MessageComponent />
                        </Grid>
                    </Grid>
                </main>
            </div>
        </div >
    );
}