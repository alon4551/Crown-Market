import React,{Component} from 'react';
import Collection from '../../Components/Collection';
import data from '../../Data';
class Shop extends Component{
    constructor(props){
        super(props);
        this.state={
            collections:data
        }
    }
    render(){
    const list =this.state.collections.map(({id,...info})=><Collection key={id}{...info}/>);
        return (<div>
            {list}
        </div>)
    }
}
export default Shop;