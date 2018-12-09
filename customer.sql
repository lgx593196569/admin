-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 2018-12-10 00:54:00
-- 服务器版本： 10.1.31-MariaDB
-- PHP Version: 7.0.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `admin`
--

-- --------------------------------------------------------

--
-- 表的结构 `customer`
--

CREATE TABLE `customer` (
  `kehuming` char(20) CHARACTER SET utf8 NOT NULL,
  `jine` varchar(20) CHARACTER SET utf8 NOT NULL,
  `jieduan` char(10) CHARACTER SET utf8 NOT NULL,
  `yujichengjiao` varchar(50) CHARACTER SET utf8 NOT NULL,
  `kehusuoyou` char(20) CHARACTER SET utf8 NOT NULL,
  `jiaoyiming` char(20) CHARACTER SET utf8 NOT NULL,
  `lianxirenming` char(20) CHARACTER SET utf8 NOT NULL,
  `dianhua` varchar(15) CHARACTER SET utf8 NOT NULL,
  `wangzhi` char(100) CHARACTER SET utf8 NOT NULL,
  `jiaoyisuoyou` char(20) CHARACTER SET utf8 NOT NULL,
  `biaoji` char(10) CHARACTER SET utf8 NOT NULL,
  `caozuotime` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `customer`
--

INSERT INTO `customer` (`kehuming`, `jine`, `jieduan`, `yujichengjiao`, `kehusuoyou`, `jiaoyiming`, `lianxirenming`, `dianhua`, `wangzhi`, `jiaoyisuoyou`, `biaoji`, `caozuotime`) VALUES
('吉祥如意餐饮', '60,000.00', '确定决策者', '2018-12-08', '努力优秀', '吉祥如意餐饮', '', '555-555-5555', '', '努力优秀', '', '2018-12-05 08:29 下午'),
('云茂地产', '45,000.00', '需求分析', '2018-12-06', '努力优秀', '云茂地产', '', '555-555-5555', '', '努力优秀', 'DEC 6', '2018-12-05 08:29 上午'),
('西行设计', '45,000.00', '丢失的线索', '2018-12-07', '努力优秀', '西行设计', '', '555-555-5555', '', '努力优秀', 'DEC 6', '2018-12-05 08:29 上午'),
('兴时科技', '35,000.00', '成交', '2018-12-08', '努力优秀', '兴时科技', '', '555-555-5555', '', '努力优秀', 'DEC 7', '2018-12-05 08:29 上午'),
('时雨集团', '70,000.00', '谈判/复审', '2018-12-05', '努力优秀', '时雨集团', '', '555-555-5555', '', '努力优秀', 'DEC 4', '2018-12-05 08:29 上午'),
('风云游戏', '25,000.00', '提案/报价', '2018-12-11', '努力优秀', '风云游戏', '', '555-555-5555', '', '努力优秀', 'DEC 6', '2018-12-05 08:29 上午'),
('飞鸽科技有限公司', '45,000.00', '确定决策者', '2018-12-09', '努力优秀', '飞鸽科技有限公司', '', '555-555-5555', '', '努力优秀', 'DEC 3', '2018-12-05 08:29 上午'),
('银实集团', '70,000.00', '价值建议', '2018-12-06', '努力优秀', '银实集团', '', '555-555-5555', '', '努力优秀', '', '2018-12-05 08:29 上午'),
('金方证券', '55,000.00', '需求分析', '2018-12-07', '努力优秀', '金方证券', '', '555-555-5555', '', '努力优秀', '', 'n/a'),
('宝石蓝银饰', '250,000.00', '资质审查', '2018-12-05', '努力优秀', '宝石蓝银饰', '', '555-555-5555', '', '努力优秀', '今天', '2018-12-05 08:29 上午');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
