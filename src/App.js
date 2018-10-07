import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DenseAppBar from "./components/menu";
import  Slider  from "./components/slider";
import MediaCard from "./components/services";
import Grid from '@material-ui/core/Grid';
import SingleLineGridList from "./components/listservice";
import PaperSheet from "./components/serviceInfo";


class App extends Component {
  render() {
    return (
      <Grid container  className="App">
      <DenseAppBar />
      <Slider className="sliderClass" />
      <PaperSheet title="Lawyer Request" desc="This will be helping you for the getting your law problem solved." />
      <SingleLineGridList id="fun" container/>
      <PaperSheet title="Lawyer Request" desc="This will be helping you for the getting your law problem solved." />
      <SingleLineGridList id="fun" container/>
 </Grid>
    );
  }
}

export default App;
