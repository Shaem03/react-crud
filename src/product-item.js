import React from 'react';
import ReactDOM from 'react-dom';

class ProducItem extends React.Component {
 constructor(props){
    super(props);

    this.state = {
      isEdit: false
    };
    this.onDeleteProd = this.onDeleteProd.bind(this);
    this.onEditProd = this.onEditProd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
 }

 onDeleteProd() {
    const { onDelete , name } = this.props;
    onDelete(name);
 }

 onEditProd() {
    const { onDelete , name } = this.props;
 }

 onEditProd(){
    this.setState({isEdit: true})
 }

onEditSubmit(event){
    event.preventDefault();
    this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.name);
    this.setState({ isEdit: false});
 }

  render() {
    const {name, price, onDeleteProd, onEditProd} = this.props;

    return (
      <div>
          {
            this.state.isEdit
            ? (
                <form onSubmit = {this.onEditSubmit}>
                    <input placeholder="Name" ref ={nameInput => this.nameInput = nameInput} defaultValue={name}/>
                    <input placeholder="Price" ref ={priceInput => this.priceInput = priceInput} defaultValue={price}/>
                    <button> Save </button>
                </form>
            )
            : (
                <div>
                  <span> {name} </span>
                  {'|'}
                  <span> {price} </span>
                  {'|'}
                  <button onClick= {this.onEditProd}> Edit </button>
                  {'|'}
                  <button onClick= {this.onDeleteProd}> Delete </button>
                </div>
            )
          }
      </div>
    );
  }
}

export default ProducItem;