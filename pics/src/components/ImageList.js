import React from 'react';

const ImageList = (props) => {
    //Object destructor feature
    const images = props.images.map(({ desciption, id, urls }) => {
        return <img alt={desciption} key={id} src={urls.regular} />
    });
    return <div>{images}</div>;
}

export default ImageList;