{% extends '../layout.swig' %}

{% block content %}
<div class="section no-pad-bot" id="index-banner">
    <div class="container">
        <br><br>
        <h1 class="header center orange-text">{{ title }}</h1>
        <div class="row center">
            <h5 class="header col s12 light">Welcome to {{ title }}</h5>
        </div>
        <div class="photo col s12 m12">
          <h2>{{ photo.title }}</h2>
          {% if photo.image.url %}
          <img src="{{ photo.image.url }}" width='100%'></img>
          <a href="{{ photo.image.url }}" target="_blank">
            {{ cloudinary.image(photo.image.public_id, {width: 150, height: 150, quality: 80,crop:'fill',format:'png',class:'thumbnail inline'})  }}
          </a>
          {% endif %}
        </div>
        <br>
        <br>
        <br>
    </div>
</div>

{% endblock %}
