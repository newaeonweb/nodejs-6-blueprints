{% extends "../layouts/default.swig" %}

{% block content %}
<div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
			{% for about in data.abouts %}
			<h1>{{ about.title }}</h1>
            <p>{{ about.description }}</p>
            </div>
			{% endfor %}
        </div>
</div>
{% endblock %}
