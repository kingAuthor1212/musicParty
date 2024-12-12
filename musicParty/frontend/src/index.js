<!DOCTYPE html>
<html>
<head>
<meta name='viewport' content="width=device-width, initial-scale=1"/>
<title>musicParty</title>
{% load static %}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
<link rel="stylesheet" type="text/css" href="{% static "css/index.css" %}"/>
</head>

<body>
<div id="main">
        <div id="app"></div>
    </div>
    <script src="{% static "frontend/main.js" %}"></script>
</body>

</html>