import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ReplyIcon from '@material-ui/icons/Reply';
import ForwardIcon from '@material-ui/icons/Forward';
import ReplyAllIcon from '@material-ui/icons/ReplyAll';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const LeftJustifiedCardHeader = withStyles({
    root: {
        textAlign: "left",
    },
    
  })(CardHeader);

const useStyles = makeStyles(theme => ({
    card: {
        width: '95%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    toolbar: theme.mixins.toolbar,
    avatar: {
        backgroundColor: red[500],
    },

}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    var fromName = "Office 365 Message Center";
    var fromAddress = "o365mc@microsoft.com";

    return (
        <div className={classes.toolbar}>
            <Card className={classes.card}>
                <LeftJustifiedCardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            JG
                        </Avatar>
                    }
                    action={
                        <div>
                        <IconButton aria-label="Settings">
                            <ReplyIcon />
                        </IconButton>
                        <IconButton aria-label="Settings">
                            <ReplyAllIcon />
                        </IconButton>
                        <IconButton aria-label="Settings">
                            <ForwardIcon />
                        </IconButton>
                        <IconButton aria-label="Settings">
                            <MoreVertIcon />
                        </IconButton>
                        </div>
                    }
                    title={fromName}
                    subheader={fromAddress}
                    
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
