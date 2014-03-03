define([
       "jquery", 
       "collections/snippets",
       "collections/my-form-snippets", 
       "views/tab",
       "views/my-form",
       //"text!data/input.json", "text!data/radio.json", "text!data/select.json", "text!data/button.json",
       //"text!templates/app/render.html",  "text!templates/app/about.html",  
], function(
  $, 
  SnippetsCollection, 
  MyFormSnippetsCollection,
  TabView,
  MyFormView,
  inputJSON, radioJSON, selectJSON, buttonJSON,
  renderTab, aboutTab
){
  return {
    initialize: function(){ 
    	new TabView({
    		title: "Input",
    		//collection: new SnippetsCollection(JSON.parse(inputJSON)),
    	});
    	
    	
    	//Make the first tab active!
	    $("#components .tab-pane").first().addClass("active");
	    $("#formtabs li").first().addClass("active");
	     
	     	     
	    new MyFormView({
        	title: "Original", 
        	collection: new MyFormSnippetsCollection([
		          { "title" : "Form Name", 
		            "fields": {
		              "name" : {
		                "label"   : "Form Name", 
		                "type"  : "input", 
		                "value" : "Form Name"
		              }
		            }
		          }
		        ])
		});
  	}
 }
});