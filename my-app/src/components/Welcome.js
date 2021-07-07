import React, {Component} from 'react'


class Oldzak extends Component{
	constructor(){
		super()
		this.state={
			frttd:'',
			sectd:'',
			thirtd:'',
			fortd:'',
			fivtd:'',
			sixtd:'',
			sevtd:'',
			eigtd:'',
			nintd:'',
			message:'click any box'
		}
	}
	firstClick(){
		this.setState({
			frttd:'1',
			message:'1 Box Clicked'
		})
	}
	secondClick(){
		this.setState({
			sectd:'2',
			message:'2 Box Clicked'
		})
	}
	thirdClick(){
		this.setState({
			thirtd:'3',
			message:'3 Box Clicked'
		})
	}
	forthClick(){
		this.setState({
			fortd:'4',
			message:'4 Box Clicked'
		})
	}
	fifthClick(){
		this.setState({
			fivtd:'5',
			message:'5 Box Cliced'
		})
	}
	sisthClick(){
		this.setState({
			sixtd:'6',
			message:'6 Box Clicked'
		})
	}
	senthClicked(){
		this.setState({
			sevtd:'7',
			message:'7 Box Clicked'
		})
	}
	eightClick(){
		this.setState({
			eigtd:'8',
			message:'8 Box Clicked'
		})
	}
	nineClicked(){
		this.setState({
			nintd:'9',
			message:'9 Box Clicked'
		})
	}
        

	render(){                            
		return(
			<div className="topnav">
			<div className="container">
				<h1>{this.state.message}</h1>
			   <table>
				   <tr>
					   <td onClick={()=>this.firstClick()}>{this.state.frttd}</td>
					   <td onClick={()=>this.secondClick()}>{this.state.sectd}</td>
					   <td onClick={()=>this.thirdClick()}>{this.state.thirtd}</td>
				   </tr>
				   <tr>
					   <td onClick={()=>this.forthClick()}>{this.state.fortd}</td>
					   <td onClick={()=>this.fifthClick()}>{this.state.fivtd}</td>
					   <td onClick={()=>this.sisthClick()}>{this.state.sixtd}</td>
				   </tr>
				   <tr>
					   <td onClick={()=>this.senthClicked()}>{this.state.sevtd}</td>
					   <td onClick={()=>this.eightClick()}>{this.state.eigtd}</td>
					   <td onClick={()=>this.nineClicked()}>{this.state.nintd}</td>
				   </tr>
			   </table>
			</div>
		</div>
		)
	}
}

export default Oldzak