{% extends 'layout.swig' %}

{% block content %}
<div class="section no-pad-bot" id="index-banner">
    <div class="container">
        <br><br>
        <h1 class="header center orange-text">{{ title }}</h1>
        <div class="row center">
            <h5 class="header col s12 light">Welcome to {{ title }}</h5>
        </div>
        <div class="row center">
            <a href="books/add" id="download-button" class="btn-large waves-effect waves-light orange">Create Your Photo Book</a>
        </div>
        <br><br>
    </div>
</div>
<div class="container">
    <div class="section">

        <!--   Icon Section   -->
        <div class="row">
            <div class="col s12 m4">
                <div class="icon-block">
                    <h5 class="center">Animals</h5>
                    <img src="http://lorempixel.com/300/200/animals" />
                    <p class="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div class="col s12 m4">
                <div class="icon-block">
                    <h5 class="center">Cities</h5>
                    <img src="http://lorempixel.com/300/200/city" />
                    <p class="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div class="col s12 m4">
                <div class="icon-block">
                    <h5 class="center">Nature</h5>
                    <img src="http://lorempixel.com/300/200/nature" />
                    <p class="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                </div>
            </div>
        </div>

    </div>
    <br><br>

    <div class="section">

    </div>
</div>

{% endblock %}
