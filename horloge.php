<html>
	<head>
		<title>Exemple d'utilisation de l'horloge</title>

		<!-- inclure jquery -->
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
		<!-- Inclure ensuite l'horloge (javascript et css) -->
		<script src="horloge.js"></script>
		<link rel="stylesheet" href="horloge.css">
	</head>

	<body>

		<center><div id="horloge" style="width: 100%;"></div></center>
		<?php 
			$date = getdate();
			$jour=$date['mday'];
			$mois=$date['mon'];
			$secondes=$date['seconds'];
		?>
		<script>showHorloge('<?= $jour; ?>', '<?= $mois; ?>', '<?= $secondes; ?>');</script>
		
	</body>
</html>