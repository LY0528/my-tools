<?php
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Headers:x-requested-with,content-type');

require_once "jssdk.php";
$jssdk = new JSSDK("appId", "appSecretKey");
$signPackage = $jssdk->GetSignPackage($_POST['url']);
$response = array(
 'code' => 200,
 'message' => 'success for request',
 'data' => $signPackage,
 'url' => $_POST['url']
 );
 echo json_encode($response);
?>