/*
 Navicat Premium Data Transfer

 Source Server         : lc
 Source Server Type    : MySQL
 Source Server Version : 50626
 Source Host           : localhost
 Source Database       : online_game

 Target Server Type    : MySQL
 Target Server Version : 50626
 File Encoding         : utf-8

 Date: 03/18/2016 22:24:24 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `Capming`
-- ----------------------------
DROP TABLE IF EXISTS `Capming`;
CREATE TABLE `Capming` (
  `Cid` int(11) NOT NULL AUTO_INCREMENT,
  `Cuser1` int(11) NOT NULL,
  `Cuser2` int(11) NOT NULL,
  `Cstate` int(11) NOT NULL,
  `Carr` varchar(255) NOT NULL,
  PRIMARY KEY (`Cid`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `Capming`
-- ----------------------------
BEGIN;
INSERT INTO `Capming` VALUES ('58', '71', '72', '1', '[[1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,2,1,2,2,0],[0,0,0,0,0,1,2,1,0,0],[0,0,0,0,2,1,1,1,2,0],[0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]');
COMMIT;

-- ----------------------------
--  Table structure for `User`
-- ----------------------------
DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
  `Uid` int(11) NOT NULL AUTO_INCREMENT,
  `Uname` varchar(255) NOT NULL,
  `Ustate` int(11) NOT NULL,
  PRIMARY KEY (`Uid`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `User`
-- ----------------------------
BEGIN;
INSERT INTO `User` VALUES ('71', '你老汉', '1'), ('72', '你爷爷', '1');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
