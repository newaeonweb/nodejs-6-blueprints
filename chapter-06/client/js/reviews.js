(function(){
	'use strict';

	var Review = React.createClass({

		render: function() {
			return (
				<div className="list-group-item">
					<small className="text-muted pull-right">{this.props.email}</small>
					<h4 className="list-group-item-heading">
						{this.props.name}
					</h4>
					<p class="list-group-item-text">{this.props.review}</p>
				</div>
			);
		}
	});

	var ReviewBox = React.createClass({
		loadReviewsFromServer: function() {
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
		handleReviewSubmit: function(review) {
			var reviews = this.state.data;
			// Don' use Date.now() on production, this is here just for the example.
			review.id = Date.now().toString();
			var newReviews = reviews.concat([review]);
			this.setState({data: newReviews});
			console.log(review);
			$.ajax({
				url: this.props.api,
				dataType: 'json',
				type: 'POST',
				data: review,
				success: function(data) {
					console.log(data);
				}.bind(this),
				error: function(xhr, status, err) {
					this.setState({data: reviews});
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
			this.loadReviewsFromServer();
		},
		render: function() {
			return (
				<div>
					<ReviewList data={this.state.data} />
					<ReviewForm onReviewSubmit={this.handleReviewSubmit} />
				</div>
			);
		}
	});

	var ReviewList = React.createClass({
		render: function() {
			var reviewNodes = this.props.data.map(function(review) {
				return (
					<Review name={review.name} review={review.review} email={review.email} key={review.id}> </Review>
				);
			});
			return (
				<div className="list-group">
					{reviewNodes}
				</div>
			);
		}
	});

	var ReviewForm = React.createClass({
		getInitialState: function() {
			return {name: '', email: '', review: '', model: ''};
		},
		handleAuthorChange: function(e) {
			this.setState({name: e.target.value});
		},
		handleEmailChange: function(e) {
			this.setState({email: e.target.value});
		},
		handleTextChange: function(e) {
			this.setState({review: e.target.value});
		},
		handleSubmit: function(e) {
			e.preventDefault();
			var name = this.state.name.trim();
			var email = this.state.email.trim();
			var review = this.state.review.trim();
			var model = '57337088fabe969f2dd4078e';
			if (!review || !name) {
				return;
			}
			this.props.onReviewSubmit({name: name, email:email, model:model, review: review});
			this.setState({name: '', email: '', review: '', model: ''});
		},
		render: function() {
			return (
				<div>
				<hr/>
				<form onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="col-lg-6">
							<fieldset className="form-group">
								<label for="InputName">Name</label>
								<input type="review" className="form-control" id="InputName" placeholder="Name" value={this.state.name}
									   onChange={this.handleAuthorChange} />
							</fieldset>
						</div>
						<div className="col-lg-6">
							<fieldset className="form-group">
								<label for="InputEmail">Email</label>
								<input type="review" className="form-control" id="InputEmail" placeholder="Email" value={this.state.email}
									   onChange={this.handleEmailChange}
									    />
							</fieldset>
						</div>
					</div>
					<fieldset className="form-group">
						<label for="TextareaFeedback">Feedback</label>
						<textarea className="form-control" id="TextareaFeedback" rows="3" value={this.state.review} onChange={this.handleTextChange} />
					</fieldset>

					<button type="submit" className="btn btn-primary" value="Post">Submit</button>
				</form>
				</div>
			);
		}
	});

	ReactDOM.render(
		<ReviewBox api="/api/reviews"/>, document.getElementById('content')
	);
})();
