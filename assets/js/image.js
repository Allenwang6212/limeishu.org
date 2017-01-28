var items = jQuery('#nearby>.spotlight');
var patchs = jQuery('#nearby>.spotlight>.image');
for (var i = 0; i < items.length; ++i) {
	$(patchs[i]).css('background-image', 'url(' + $(items[i]).find('img').attr('src') + ')');
};
