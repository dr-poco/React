import React from 'react';

import classes from './ProductDetails.module.css';

//import ProductData from './ProductData';


const ProductDetails = (props) => {

    const colorOptions = props.data.colorOptions.map((item, pos) => {

        const classArr = [classes.ProductImage]
        if (pos === props.currentPreviewImagePos) {
            classArr.push(classes.SelectedProductImage);
        }
        
        return (
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl}
                onClick={() => props.onColorOptionClick(pos)} alt={item.styleName} />
        );
    })

    const featureList = props.data.featureList.map((item, pos) => {

        const classArr = [classes.FeatureItem]
        if (pos === props.currentSelectedFeature) {
            classArr.push(classes.SelectedFeatureItem);
        }
        return (
            <button onClick = {() => props.onFeatureItemClick(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
        )
    })

    //console.log(props.data)
    return (

        <div className={classes.ProductData}>
            <h1 className={classes.ProductTitle}>{props.data.title}</h1>
            <p className={classes.ProductDescription}>{props.data.description}</p>

            <h3 className={classes.SectionHeading}>Select Color</h3>
            <div>

                {colorOptions}
                {/*<img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')}
                        src='https://imgur.com/iOeUBV7.png' alt='Black Colored Watch' />
                    <img className={classes.ProductImage}
                        src='https://imgur.com/PTgQlim.png' alt='Red Colored Watch' />
                    <img className={classes.ProductImage}
                        src='https://imgur.com/Mplj1YR.png' alt='Blue Colored Watch' />
                    <img className={classes.ProductImage}
    src='https://imgur.com/xSIK4M8.png' alt='Purple Colored Watch' />*/}
            </div>

            <h3 className={classes.SectionHeading}>Features</h3>
            <div>

                {featureList}
                {/*<button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')}>Time</button>
                <button className={classes.FeatureItem}>Heart Rate</button>*/}
            </div>

            <button className={classes.PrimaryButton}>Buy Now</button>
        </div>


    );
}

export default ProductDetails;












