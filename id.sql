-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 2018-12-10 04:11:27
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
-- 表的结构 `id`
--

CREATE TABLE `id` (
  `name` varchar(50) NOT NULL,
  `text` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `id` int(11) NOT NULL,
  `hua1` varchar(11) NOT NULL,
  `hua2` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='表单';

--
-- 转存表中的数据 `id`
--

INSERT INTO `id` (`name`, `text`, `date`, `id`, `hua1`, `hua2`) VALUES
('销售订单 - 客户', '不同客户的销售订单', '0000-00-00', 1, '口', '⭐️'),
('预测历史报表', '预测的生命周期', '0000-00-00', 2, '口', '⭐️'),
('线索 - 行业', '不同行业的线索', '0000-00-00', 1, '口', '⭐️'),
('服务支持 - 状态', '不同状态的服务支持', '0000-00-00', 1, '口', '⭐️'),
('供货商的总额', '供货商及其采购', '0000-00-00', 1, '口', '⭐️'),
('采购订单 - 状态', '不同状态的采购订单', '0000-00-00', 1, '口', '⭐️'),
('跨线索来源的销售周期持续时间', '赢得各线索来源交易的平均天数', '0000-00-00', 1, '口', '⭐️'),
('销售漏斗图', '不同阶段的交易', '0000-00-00', 1, '口', '⭐️'),
('邮件及通话分析报表', '发送的及回复的邮件、由销售代表参与的及错过的通话的数量', '0000-00-00', 1, '口', '⭐️'),
('本月销售', '本月销售	本月发生的销售', '0000-00-00', 1, '口', '⭐️'),
('Number of Check-Ins by Salesperson', 'Get number of monthly check-ins for customers completed by each Salesperson', '0000-00-00', 1, '口', '⭐️'),
('已转换的线索', '线索转换到客户 / 交易 / 联系人。', '0000-00-00', 1, '口', '⭐️'),
('服务支持 - 来源', '不同来源的服务支持', '0000-00-00', 1, '口', '⭐️'),
('产品 - 服务支持', '产品及其服务支持	', '0000-00-00', 1, '口', '⭐️'),
('联系人 vs 采购订单', '不同采购的联系人	', '0000-00-00', 1, '口', '⭐️'),
('所有来源的线索转换', '在过去的6个月中各来源转换线索的平均天数', '0000-00-00', 1, '口', '⭐️'),
('客户所在行业', '不同行业的客户', '0000-00-00', 1, '口', '⭐️'),
('点击率前10模板', '基于收件人点击的邮件百分比前10模板', '0000-00-00', 1, '口', '⭐️'),
('销售 - 线索资源', '从各种线索资源获得的销售	', '0000-00-00', 1, '口', '⭐️'),
('Number of Check-Ins by Locality', 'Get total number of monthly check-ins for customers by locality	', '0000-00-00', 1, '口', '⭐️'),
('流行的解决方案', '解决方案的评论数目	', '0000-00-00', 1, '口', '⭐️'),
('产品 - 支持终止日期', '支持结束日期为本月的产品列表	', '0000-00-00', 1, '口', '⭐️'),
('销售订单 - 所有者', '销售订单及其所有者	', '0000-00-00', 1, '口', '⭐️'),
('所有行业的线索转换', '在过去的6个月中各行业转换线索的平均天数	', '0000-00-00', 1, '口', '⭐️'),
('主要客户', '拥有更多交易的客户	', '0000-00-00', 1, '口', '⭐️'),
('前10用户', '基于打开率的前10模板	', '0000-00-00', 1, '口', '⭐️'),
('阶段可能性分析', '不同可能性的交易	', '0000-00-00', 1, '口', '⭐️'),
('Check-Ins by Locality', 'Get check-in details categorized by locality	', '0000-00-00', 1, '口', '⭐️'),
('线索 - 所有者', '线索及其所有者	', '0000-00-00', 1, '口', '⭐️'),
('市场活动 线索', '来自该市场活动的线索	', '0000-00-00', 1, '口', '⭐️'),
('产品 - 分类', '不同分类的产品	', '0000-00-00', 1, '口', '⭐️'),
('销售订单 - 状态', '不同状态的销售订单	', '0000-00-00', 1, '口', '⭐️'),
('所有所有者的线索转换数', '在过去的6个月中各所有者转换的线索总数	', '0000-00-00', 1, '口', '⭐️'),
('联系人邮寄列表', '联系人地址明细	', '0000-00-00', 1, '口', '⭐️'),
('前10模板', '基于邮件发送率的前10用户	', '0000-00-00', 1, '口', '⭐️'),
('未关的交易', '等待中的交易	', '0000-00-00', 1, '口', '⭐️'),
('Check-Ins for Leads', 'Get check-in details for each Lead	', '0000-00-00', 1, '口', '⭐️'),
('今日线索', '本日线索	', '0000-00-00', 1, '口', '⭐️'),
('市场活动收入报表', '显示来自该市场活动的收入	', '0000-00-00', 1, '口', '⭐️'),
('所有所有者的线索转换', '在过去的6个月中所有者转换线索的平均天数	', '0000-00-00', 1, '口', '⭐️'),
('邮件分析', '基于日期、模板、模块及用户的邮件状态（已发送、已退回、已打开及已点击）的汇总', '0000-00-00', 1, '口', '⭐️'),
('交易所在类型', '不同类型的交易	', '0000-00-00', 1, '口', '⭐️'),
('Check-Ins for Accounts', 'Get check-in details for each Account	', '0000-00-00', 1, '口', '⭐️'),
('线索 - 状态', '线索及其状态	', '0000-00-00', 1, '口', '⭐️'),
('Call Status Report', 'Call Status based report	', '0000-00-00', 1, '口', '⭐️'),
('季度预测汇总', '预测将显示季度的有把握成交的金额，可能的最高金额及进行中的金额。	', '0000-00-00', 1, '口', '⭐️'),
('报价 - 阶段', '不同阶段的报价	', '0000-00-00', 1, '口', '⭐️'),
('所有所有者的销售周期持续时间', '所有者赢得交易的平均天数	', '0000-00-00', 1, '口', '⭐️'),
('所有线索来源的整体销售期', '从各线索来源将线索赢得为交易的平均天数	', '0000-00-00', 1, '口', '⭐️');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;