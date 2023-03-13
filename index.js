function introduction(name){
    console.log(`Hi, my name is ${name}.`);
    return introduction;
}
introduction("Aki");

function introductionWithLanguage(name, language){
    console.log(`Hi, my name is ${name} and I am learning to
    program in ${language}.`);
    return introductionWithLanguage;
}
introductionWithLanguage("Aki", "Ember.js");

function introductionWithLanguageOptional(name, language= "JavaScript"){
    console.log(`Hi, my name is ${name} and I am learning to
    program in ${language}.`);
    return introductionWithLanguageOptional;
}
introductionWithLanguageOptional("Gracie");
