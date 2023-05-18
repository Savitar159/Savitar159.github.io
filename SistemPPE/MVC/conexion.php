<?php
class conexion{
  public $con;
  public function conectar(){
    $host_name = 'localhost';
    $database = 'bdpnz';
    $user_name = 'root';
    $password = '';
    $this ->con = new mysqli($host_name, $user_name, $password, $database);
    if ($con->connect_error) {
    die('<p>Error al conectar con servidor MySQL: '. $link->connect_error .'</p>');
  } else {
    echo '<p>Se ha establecido la conexión al servidor MySQL con éxito.</p>';
  }
  }
}
?>


