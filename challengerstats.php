/*
Name:Adrian Atanasov
Pawprint: asa368
Date: 04/21/20
Final Project
*/
<!DOCTYPE html>
<?php
header("Cache-Control: no-store, no-cache, must-revalidate, pre-check=0, post-check=0, max-age=0, s-maxage=0");
header("Pragma:no-cache");
header("Expires: 0");

?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="assets/app.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.0.js" integrity="sha256-r/AaFHrszJtwpe+tHyNi/XCfMxYpbsRg2Uqn0x3s2zc=" crossorigin="anonymous"></script>
    <script src="scripts/challengers.js"></script>
    <script type="application/javascript">
        function openForm() {
            document.getElementById("popup-Form").style.display="block";
        }

        function closeForm() {
            document.getElementById("popup-Form").style.display="none";
        }
    </script>
    <title>Challenger Stats</title>
</head>
<body class="main container-fluid" id="cover">
<div class="form-popup" id="popup-Form" >
    <form method="post" action="/final/login.php" class="form-container">
        <input type="hidden" name="action" value="do_login">
        <h2>Please Log in</h2>
        <label>
            <strong>Username</strong>
        </label>
        <input type="text" id="username" name="username" required>
        <label>
            <strong>Password</strong>
        </label>
        <input type="password" name="password" required>
        <button type="submit" class="btn" name="submit">Log in</button>
        <button type="submit" class="btn cancel" onclick="closeForm()">Cancel</button>
    </form>
</div>
<nav>
    <ul class="navbar navbar-expand-sm" id="stage">
        <li onclick="openForm()"><a>Ranked</a></li>
        <li><a href="mastersstats.php">Masters</a></li>
        <li><a href="challengerstats.php">Challengers</a></li>
    </ul>
</nav>
<div class="container">
    <div class="row">
        <div class="col">
            <h1>Challenger League Summary</h1>
            <table class="table table-dark" id="challengertable">
                <th>Average Win Ratio Challenger League</th>
                <th>Average Number of wins in Challenger League</th>
                </thead>
                <tbody>
                <tr>
                    <td id="challengerratio"></td>
                    <td id="challengerwins"></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="text-center">
    <iframe width="966" height="543" src="https://www.youtube.com/embed/aR-KAldshAE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="row">
        <div class="col">
            <h1>Challenger League Stats</h1>
            <table class="table table-dark" id="challengerplayertable">
                <th>Summoner Name</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Veteran</th>
                <th>Hot Streak</th>
                <th>W/L Ratio</th>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
</div>
</body>
</html>