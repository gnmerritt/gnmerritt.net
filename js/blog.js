// helper methods

var $ = function(element)
{
    return document.getElementById(element);
}

Element.prototype.hasClass = function(cls)
{
    return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

Element.prototype.addClass = function(cls)
{
    if (!this.hasClass(ele,cls)) ele.className += " "+cls;
}

Element.prototype.removeClass = function(cls)
{
    if (hasClass(ele,cls)) {
	var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
	ele.className=ele.className.replace(reg,' ').replace(/^\s|\s$/,'');
    }
}

var gnm =
{
    // toggles the 'closed' class on an item, used to show/hide on demand
    toggleOpen:function(elemId)
    {
	var source = $(elemId);
	if (source != null)
	{
	    if (source.hasClass('closed'))
	    {
		source.removeClass('closed');
	    }
	    else
	    {
		source.addClass('closed');
	    }
	}
    },

}

