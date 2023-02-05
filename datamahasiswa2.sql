-- --------------------------------------------------------
-- Host:                         66.118.234.39
-- Server version:               5.7.40-0ubuntu0.18.04.1 - (Ubuntu)
-- Server OS:                    Linux
-- HeidiSQL Version:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for s40_daffa_db
CREATE DATABASE IF NOT EXISTS `s40_daffa_db` /*!40100 DEFAULT CHARACTER SET armscii8 COLLATE armscii8_bin */;
USE `s40_daffa_db`;

-- Dumping structure for table s40_daffa_db.users
CREATE TABLE IF NOT EXISTS `users` (
  `ID` int(1) NOT NULL AUTO_INCREMENT,
  `nim` varchar(50) COLLATE armscii8_bin DEFAULT NULL,
  `nama` varchar(255) COLLATE armscii8_bin DEFAULT NULL,
  `email` varchar(255) COLLATE armscii8_bin DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- Dumping data for table s40_daffa_db.users: ~5 rows (approximately)
INSERT INTO `users` (`ID`, `nim`, `nama`, `email`) VALUES
	(1, '1102200037', 'Daffa Fakhuddin Arrozy', 'daffatgi02@gmail.com'),
	(2, '1102200033', 'Christiano Elo Ronaldo', 'elo@gmail.com'),
	(3, '1102200039', 'Fadeta Ilhan Gandhi', 'IlhanGanteng@gmail.com'),
	(4, '1102200038', 'Ramadhan Noviandi', 'rama.anya@gmail.com'),
	(5, '1102200035', 'Angger Fajar', 'anggr.anjasmabar@gmail.com');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
