angular.module('templates-app', ['about/about.tpl.html', 'applixml/applixml.tpl.html', 'home/home.tpl.html', 'l10nmessages/l10nmessages.tpl.html', 'messagecatalog/messagecatalog.tpl.html', 'xsdmessages/xsdmessages.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<h1>About</h1>\n" +
    "\n" +
    "<p>This is what this is about.</p>");
}]);

angular.module("applixml/applixml.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("applixml/applixml.tpl.html",
    "<h1>Applixml</h1>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<h1>Home of Zoli</h1>\n" +
    "\n" +
    "<p>Code it up</p>\n" +
    "\n" +
    "<p>\n" +
    "    <span ng-bind=\"model.someVar\" />\n" +
    "    <ul>\n" +
    "        <li ng-repeat=\"item in model.someList\">{{item}}</li>\n" +
    "    </ul>\n" +
    "    <button class=\"btn btn-primary\" ng-click=\"model.someFunctionUsedByTheHomePage()\">Click Me</button>\n" +
    "</p>");
}]);

angular.module("l10nmessages/l10nmessages.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("l10nmessages/l10nmessages.tpl.html",
    "<h1>L10nmessages</h1>");
}]);

angular.module("messagecatalog/messagecatalog.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("messagecatalog/messagecatalog.tpl.html",
    "<h1>Messagecatalog</h1>");
}]);

angular.module("xsdmessages/xsdmessages.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xsdmessages/xsdmessages.tpl.html",
    "<h1>Xsdmessages</h1>");
}]);
