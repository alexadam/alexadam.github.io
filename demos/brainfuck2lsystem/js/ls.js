// l-system generator
// Source : http://www.plastaq.com/elsy/

"use strict";

var LSystem = (function () {
    function LSystem(rules, seed, angle, name, iterations, scale) {
        this.rules = rules;
        this.seed = seed;
        this.angle = angle;
        this.name = name;
        this.scale = scale;
        this.iterations = 1;
    }

    LSystem.prototype.generate = function (iterations) {
        var i, p;
        var prod = this.seed;
        var newProd = "";

        for (i = 0; i < iterations; i++) {
            newProd = "";
            for (p = 0; p < prod.length; p++) {
                if (this.rules[prod[p]] === undefined) {
                    newProd += prod[p];
                } else {
                    newProd += this.rules[prod[p]];
                }
            }
            prod = newProd;
        }

        return prod;
    };

    LSystem.prototype.compute = function (iterations) {
        var prod = this.generate(iterations);
        var a = 0;
        var i;
        var aStep = this.angle * Math.PI / 180;
        var p = {x: 0, y: 0};
        this.maxX = this.minX = this.maxY = this.minY = 0;
        this.paths = [];
        var path = [];
        var stack = [];

        for (i = 0; i < prod.length; i++) {
            path.push({x: p.x, y: p.y});
            switch (prod[i].toLowerCase()) {
                case "[":
                    stack.push({x: p.x, y: p.y, a: a});
                    break;
                case "]":
                    this.paths.push(path);
                    path = [];
                    var top = stack.pop();
                    p.x = top.x;
                    p.y = top.y;
                    a = top.a;
                    break;
                case "-":
                    a -= aStep;
                    break;
                case "+":
                    a += aStep;
                    break;
                case "f":
                    p.x += Math.cos(a);
                    p.y += Math.sin(a);
                    break;
            }
        }
        if (path.length > 0) {
            this.paths.push(path);
        }
    };

    LSystem.prototype.draw = function (canvas, iterations) {
        var i, p;
        this.compute(iterations);

        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#fff";
        ctx.strokeStyle = "#000";
        var xRatio = this.scale; //canvas.width / (this.maxX - this.minX);
        var yRatio = this.scale; //canvas.height / (this.maxY - this.minY);

        for (p = 0; p < this.paths.length; p++) {
            ctx.beginPath();
            var path = this.paths[p];
            ctx.moveTo(path[0].x * xRatio + canvas.width / 2, path[0].y * yRatio + canvas.height / 2);
            for (i = 1; i < path.length; i++) {
                ctx.lineTo(path[i].x * xRatio + canvas.width / 2, path[i].y * yRatio + canvas.height / 2);
            }
            ctx.stroke();
        }
    };
    return LSystem;
})();

var canvas;
var form;

function render() {
    var rules = {};
    var ruleTxt = $("#transcode").val().trim().split("\n");
    $.each(ruleTxt, function (i, v) {
        rules['x'] = v;
    });
    var seed = 'x';
    var angle = parseInt($("#angle").val(), 10);
    var iterations = 1; //parseInt($("#iterations").val(), 10);
    var scale = parseFloat($("#scale").val());
    var ls = new LSystem(rules, seed, angle, "no name", iterations, scale);
    if (iterations >= 1) {
        ls.draw(canvas, iterations);
    }
}   


$(document).ready(function () {
    canvas = $("#canvas").get(0);
});
