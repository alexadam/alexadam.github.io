var cons = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z'];
var vow = ['a', 'e', 'i', 'o', 'u', 'y'];

function generateConsVow(inputStr) {
    var result = '';
    for (var i = 0; i < inputStr.length; i++) {
        var ch = inputStr.charAt(i);
        if (ch.toLowerCase() === 'c') {
            result += cons[Math.round(Math.random() * (cons.length - 1))];
        } else if (ch.toLowerCase() === 'v') {
            result += vow[Math.round(Math.random() * (vow.length - 1))];
        }
    }
    return result;
}

/*
 j = adjective
 a = adverb
 n = noun
 r = preposition
 p = pronoun
 v = verb
*/
function generateWords(inputStr) {
    var result = '';
    for (var i = 0; i < inputStr.length; i++) {
        var ch = inputStr.charAt(i);
        if (ch.toLowerCase() === 'j') {
            result += adjectives[Math.round(Math.random() * (adjectives.length - 1))];
        } else if (ch.toLowerCase() === 'a') {
            result += adverbs[Math.round(Math.random() * (adverbs.length - 1))];
        } else if (ch.toLowerCase() === 'n') {
            result += nouns[Math.round(Math.random() * (nouns.length - 1))];
        } else if (ch.toLowerCase() === 'r') {
            result += prepositions[Math.round(Math.random() * (prepositions.length - 1))];
        } else if (ch.toLowerCase() === 'p') {
            result += pronouns[Math.round(Math.random() * (pronouns.length - 1))];
        } else if (ch.toLowerCase() === 'v') {
            result += verbs[Math.round(Math.random() * (verbs.length - 1))];
        }

        result += ' ';
    }
    return result.trim();
}

/////////

var namegen = angular.module('namegen', ['ngRoute']);

namegen.config(function ($routeProvider) {
    $routeProvider.when('/cv', {
        templateUrl: 'templates/cv.html',
        controller: 'cvCtrl'
    }).when('/w', {
        templateUrl: 'templates/w.html',
        controller: 'wCtrl'
    }).
    otherwise({
        redirectTo: '/cv'
    });
});

namegen.controller('cvCtrl', function ($scope) {
    $scope.inputStr = 'cvcv';
    $scope.input = [{
        name: 'c',
        class: 'c'
        }, {
        name: 'v',
        class: 'v'
        }, {
        name: 'c',
        class: 'c'
        }, {
        name: 'v',
        class: 'v'
}];

    $scope.generated = '';

    $scope.$watchCollection('input', function () {
        $scope.arrToStr();
    });

    $scope.addCons = function () {
        $scope.input.push({
            name: 'c',
            class: 'c'
        });
    };
    $scope.addVow = function () {
        $scope.input.push({
            name: 'v',
            class: 'v'
        })
    };
    $scope.clear = function () {
        $scope.input = [];
    };
    $scope.removeLast = function () {
        $scope.input.splice($scope.input.length - 1, 1);
    };
    $scope.arrToStr = function () {
        $scope.inputStr = '';
        $scope.input.forEach(function (element) {
            $scope.inputStr += element.name;
        });
    };
    $scope.generate = function () {
        $scope.generated = generateConsVow($scope.inputStr);
    }
    $scope.random = function () {
        var funcs = [$scope.addCons, $scope.addVow];
        var nf = funcs[Math.round(Math.random() * (funcs.length - 1))];
        nf.apply();
    }

});

namegen.controller('wCtrl', function ($scope) {
    $scope.inputStr = 'janrpv';
    $scope.input = [{
        name: 'j',
        class: 'j'
        }, {
        name: 'a',
        class: 'a'
        }, {
        name: 'n',
        class: 'n'
        }, {
        name: 'r',
        class: 'r'
        }, {
        name: 'p',
        class: 'p'
        }, {
        name: 'v',
        class: 'v'
        }];
    $scope.generated = '';

    $scope.$watchCollection('input', function () {
        $scope.arrToStr();
    });

    $scope.addAdjective = function () {
        $scope.input.push({
            name: 'j',
            class: 'j'
        });
    };
    $scope.addAdverb = function () {
        $scope.input.push({
            name: 'a',
            class: 'a'
        });
    };
    $scope.addNoun = function () {
        $scope.input.push({
            name: 'n',
            class: 'n'
        });
    };
    $scope.addPreposition = function () {
        $scope.input.push({
            name: 'r',
            class: 'r'
        });
    };
    $scope.addPronoun = function () {
        $scope.input.push({
            name: 'p',
            class: 'p'
        });
    };
    $scope.addVerb = function () {
        $scope.input.push({
            name: 'v',
            class: 'v'
        });
    };
    $scope.clear = function () {
        $scope.input = [];
    };
    $scope.removeLast = function () {
        $scope.input.splice($scope.input.length - 1, 1);
    };
    $scope.arrToStr = function () {
        $scope.inputStr = '';
        $scope.input.forEach(function (element) {
            $scope.inputStr += element.name;
        });
    };
    $scope.generate = function () {
        $scope.generated = generateWords($scope.inputStr);
    }
    $scope.random = function () {
        var funcs = [$scope.addAdjective, $scope.addAdverb, $scope.addNoun, $scope.addPreposition, $scope.addPronoun, $scope.addVerb];
        var nf = funcs[Math.round(Math.random() * (funcs.length - 1))];
        nf.apply();
    }

});