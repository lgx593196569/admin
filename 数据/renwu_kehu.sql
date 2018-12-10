-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 2018-12-10 04:33:19
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
-- 表的结构 `renwu_kehu`
--

CREATE TABLE `renwu_kehu` (
  `id` int(11) NOT NULL,
  `主题` varchar(255) CHARACTER SET utf8 NOT NULL,
  `到期日期` date NOT NULL,
  `关联到` varchar(255) CHARACTER SET utf8 NOT NULL,
  `联系人姓名` varchar(255) CHARACTER SET utf8 NOT NULL,
  `活动所有者` varchar(255) CHARACTER SET utf8 NOT NULL,
  `状态` varchar(255) CHARACTER SET utf8 NOT NULL,
  `金额` varchar(255) CHARACTER SET utf8 NOT NULL,
  `活动类型` varchar(255) CHARACTER SET utf8 NOT NULL,
  `优先级` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `renwu_kehu`
--

INSERT INTO `renwu_kehu` (`id`, `主题`, `到期日期`, `关联到`, `联系人姓名`, `活动所有者`, `状态`, `金额`, `活动类型`, `优先级`) VALUES
(0, 'v 规划 v', '2018-12-12', '12完', '辛紫胭', '消息称', '吃的', '2352', '122', '2113');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `renwu_kehu`
--
ALTER TABLE `renwu_kehu`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
