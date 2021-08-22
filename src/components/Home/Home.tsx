import React from 'react';
// importing new styles codes
import { makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import bike_wall_art from '../../assets/images/bike-wall-art.jpg';
import bike_trail from '../../assets/images/bike-trail.jpg';
import { Link } from 'react-router-dom';



// makeStyles code
const useStyles = makeStyles ({
    root:{
        padding: '0',
        margin: '0',
    },
    navbar_container:{
        display: 'flex',
        backgroundColor: 'black',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 5px rgb(0 0 0 / 100%)',
        fontFamily: "'Lato', sans-serif",
    },
    logo:{
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'white',
        fontFamily: "'Kaushan Script', serif",
    },
    logo_navigation:{
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        margin: '0 2em',
        color: 'white',
    },
    title_text:{
        fontFamily: "'Kaushan Script', serif",
    },
    main: {
        background: `url(${bike_trail})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text:{
        textAlign: 'center',
        verticalAlign: 'middle',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: "'Lato', sans-serif",
        color: 'black'
    },
    main_scrim:{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
    },
});

interface Props{
    title: string;
};

export const Home = (props:Props) => {
    //new classes variable
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={ `${classes.logo}` }>
                        <Link to='/' className = { `${classes.logo_a} ${classes.logo_navigation}` }>Bikes</Link>
                    </h1>
                    <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                        <li>
                            <Link to='/' className={classes.nav_a}>Home</Link>
                        </li>
                        <li>
                            <Link to='/dashboard' className={classes.nav_a}>Dashboard</Link>
                        </li>
                        <li>
                            <Link to='/signin' className={classes.nav_a}>Sign In</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_scrim}>
                    <div className={classes.main_text}>
                    <h1 className={classes.title_text}>{ props.title }</h1>
                    <p>Bikes are good for you.</p>
                    </div>
                </div>
            </main>
        </div>
    )};