-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 2018-12-10 06:47:10
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
-- 表的结构 `linkman`
--

CREATE TABLE `linkman` (
  `surname` varchar(255) NOT NULL,
  `name` varchar(20) NOT NULL,
  `post` varchar(255) NOT NULL COMMENT '职位',
  `email` varchar(255) NOT NULL,
  `tel` char(20) NOT NULL,
  `mobile` char(20) NOT NULL,
  `clue` varchar(255) NOT NULL COMMENT '线索来源',
  `owner` varchar(255) NOT NULL,
  `time` date NOT NULL,
  `picture` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `nums` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `linkman`
--

INSERT INTO `linkman` (`surname`, `name`, `post`, `email`, `tel`, `mobile`, `clue`, `owner`, `time`, `picture`, `state`, `nums`) VALUES
('王', '欣然', '质量工程师', 'krismarrier@gmail.com', '555-555-5555', '555-555-5555', '交易会', '努力优秀', '2018-12-05', '201812090952201werdth.jpg', '1', '5'),
('徐', '顾离', '产品工程师', 'sage-wieser@qq.com', '555-555-5555', '555-555-5555', '广告', '努力优秀', '2018-12-05', '201812090953543.png', '1', '6'),
('刘', '南', '信息系统经理', 'leota-dilliard@hotmail.com', '555-555-5555', '555-555-5555', 'Web下载', '努力优秀', '2018-12-05', '201812090954533.png', '1', '6'),
('程', '舟', '内部审计员', 'tollner-morlong@gmail.com', '555-555-5555', '555-555-5555', '合作伙伴研讨会', '努力优秀', '2018-12-05', '201812091005333.png', '1', '7'),
('涂', '景致', '信息系统经理', 'simona@163.com', '555-555-5555', '555-555-5555', '在线商场', '努力优秀', '2018-12-05', '201812091010434.png', '1', '4'),
('方', '文静', '护士', 'foller-donette@in.com', '555-555-5555', '555-555-5555', '合作伙伴', '努力优秀', '2018-12-05', '201812091013003.png', '1', '6'),
('刘', '强', '系统管理员', 'capla-paprocki@yahoo.com', '555-555-5555', '555-555-5555', '外部介绍', '努力优秀', '2018-12-05', '201812091015424.png', '1', '3'),
('夏', '凉生', '地质学家', 'ljames-venere@sina.com', '555-555-5555', '555-555-5555', '员工介绍', '努力优秀', '2018-12-05', '201812091016474.png', '0', ''),
('颜', '末', '媒体策划助理', 'joesphine-darakjy@263.com', '555-555-5555', '555-555-5555', '推销电话', '努力优秀', '2018-12-05', '201812091019061186807 2.jpg', '0', ''),
('何', '芳', '总设计工程师', 'john-buttbenton@gmail.com', '555-555-5555', '555-555-5555', '广告', '努力优秀', '2018-12-05', '201812091020109876.jpg', '1', '3');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
