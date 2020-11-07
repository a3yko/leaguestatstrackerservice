/*
Name:Adrian Atanasov
Pawprint: asa368
Date: 04/21/20
Final Project
*/
<?php
// Created by Professor Wergeles for CS2830 at the University of Missouri

// Every time we want to access $_SESSION, we have to call session_start()
if(!session_start()) {
    header("Location: error.php");
    exit;
}

$loggedIn = empty($_SESSION['loggedin']) ? false : $_SESSION['loggedin'];
if (!$loggedIn) {
    header("Location: login.php");
}

header("Cache-Control: no-store, no-cache, must-revalidate, pre-check=0, post-check=0, max-age=0, s-maxage=0");
header("Pragma:no-cache");
header("Expires: 0");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="assets/app.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.0.js" integrity="sha256-r/AaFHrszJtwpe+tHyNi/XCfMxYpbsRg2Uqn0x3s2zc=" crossorigin="anonymous"></script>
    <script src="scripts/stats.js"></script>
    <script type="application/javascript">
        function openForm() {
            document.getElementById("popup-Form").style.display="block";
        }

        function closeForm() {
            document.getElementById("popup-Form").style.display="none";
        }

    </script>
    <title>Daily Stats</title>
</head>
<body class="main container-fluid">
<div class="form-popup" id="popup-Form" >
    <form method="post" action="login.php" class="form-container">
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
    <nav>
        <ul class="navbar navbar-expand-sm" id="stage">
            <li><a href="logout.php">Logout</a></li>
        </ul>
    </nav>
</nav>
<div>
    <h1>Select a Tier</h1>
    <form id="test">
        <select id="tier" name="tier">
            <option value="diamond">Diamond</option>
            <option value="plat">Platinum</option>
            <option value="gold">Gold</option>
            <option value="silver">Silver</option>
            <option value="bronze">Bronze</option>
            <option value="iron">Iron</option>
        </select>
    </form>
</div>
<div class="container">
    <div class="row">
        <div class="col cards">
            <h1>Avg Wins Per Division</h1>
            <div>
                <table class="table table-dark" id="stattable">
                    <thead>
                    <th>Divison</th>
                    <th>Average wins</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>I</td>
                        <td id="Istat"> </td>
                    </tr>
                    <tr>
                        <td>II</td>
                        <td id="IIstat"> </td>
                    </tr>
                    <tr>
                        <td>III</td>
                        <td id="IIIstat"> </td>
                    </tr>
                    <tr>
                        <td>IV</td>
                        <td id="IVstat"w> </td>
                    </tr>
                    </tbody>
                </table>
                <div class="chart">
                    <canvas id="statchart"></canvas>
                </div>
            </div>
        </div>
        <div class="col cards">
            <table class="table table-dark" id="ptstable">
            <h1>Avg League Points</h1>
            <thead>
            <th>Divisons</th>
            <th>Average League Points</th>
            </thead>
            <tbody>
            <tr>
                <td>I</td>
                <td id="Ipts"> </td>
            </tr>
            <tr>
                <td>II</td>
                <td id="IIpts"> </td>
            </tr>
            <tr>
                <td>III</td>
                <td id="IIIpts"> </td>
            </tr>
            <tr>
                <td>IV</td>
                <td id="IVpts"> </td>
            </tr>
            </tbody>
            </table>
            <div class="chart">
                <canvas id="ptschart"></canvas>
            </div>
        </div>
    </div>
</div>
</body>
</html>