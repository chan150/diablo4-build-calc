const buildNumber = 36331;

var otherJSON = "";
$.getJSON("build-" + buildNumber + ".json", null, successData => {
	const tree = jsonview.create(successData);
	jsonview.render(tree, $("#root")[0]);
	jsonview.expand(tree);
});