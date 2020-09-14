import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu_item.scss';
const item=({props,history,match})=>{
    const {title,imageUrl,size,linkUrl,key}=props;
return (<div key={key}
  className={`${size} menu-item`}

  onClick={()=>{history.push(`${match.url}${linkUrl}`)
  }}
  >

                <div className="background-image" style={{
                        backgroundImage:`url(${imageUrl})`
                    }}

                    
                    >

                </div>
                <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
</div>);
}
export default withRouter(item);