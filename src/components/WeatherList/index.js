import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import {connect} from "react-redux";
import {WeatherCard} from "./../../components";
import Loading from "./../../assets/images/spinner.gif";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    margin:"80px !important",
    width: "65%",
    height: "100%",
  },
  gridItem:{
    border: "1px solid peru",
    height: "250px !important",
    margin: "1px, 1px, 1px, 1px"
  },
  loader:{
    marginTop:"200px",
    marginLeft:"500px"
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});


function WeatherList(props) {
  const { classes } = props;
if(props.weather.loaded){
  const tileData = props.weather.data;
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  const date= new Date();
debugger;
return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">{tileData.city.name} : {monthNames[date.getMonth()]}</ListSubheader>
        </GridListTile>
        {tileData.list.map(tile => (
          <GridListTile className={classes.gridItem} key={tile.img}>
          <WeatherCard tile={tile} classes={classes}/>
          </GridListTile>
          
        ))}
      </GridList>
    </div>
  );
} else{
  return(<div className={classes.loader}>
    
    <img src={Loading} alt="Loading ..."/>
  </div>)
}
}

WeatherList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  weather: state.weather
})
export default connect(mapStateToProps)(withStyles(styles)(WeatherList));