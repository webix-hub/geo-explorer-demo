<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Webix Geo Explorer</title>
	<!-- Webix Library -->
	<script type="text/javascript" src="//cdn.webix.com/pro/edge/webix.js?v=6.0.0"></script>
	<link rel="stylesheet" type="text/css" href="//cdn.webix.com/pro/edge/webix.css?v=6.0.0">

	<link rel="icon" type="image/png" href="common/favicon.ico">

	<!-- Material Design Icons -->
	<link rel="stylesheet" type="text/css" href="//cdn.materialdesignicons.com/2.7.94/css/materialdesignicons.css">

	<!-- App -->
	<script type="text/javascript" src="codebase/myapp.js"></script>
	<link rel="stylesheet" type="text/css" href="codebase/myapp.css">

	<!-- NAVBAR -->
	<script type="text/javascript" src="/demos/common/nav.js"></script>
	<link rel="stylesheet" type="text/css" href="/demos/common/nav.css">
</head>
<body>
	<script>
		if (!webix.env.touch && webix.ui.scrollSize && webix.CustomScroll)
			webix.CustomScroll.init();
			
		webix.protoUI({
			name:"geo-explorer-demo",
			app: webixjetapp.default
		}, webix.ui.jetapp);

		webix.ready(function(){
			webix.ui({
				rows:[
					{ view:"geo-explorer-demo" },
					{ view:"navbar", value:"geo-explorer" }
				]
			});
		});
	</script>
</body>
</html>