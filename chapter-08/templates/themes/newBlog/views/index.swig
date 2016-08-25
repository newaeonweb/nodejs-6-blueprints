{% extends "../layouts/default.swig" %}

{% block content %}
<div class="container">
		<div class="row">
			<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
			{% for post in data.posts %}
				<div class="post-preview">
					<a href="/blog/post/{{ post.slug }}">
						<h2 class="post-title">
							{{ post.title }}
						</h2>
						<h3 class="post-subtitle">
							{{ post.content.brief | safe }}
						</h3>
					</a>
					<p class="post-meta">Posted by <span class="text-primary">
					{% if post.author %} {{ post.author.name.first }} {% endif %}
					</span> {% if post.publishedDate %}
						on {{ post._.publishedDate.format("MMMM Do, YYYY") }}
					{% endif %}</p>
				</div>
				<hr>
			{% endfor %}
				<!-- Pager -->
				{% if data.posts %}
				<ul class="pager">
					<li class="next">
						<a href="/blog">Older Posts &rarr;</a>
					</li>
				</ul>
				{% endif %}
			</div>
		</div>
	</div>

{% endblock %}
