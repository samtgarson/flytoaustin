angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("features/_feature/_feature.html","");
$templateCache.put("features/home/_home.html","");
$templateCache.put("features/place/_place.html","<div class=\"place-wrapper\">\n    <div class=\"module\">\n        <h2>{{title}}</h2>\n        <p>{{place.copy}}</p>\n        <a class=\"module__link\" href=\"http://google.com\" target=\"_blank\">See the website</a>\n    </div>\n    <div class=\"module\" ng-repeat=\"img in place.gallery\" style=\"background-image: url(\'{{img}}\');\"></div>\n</div>");
$templateCache.put("patterns/_pattern/_pattern.html","");
$templateCache.put("patterns/menu-button/_menu-button.html","<button class=\"lines-button\" ng-click=\"toggle()\" ng-class=\"{\'closed\': closed}\" type=\"button\" role=\"button\" aria-label=\"Toggle Navigation\">\n  <span class=\"lines\"></span>\n</button>");}]);