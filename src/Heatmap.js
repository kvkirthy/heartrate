import React, { Component } from 'react';

class Heatmap extends Component {


    render() {
        let {bookmarks} = this.props;
        console.log(this.props.bookmarks);
        // let bookmarks = [0, 200, 400, 600, 800, 1000];        

        const getTextForBookmarks = (bookmarks) => bookmarks.map( (item, i) => (<text x={i*200 || 30} y="80" textAnchor="middle" >{item}</text>));
        
        return (
            <div >
                <svg height="100" width="1050">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={ {stopColor:'rgb(0,255,0)', stopOpacity:1} } />
                            <stop offset="100%" style={ {stopColor:'rgb(255,0,0)', stopOpacity:1} } />
                        </linearGradient>
                    </defs>
                    <rect x="10" y="10" width="1000" height="30" fill="url(#grad1)" />
                    {getTextForBookmarks(bookmarks)}
                    
                    
                </svg>
            </div>
        );
    }
}

export default Heatmap;
