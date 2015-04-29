angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("features/_feature/_feature.html","");
$templateCache.put("features/home/_home.html","home");
$templateCache.put("patterns/_pattern/_pattern.html","");
$templateCache.put("patterns/menu-button/_menu-button.html","<button class=\"lines-button\" ng-click=\"toggle()\" ng-class=\"{\'closed\': closed}\" type=\"button\" role=\"button\" aria-label=\"Toggle Navigation\">\n  <span class=\"lines\"></span>\n</button>");}]);