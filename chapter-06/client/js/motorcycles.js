(function(){
	'use strict';
	// create a interface component
	var Motorcycle = React.createClass({

		render: function() {
			return (
				<div className="card">
					<img className="card-img-top" src={this.props.image} alt={this.props.make} width="100%"/>
					<div className="card-block">
						<h4 className="card-title">{this.props.make}</h4>
						<p className="card-text">{this.props.description}</p>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item"><strong>Model:</strong> {this.props.model}</li>
						<li className="list-group-item"><strong>Category:</strong> {this.props.category}</li>
						<li className="list-group-item"><strong>Year:</strong> {this.props.year}</li>
					</ul>
				</div>
			);
		}
	});
	// create a motorcycle box component
	var MotorcycleBox = React.createClass({
		loadMotorcyclesFromServer: function() {
			$.ajax({
				url: this.props.api,
				type: 'GET',
				dataType: 'json',
				cache: false,
				success: function(data) {
					console.log(data);
					this.setState({data: data});
				}.bind(this),
				error: function(xhr, status, err) {
					console.error(this.props.api, status, err.toString());
				}.bind(this)
			});
		},
		getInitialState: function() {
			return {
				data: []
			};
		},
		componentDidMount: function() {
			this.loadMotorcyclesFromServer();
		},
		render: function() {
			return (
				<div>
					<MotorcycleList data={this.state.data} />
				</div>
			);
		}
	});

	var MotorcycleList = React.createClass({
		render: function() {
			var motorcycleNodes = this.props.data.map(function(motorcycle) {
				console.log(motorcycle);
				return (
					<Motorcycle image={motorcycle.image} make={motorcycle.make} model={motorcycle.model} description={motorcycle.description} category={motorcycle.category} year={motorcycle.year} key={motorcycle.id}> </Motorcycle>
				);
			});
			return (
				<div className="motorcycles">
					{motorcycleNodes}
				</div>
			);
		}
	});

	ReactDOM.render(
		<MotorcycleBox api="/api/motorcycles"/>, document.getElementById('motorcycle')
	);
})();
