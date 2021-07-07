import React, { Component } from 'react';

import classes from './App.module.css';


import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import ProductData from './utils/ProductData';

class App extends Component {

  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    //currentPreviewImage: 'https://imgur.com/xSIK4M8.png',
    currentSelectedFeature: 0,
  }

  onColorOptionClick = (pos) => {

    this.setState({ currentPreviewImagePos: pos });

    //const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl
    //console.log(updatedPreviewImage);

    //this.setState({currentPreviewImage: updatedPreviewImage})
  }

  onFeatureItemClick = (pos) => {
    //let updatedState = false;
    //if (pos === 1) {
      //updatedState = true;
    //}

    this.setState({ currentSelectedFeature: pos });
  }

  /*shouldComponentUpdate(nextProps, nextState) {
    //console.log('Next state =>', nextState);
    //console.log('Current state =>', this.state);

    console.log('Inside ShouldComponentUpdate')

    if(nextState.currentPreviewImagePos === this.state.currentPreviewImagePos){
      return false;
    }
    return true;
  }*/

  render() {

    console.log("Rendering AppJs")

    return (
      <div className="App">
        <Topbar />

        <div className={classes.MainContainer}>

          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.productData.colorOptions
            [this.state.currentPreviewImagePos].imageUrl} currentSelectedFeature={this.state.currentSelectedFeature} />

          </div>

          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} onColorOptionClick=
              {this.onColorOptionClick} currentPreviewImagePos={this.state.currentPreviewImagePos}
              onFeatureItemClick={this.onFeatureItemClick} currentSelectedFeature={this.state.currentSelectedFeature}/>
          </div>

        </div>

      </div>
    );

  }



}

export default App;
