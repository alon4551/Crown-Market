import React,{Component} from 'react';
import {connect}from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectSections} from '../../redux/directory/dierctory.selectors';
import Item from '../../Components/Menu_Item';
import './homepage.scss';
  
class homepage extends Component{

    render(){
        const cards=this.props.sections.map((item)=><Item key={item.id} props={item}/>)
        return(<div className="homepage">
            <div className="directory-menu ">

                {
                cards
                }
            </div>
        </div>)
    }
}
const mapStateToProps=createStructuredSelector({
  sections:selectSections
})
export default connect(mapStateToProps)(homepage);