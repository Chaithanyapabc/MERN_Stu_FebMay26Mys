const out = document.getElementById("out");
const inspectBtn = document.getElementById("inspectBtn");

inspectBtn.addEventListener("click",function(){
    const info = {
        htmlLang : document.documentElement.lang,
        charset: document.characterSet,
        //browser's primary prefered langvage
        browserLangvage : navigator.language,
        //Array of all browsered langvage
        browserLangvages : navigator.languages,
        sampleText : document.getElementById("sampleText").textContent
    };
    console.log(info);
    out.textContent = JSON.stringify(info,null,2);
});