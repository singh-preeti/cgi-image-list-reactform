import React from 'react';

class SearchInput extends React.Component{

    state = {entry: ''}
    // constructor(){
    //     super()
    //     this.onFormSubmit = this.onFormSubmit.bind(this)
    // }
    // onInputChange(event){
    // console.log(event.target.value)
    // }
  onFormSubmit = (event) => {
  event.preventDefault()
  //console.log(this.state.entry)
  this.props.onSearchSubmit(this.state.entry)
  }
    render(){
        return(
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <div className='ui massive icon input'>
                        <input type='text' 
                        placeholder='search...'
                        onChange={(event) => this.setState({entry:event.target.value})} 
                        value={this.state.entry} />
                        <i className='search icon'></i>
                        </div>
                    </div>
                   

                </form>
            </div>
        )
    }
}
export default SearchInput;