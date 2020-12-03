<?php

    require_once("mailer_lib.php");
    $to = "hrlee@testenc.com";
    $from = $_POST['email'];
    $subject = $_POST['subject'];
    $number = $_POST['phone'];
    $cmessage = $_POST['message'];


    // $headers = "From: $from";
	  // $headers = "From: " . $from . "\r\n";
	  // $headers .= "Reply-To: ". $from . "\r\n";
	  // $headers .= "MIME-Version: 1.0\r\n";
	  // $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    // $subject = "You have a message from your Bitmap Photography.";
    $logo = 'img/about/counter.png';
    $link = 'http://portal.testenc.com/groupware/login.php';

  	$body = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>홈페이지 문의</title></head><body>";
  	$body .= "<table style='width: 100%;'>";
  	$body .= "<thead style='text-align: center;'><tr><td style='border:none;' colspan='2'>";
  	$body .= "<a href='".$link."'><img src='".$logo."' alt='' width='900px' height='350px'></a><br><br>";
  	$body .= "</td></tr></thead><tbody><tr>";
  	$body .= "<td style='border:none;'><strong>Email:</strong>".$from."</td>";
  	$body .= "<td style='border:none;'><strong>Phone:</strong>".$number."</td>";
  	$body .= "</tr>";
  	$body .= "<tr><td style='border:none;'><strong>Subject:</strong>".$subject."</td></tr>";
  	$body .= "<tr><td></td></tr>";
    $body .= "<td style='border:none;'><strong>Message:<br><br></strong>";
  	$body .= "<tr><td colspan='2' style='border:none;'>".$cmessage."</td></tr>";
  	$body .= "</tbody></table>";
  	$body .= "</body></html>";
    // mailer("보내는 사람 이름", "보내는 사람 메일주소", "받는 사람 메일주소", "제목", "내용", "1");
    mailer("홈페이지 문의메일", "phou0215@naver.com", $to, "[Message From Homepage](문의메일 도착)", $body, 1);
    //send chart json data using ajax
    $returnData = array();
    $returnData['subject'] = $subject;
    $returnData['email'] = $from;
    $returnData['phone'] = $number;
    $returnData['message'] = $cmessage;
    $jsonData = json_encode($returnData, JSON_UNESCAPED_UNICODE);
    header('Content-Type: application/json');
    echo $jsonData;
?>
