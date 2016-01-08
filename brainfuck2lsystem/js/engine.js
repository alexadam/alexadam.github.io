

function translate2bf() {
    var gtsym = $("#translate-gt").val();
    var ltsym = $("#translate-lt").val();
    var plussym = $("#translate-plus").val();
    var minussym = $("#translate-minus").val();
    var sosym = $("#translate-so").val();
    var scsym = $("#translate-sc").val();
    var inputsym = $("#translate-input").val();
    var outputsym = $("#translate-output").val();
    
    var bfcode = $("#bfsource").val();
    var angle = $("#angle").val();
    
    var translatedBfCode = bfcode;
    translatedBfCode = translatedBfCode.replace(/>/g, gtsym);
    translatedBfCode = translatedBfCode.replace(/</g, ltsym);
    translatedBfCode = translatedBfCode.replace(/\+/g, plussym);
    translatedBfCode = translatedBfCode.replace(/\-/g, minussym);
    translatedBfCode = translatedBfCode.replace(/\[/g, sosym);
    translatedBfCode = translatedBfCode.replace(/\]/g, scsym);
    translatedBfCode = translatedBfCode.replace(/\./g, inputsym);
    translatedBfCode = translatedBfCode.replace(/,/g, outputsym);
    translatedBfCode = translatedBfCode.replace(/\s+/g, "");
    
    $("#transcode").val(translatedBfCode);
}