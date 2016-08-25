<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>{{ title }}</title>
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <!-- Import Google Material font and icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <nav class="orange darken-4" role="navigation">
        <div class="nav-wrapper container"><a id="logo-container" href="/" class="brand-logo">Logo</a>
            <ul class="right hide-on-med-and-down">
                <li><a href="/books">Books</a></li>
                <li><a href="/books/add">Add Picture</a></li>
            </ul>

            <ul id="nav-mobile" class="side-nav" style="transform: translateX(-100%);">
                <li><a href="/books">Books</a></li>
                <li><a href="/books/add">Add Picture</a></li>
            </ul>
            <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
        </div>
    </nav>
    {% block content %}{% endblock %}
    <!-- Footer -->
    <footer class="page-footer orange darken-4">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h5 class="white-text">Some Text Example</h5>
                    <p class="grey-text text-lighten-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div class="col l3 s12">
                    <h5 class="white-text">Sample Links</h5>
                    <ul>
                        <li><a class="white-text" href="#!">Link 1</a></li>
                        <li><a class="white-text" href="#!">Link 2</a></li>
                        <li><a class="white-text" href="#!">Link 3</a></li>
                        <li><a class="white-text" href="#!">Link 4</a></li>
                    </ul>
                </div>
                <div class="col l3 s12">
                    <h5 class="white-text">Sample Links</h5>
                    <ul>
                        <li><a class="white-text" href="#!">Link 1</a></li>
                        <li><a class="white-text" href="#!">Link 2</a></li>
                        <li><a class="white-text" href="#!">Link 3</a></li>
                        <li><a class="white-text" href="#!">Link 4</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">
                MVC Express App for: <a class="white-text text-darken-2" href="#">Node.js 6 Blueprints Book</a>
            </div>
        </div>
    </footer>
    <!-- Place scripts at the bottom page-->
    {% if ENV_DEVELOPMENT %}
    <script src="http://localhost:35729/livereload.js"></script>
    {% endif %}

    <!--Import jQuery before materialize.js-->
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
    <!-- Init Rsponsive Sidenav Menu  -->
    <script>
    (function($){
        $(function(){
            $('.button-collapse').sideNav();
            $('.materialboxed').materialbox();
        });
    })(jQuery);
    </script>
</body>
</html>
