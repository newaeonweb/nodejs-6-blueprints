{% extends '../layout.swig' %}

{% block content %}
<div class="section no-pad-bot" id="index-banner">
    <div class="container">
        <br><br>
        <h1 class="header center orange-text">{{ title }}</h1>
        <div class="row center">
            <h5 class="header col s12 light">Welcome to {{ title }}</h5>
        </div>

        <div class="photo">
          <h2>{{ photo.title }}</h2>
          {% if photo.image.url %}
          <img src="{{ photo.image.url }}" height='200' width='100%'></img>
          <a href="{{ photo.image.url }}" target="_blank">
            {{ cloudinary.image(photo.image.public_id, {width: 150, height: 150, quality: 80,crop:'fill',format:'png',class:'thumbnail inline'})  }}
          </a>
          {% endif %}
        </div>

        <div class="card">
            <div class="card-content orange-text">
                <form action="/books/add" enctype="multipart/form-data" method="POST">
                    <div class="input-field">
                        <input id="title" name="title" type="text" value="{{ photo.title }}" class="validate">
                        <label for="title">Image Title</label>
                    </div>
                    <div class="file-field input-field">
                        <div class="btn orange">
                            <span>Choose File</span>
                            <input type="file" name="image">
                            <input id="photo_image_cache" name="image_cache" type="hidden" />
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text">
                        </div>
                    </div>
                    <div class="input-field col s12">
                        <select class="browser-default" id="category" name="category">
                          <option value="" disabled selected>Choose a category</option>
                          <option value="animals">Animals</option>
                          <option value="cities">Cities</option>
                          <option value="nature">Nature</option>
                        </select>
                    </div>
                    <div class="input-field">
                        <input id="description" name="description" type="text" value="{{ photo.description }}" class="validate">
                        <label for="description">Image Text Description</label>
                    </div>
                    <br>
                    <br>
                    <div class="row center">
                        <button class="btn orange waves-effect waves-light" type="submit" name="action">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <br>
        <br>
        <br>
    </div>
</div>

{% endblock %}
