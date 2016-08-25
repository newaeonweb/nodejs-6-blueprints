{% extends "../layouts/default.swig" %}

{% block intro %}
	<div class="container">
		<h1>Contact Us</h1>
	</div>
{% endblock %}

{% block content %}
	<div class="container">
		{% if enquirySubmitted %}
			<h3>Thanks for getting in touch.</h3>
		{% else %}
			<div class="row control-group">
				<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
					<form method="post">
						<input type="hidden" name="action" value="contact">
						{% set className = "" %}
						{% if validationErrors.name %}
							{% set className = "has-error" %}
						{% endif %}
						<div class="form-group {{ className }} col-xs-12 floating-label-form-group controls">
							<label>Name</label>
							<input type="text" name="name.full" value="{{ formData['name.full'] | default('') }}" class="form-control" placeholder="Name">
						</div>
						{% set className = "" %}
						{% if validationErrors.email %}
							{% set className = "has-error" %}
						{% endif %}
						<div class="form-group {{ className }} col-xs-12 floating-label-form-group controls">
							<label>Email</label>
							<input type="email" name="email" value="{{ formData.email | default('') }}" class="form-control" placeholder="E-mail">
						</div>
						<div class="form-group col-xs-12 floating-label-form-group controls">
							<label>Phone</label>
							<input type="text" name="phone" value="{{ formData.phone | default('') }}" placeholder="Phone Number (Optional)" class="form-control">
						</div>
						{% set className = "" %}
						{% if validationErrors.enquiryType %}
							{% set className = "has-error" %}
						{% endif %}
						<div class="form-group {{ className }} col-xs-12 floating-label-form-group controls">
							<span class="title-label text-muted">What are you contacting us about?</span>
							<br>
								<select name="enquiryType" class="form-control">
									<option value="">(select one)</option>
									{% for type in enquiryTypes %}
										{% set selected = "" %}
										{% if formData.enquiryType === type.value %}
											{% set selected = " selected" %}
										{% endif %}
										<option value="{{ type.value }}"{{ selected }}>{{ type.label }}</option>
									{% endfor %}
								</select>
						</div>
						{% set className = "" %}
						{% if validationErrors.message %}
							{% set className = "has-error" %}
						{% endif %}
						<div class="form-group {{ className }} col-xs-12 floating-label-form-group controls">
                            <label>Message</label>
                            <textarea rows="5" class="form-control" placeholder="Message" name="message"></textarea>
                            {{ formData.message }}
                        </div>
						<br>
						<div class="row">
							<div class="form-group col-xs-12">
								<button type="submit" class="btn btn-default">Send</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		{% endif %}
	</div>
{% endblock %}
