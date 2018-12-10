-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 2018-12-10 06:45:14
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
-- 表的结构 `clew`
--

CREATE TABLE `clew` (
  `surname` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `post` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `tel` varchar(20) NOT NULL,
  `clue` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `lianxi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `clew`
--

INSERT INTO `clew` (`surname`, `name`, `post`, `email`, `tel`, `clue`, `owner`, `lianxi`) VALUES
('张', '三', '创新业务系统', 'Chau-kitzman@qq.com', '555-555-5555', '广告', '努力优秀', '试图联系'),
('陆', '琛', '方圆十里公司', 'Kayleigh-lace@yahoo.com', '555-555-5555', '合作伙伴', '努力优秀', '未联系'),
('时', '文雅', '百事可乐责任有限公司', 'Tresa-sweely@hotmail.com', '555-555-5555', '合作伙伴研讨会', '努力优秀', '已联系'),
('苏', '晴', '至真科技', 'James-merced@gmail.com', '555-555-5555', 'Web下载', '努力优秀', '丢失线索'),
('苏', '俨', '大方银座科技', 'Felix-hirpara@sina.com', '555-555-5555', '在线商场', '努力优秀', '试图联系'),
('李', '晨', '嘉兴工作室', 'Cheryl-haroldson@163.org', '555-555-5555', '员工介绍', '努力优秀', '已联系'),
('李', '四', '达尔瓷砖有限公司', 'Theola-frey@263.com', '555-555-5555', '推销电话', '努力优秀', '将来联系'),
('唐', '艺兮', '源创实业科技', 'Yvonne-tjepkema@hotmail.com', '555-555-5555', '外部介绍', '努力优秀', '需要条件'),
('李', '贝贝', '山方餐饮有限公司', 'Carissa-batman@sina.com', '555-555-5555', '广告', '努力优秀', '将来联系'),
('郑', '倩倩', '秋实远客创新有限公司', 'Lezlie-craghead@163.org', '555-555-5555', '交易会', '努力优秀', '试图联系');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
