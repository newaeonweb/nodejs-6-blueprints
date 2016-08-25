{% extends "../layouts/default.swig" %}

{% block intro %}
	<div class="container">
		<h1>Gallery</h1>
	</div>
{% endblock %}

{% block content %}
	<div class="container">
		{% if galleries.length %}
			{% for gallery in galleries %}
				<h2>{{ gallery.name }}
					{% if gallery.publishedDate %}
						<span class="pull-right text-muted">{{ gallery._.publishedDate.format("Do MMM YYYY") }}</span>
					{% endif %}
				</h2>
				<div class="row">
					{% if gallery.heroImage.exists %}
						<div class="gallery-image">
							<img src="{{ gallery._.heroImage.limit(0.73,200) }}">
						</div>
						<br>
						<hr>
						<div class="row">
							<div class='list-group gallery'>
							{% for image in gallery.images %}
					            <div class='col-sm-6 col-xs-6 col-md-4 col-lg-4'>
					                <a class="thumbnail fancybox" rel="ligthbox" href="{{ image.limit(640,480) }}">
					                    <img class="img-responsive" alt="" src="{{ image.limit(300,320) }}" />
					                </a>
					            </div>
							{% endfor %}
					        </div>
						</div>
					{% else %}
						<div class="row">
							<div class='list-group gallery'>
							{% for image in gallery.images %}
								<div class='col-sm-6 col-xs-6 col-md-4 col-lg-4'>
									<a class="thumbnail fancybox" rel="ligthbox" href="{{ image.limit(640,480) }}">
										<img class="img-responsive" alt="" src="{{ image.limit(300,320) }}" />
									</a>
								</div>
							{% endfor %}
							</div>
						</div>
					{% endif %}
				</div>
			{% endfor %}
		{% else %}
			<h3 class="text-muted">There are no image galleries yet.</h3>
		{% endif %}
	</div>
{% endblock %}
