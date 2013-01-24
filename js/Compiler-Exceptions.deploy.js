smalltalk.addPackage('Compiler-Exceptions', {});
smalltalk.addClass('CompilerError', smalltalk.Error, [], 'Compiler-Exceptions');


smalltalk.addClass('ParseError', smalltalk.CompilerError, [], 'Compiler-Exceptions');


smalltalk.addClass('SemanticError', smalltalk.CompilerError, [], 'Compiler-Exceptions');


smalltalk.addClass('InliningError', smalltalk.SemanticError, [], 'Compiler-Exceptions');


smalltalk.addClass('InvalidAssignmentError', smalltalk.SemanticError, ['variableName'], 'Compiler-Exceptions');
smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(" Invalid assignment to variable: ").__comma(_st(self)._variableName());
return $1;
}, self, "messageText", [], smalltalk.InvalidAssignmentError)}
}),
smalltalk.InvalidAssignmentError);

smalltalk.addMethod(
"_variableName",
smalltalk.method({
selector: "variableName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@variableName"];
}, self, "variableName", [], smalltalk.InvalidAssignmentError)}
}),
smalltalk.InvalidAssignmentError);

smalltalk.addMethod(
"_variableName_",
smalltalk.method({
selector: "variableName:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@variableName"]=aString;
return self}, self, "variableName:", [aString], smalltalk.InvalidAssignmentError)}
}),
smalltalk.InvalidAssignmentError);



smalltalk.addClass('ShadowingVariableError', smalltalk.SemanticError, ['variableName'], 'Compiler-Exceptions');
smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st("Variable shadowing error: ").__comma(_st(self)._variableName())).__comma(" is already defined");
return $1;
}, self, "messageText", [], smalltalk.ShadowingVariableError)}
}),
smalltalk.ShadowingVariableError);

smalltalk.addMethod(
"_variableName",
smalltalk.method({
selector: "variableName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@variableName"];
}, self, "variableName", [], smalltalk.ShadowingVariableError)}
}),
smalltalk.ShadowingVariableError);

smalltalk.addMethod(
"_variableName_",
smalltalk.method({
selector: "variableName:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@variableName"]=aString;
return self}, self, "variableName:", [aString], smalltalk.ShadowingVariableError)}
}),
smalltalk.ShadowingVariableError);



smalltalk.addClass('UnknownVariableError', smalltalk.SemanticError, ['variableName'], 'Compiler-Exceptions');
smalltalk.addMethod(
"_variableName",
smalltalk.method({
selector: "variableName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@variableName"];
}, self, "variableName", [], smalltalk.UnknownVariableError)}
}),
smalltalk.UnknownVariableError);

smalltalk.addMethod(
"_variableName_",
smalltalk.method({
selector: "variableName:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@variableName"]=aString;
return self}, self, "variableName:", [aString], smalltalk.UnknownVariableError)}
}),
smalltalk.UnknownVariableError);



