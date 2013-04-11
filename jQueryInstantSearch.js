(function($){

	$.fn.instantSearch = function(search_list)
	{
		// this.keyup(checkMatch);
		// this.keydown(checkMatch);
		this.keypress(checkMatch);
		function checkMatch(event)
		{
			console.log(String.fromCharCode(event.which));
			$("#resultsbox").html("");//clear box
			
			var searchText = $(this).val().trim().toLowerCase();
			searchText = searchText + String.fromCharCode(event.which).trim();
			var matches = checkArray(searchText);
			$.each(matches, function(index, value)
			{
				$("#resultsbox").append("<div>"+search_list[value]+"</div>"); //here value is actually a pointer to an index of search_list
			});
			/*
			var value = this.value;
			var index = $.inArray(value, search_list);
			$("#resultsbox").html(search_list[index]);
			*/
		}

		function beginsWith(str, begin)
		{
			// return str.substr
		}

		function checkArray(str) //returns array of matching indices
		{
			var ret = [];
			for(var i=0; i<search_list.length; i++)
			{
				if(search_list[i].substr(0, str.length).toLowerCase() === str.toLowerCase()) //this element begins with str
				{
					ret.push(i);
				}
			}
			return ret;
		}


		var style = "background:white; border:1px solid; width:"+this.width()+"; position:absolute; left:"+this.offset().left+"; ";
		var results = $('<div id="resultsbox" style="'+style+'""></div>');
		results.append("test");
		results.insertAfter(this);

	}

	function temp(jsonUrl, numResults, triggerStringOrRegex)
	{

	}
	/*
		trigger: if none set, any keystroke will trigger a search

	*/

})(jQuery);