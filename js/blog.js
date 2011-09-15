// helper methods

function $(element)
{
    return document.getElementById(element);
}

function hasClass(ele,cls)
{
    return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function addClass(ele,cls)
{
    if (!this.hasClass(ele,cls)) ele.className += " "+cls;
}

function removeClass(ele,cls)
{
    if (hasClass(ele,cls)) {
	var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
	ele.className=ele.className.replace(reg,' ');
    }
}

var gnm =
{
    // toggles the 'closed' class on an item, used to show/hide on demand
    toggleOpen:function(source)
    {
	if (source != null && source.parentNode != null)
	{
	    if (hasClass(source.parentNode, 'closed'))
	    {
		removeClass(source.parentNode, 'closed');
	    }
	    else
	    {
		addClass(source.parentNode, 'closed');
	    }
	}
    },

}

