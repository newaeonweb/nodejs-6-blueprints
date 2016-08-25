{% extends '../layout.swig' %}

{% block content %}
<div class="section no-pad-bot" id="index-banner">
    <div class="container">
        <br><br>
        <h1 class="header center orange-text">{{ title }}</h1>
        <div class="row center">
            <h5 class="header col s12 light">Welcome to {{ title }}</h5>
        </div>
        <br><br>

        {% if photos.length == 0 %}
          <div class="row center">
              <div class="card-panel orange lighten-2">No photos yet, click add picture to upload</div>
          </div>
        {% endif %}

        <div class="row">
        {% for item in photos %}
            <div class="col s12 m4">
                <div class="icon-block">
                    <h5 class="center">{{ item.title }}</h5>
                      {{ cloudinary.image(item.image.public_id, { width: 280, height: 200, quality: 80,crop: 'fill',format:'png', effect: 'brightness:20', radius: 5, class:'materialboxed' }) | safe }}
                    {#
                      Swig comment tag
                      <img class="materialboxed" src="{{ item.image.url }}" height='200' width='100%' alt="{{ item.title }}" data-caption="{{item.description}}"></img>
                    #}
                    <p class="light">{{ item.description }}</p>
                    <a href="{{ cloudinary.url(item.image.url) }}" target="_blank">
                      Link to original image
                    </a>
                </div>
            </div>
        {% endfor %}
        </div>
    </div>
</div>
{% endblock %}
