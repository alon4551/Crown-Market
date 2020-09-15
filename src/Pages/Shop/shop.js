import React ,{Component} from 'react';
import {Route} from 'react-router-dom';
import Overview from '../../Components/collection-overview';
import CollectionPage from '../../Components/collection';
import {firestore,convertCollectionsSnapshopToMap} from '../../firebase/firebase';
import {UpdateState}from '../../redux/Shop/shop.actions';
import {connect} from 'react-redux';
class Shop extends Component{

        unsubscribeFromSnapshot=null;

        componentDidMount(){
            const {updateCollections}=this.props;
            const collectionRef=firestore.collection('collections');
           this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot=>{
                updateCollections(convertCollectionsSnapshopToMap(snapshot));
            });
        }
        render(){
            const {match}=this.props;
        return (<div>
                <div className="shop-page">
                    <Route exact path={`${match.path}`} component={Overview} />
                    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
                </div>
        </div>)
        }
    }
const mapDispatchToProps=dispatch=>({
    updateCollections:collections=>dispatch(UpdateState(collections))
})

export default connect(null,mapDispatchToProps)(Shop);