{% extends "../layouts/default.swig" %}

{% block content %}
	<article>
		<div class="container">
		<a href="/blog">&larr; back to the blog</a>
			<div class="row">
				<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
				{% if not data.post %}
					<h2>Invalid Post.</h2>
					{% else %}
					<h1>{{ data.post.title }}</h1>
					{% if data.post.publishedDate %}
						on {{ data.post._.publishedDate.format("MMMM Do, YYYY") }}
					{% endif %}
					{% if data.post.categories and data.post.categories.length %}
						in
						{% for cat in data.post.categories %}
							<a href="/blog/{{ cat.key }}">{{ cat.name }}</a>
							{% if loop.index < data.post.categories.length - 1 %}, {% endif %}
						{% endfor %}
					{% endif %}
					{% if data.post.author %}
						by {{ data.post.author.name.first }}
					{% endif %}
					<div class="post">
						{% if data.post.image.exists %}
							<div class="image-wrap">
								<img src="{{ data.post._.image.fit(750,450) }}" class="img-responsive">
							</div>
						{% endif %}
						{{ data.post.content.full | raw }}
					</div>
				{% endif %}
				</div>
			</div>
		</div>
	</article>
	<hr>
{% endblock %}
