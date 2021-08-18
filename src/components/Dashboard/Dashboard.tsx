import React, {useState} from 'react';
import { DataTable } from '../../components'
import { Drawer as MUIDrawer,
    ListItem,
    List, 
    ListItemIcon, 
    ListItemText, 
    Theme,
    useTheme, 
    makeStyles, 
    createStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import clsx from 'clsx';
import { RouteComponentProps, withRouter, Switch, Route, Link } from "react-router-dom";
import bike_shop from '../../assets/images/bike-with-parts-on-wall.jpg';

const drawerWidth = 200;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar:{
            transition: theme.transitions.create(['margin', 'width'],{
                easing: theme.transitions.easing.easeInOut,
                duration: '1s'
            }),
            backgroundColor: '#000000',
            color: 'white',
            fontFamily: "'Lato', sans-serif"
        },
        appBarShift:{
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'],{
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        hide: {
            display: 'none'
        },
        drawer:{
            width: drawerWidth,
            fontFamily: "'Lato', sans-serif"
        },
        drawerPaper:{
            width: drawerWidth
        },
        drawerHeader:{
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0,1),
            // adding in for header to separate this from rest of toolbar
            ...theme.mixins.toolbar,
            justifyContent: 'end'
        },
        contentDiv:{
            backgroundImage: `url(${bike_shop})`,
            width: '100%',
            height: '100%',
            opacity: '0.8',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position: 'absolute'
        },
        content:{
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin',{
                easing: theme.transitions.easing.easeInOut,
                duration: '1s'
            }),
            fontFamily: "'Lato', sans-serif",
            marginLeft: '100px',
            marginRight: '100px',
            color: 'white'
        },
        // contentShift:{
        //     transition: theme.transitions.create(['margin', 'width'],{
        //     easing: theme.transitions.easing.easeOut,
        //     duration: theme.transitions.duration.enteringScreen
        //     }),
        //     marginLeft: 0
        // },
        toolbar:{
            display: 'flex'
        },
        toolbar_button: {
            marginLeft: 'auto',
            color: 'white',
        },
        listItem:{
            fontFamily: "'Lato', sans-serif"
        },
        logo_a: {
            display: 'flex',
            justifyContent: 'start',
            color: 'black',
            fontFamily: "'Kaushan Script', serif",
        },
        logo:{
            margin: 'auto'
        },
        logo_navigation:{
            listStyle: 'none',
            textTransform: 'uppercase',
            textDecoration: 'none'
        },
}));

interface DashProps{
    history: RouteComponentProps["history"];
    location: RouteComponentProps["location"];
    match: RouteComponentProps["match"];
}

export const Dashboard = withRouter(( props:DashProps) => {
    console.log(props)
    const { history } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    
    const handleDrawerOpen = () =>{
        setOpen(true);
    };
    const handleDrawerClose = () =>{
        setOpen(false);
    };

    const itemsList = [
        {
            text: 'Home',
            onClick: () => history.push('/')
        },
        {
            text: 'Sign In',
            onClick: () => history.push('signin')
        }
    ]

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
                })}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Dashboard
                </Typography>
                <Button className={classes.toolbar_button}>Build a Bike</Button>
                </Toolbar>
            </AppBar>
            <MUIDrawer
            className={classes.drawer}
            variant="temporary"
            anchor="left"
            open={open}
            classes={{paper: classes.drawerPaper}}>
            <div className={classes.drawerHeader}>
                <h1 className={ `${classes.logo}` }>
                    <Link to='/' className = { `${classes.logo_a} ${classes.logo_navigation}` }>Bikes</Link>
                </h1>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
                
            </div>
            <Divider />
            <List>
                {itemsList.map((item)=>{
                    const { text, onClick } = item;
                    return (
                        <ListItem className={classes.listItem} button key={text} onClick={onClick}>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                })}
            </List>
            </MUIDrawer>
            <div className={classes.contentDiv}>
            <main
            className={clsx(classes.content)}>
            <div className={classes.drawerHeader} />
    
            <h1>Bikes coming soon</h1>
            <DataTable />
            </main>
            </div>
        </div>
        )
});