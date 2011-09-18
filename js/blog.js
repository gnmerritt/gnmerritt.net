// helper methods

var $ = function(element)
{
    return document.getElementById(element);
}

Element.prototype.hasClass = function(cls)
{
    return this.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

Element.prototype.addClass = function(cls)
{
    if (!this.hasClass(cls)) this.className += " "+cls;
}

Element.prototype.removeClass = function(cls)
{
    if (this.hasClass(cls)) {
	var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
	this.className=this.className.replace(reg,' ').replace(/^\s|\s$/,'');
    }
}

var gnm =
{
    // toggles the 'closed' class on an item, used to show/hide on demand
    togglePost:function(source, elemId)
    {
	var article = $(elemId);
	if (article != null && source != null)
	{
	    if (article.hasClass('closed'))
	    {
		article.removeClass('closed');
		source.innerHTML = 'Hide Post'
	    }
	    else
	    {
		article.addClass('closed');
		source.innerHTML = 'Show Post'
	    }
	}
    },

}

