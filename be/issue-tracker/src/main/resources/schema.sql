SET foreign_key_checks = 0;
DROP TABLE IF EXISTS milestone;
DROP TABLE IF EXISTS issue_label;
DROP TABLE IF EXISTS label;
DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS assignee;
DROP TABLE IF EXISTS issue;
DROP TABLE IF EXISTS user;
SET foreign_key_checks = 1;

CREATE TABLE `user` (
                        `user_id` varchar(50)  NOT NULL ,
                        `password` varchar(50)  NOT NULL ,
                        `image` varchar(200)  NOT NULL ,
                        PRIMARY KEY (
                                     `user_id`
                            )
);

CREATE TABLE `issue` (
                         `issue_id` bigint  NOT NULL ,
                         `author` varchar(50)  NOT NULL ,
                         `title` varchar(50)  NOT NULL ,
                         `contents` text  NOT NULL ,
                         `created_at` datetime  NOT NULL DEFAULT NOW() ,
                         `is_open` boolean  NOT NULL DEFAULT true ,
                         `is_deleted` boolean  NOT NULL DEFAULT false ,
                         PRIMARY KEY (
                                      `issue_id`
                             ) ,
                         FOREIGN KEY (`author`) REFERENCES `user` (`user_id`)
);

CREATE TABLE `assignee` (
                            `assignee_id` bigint NOT NULL ,
                            `issue_id` bigint  NOT NULL ,
                            `user_id` varchar(50)  NOT NULL ,
                            PRIMARY KEY (
                                         `assignee_id`
                                ) ,
                            FOREIGN KEY (`issue_id`) REFERENCES `issue` (`issue_id`) ,
                            FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
);

CREATE TABLE `comment` (
                           `comment_id` bigint  NOT NULL ,
                           `issue_id` bigint  NOT NULL ,
                           `author` varchar(50)  NOT NULL ,
                           `contents` text  NOT NULL ,
                           `created_at` datetime  NOT NULL DEFAULT NOW() ,
                           `is_deleted` boolean  NOT NULL DEFAULT false ,
                           PRIMARY KEY (
                                        `comment_id`
                               ) ,
                           FOREIGN KEY (`issue_id`) REFERENCES `issue` (`issue_id`) ,
                           FOREIGN KEY (`author`) REFERENCES `user` (`user_id`)
);

CREATE TABLE `label` (
                         `label_id` bigint  NOT NULL ,
                         `name` varchar(50)  NOT NULL ,
                         `description` varchar(200)  NULL ,
                         `background_color` varchar(10)  NOT NULL ,
                         `text_color` varchar(10)  NOT NULL ,
                         `is_deleted` boolean  NOT NULL DEFAULT false ,
                         PRIMARY KEY (
                                      `label_id`
                             )
);

CREATE TABLE `issue_label` (
                               `issue_label_id` bigint NOT NULL ,
                               `issue_id` bigint  NOT NULL ,
                               `label_id` bigint  NOT NULL ,
                               PRIMARY KEY (
                                            `issue_label_id`
                                   ) ,
                               FOREIGN KEY (`issue_id`) REFERENCES `issue` (`issue_id`) ,
                               FOREIGN KEY (`label_id`) REFERENCES `label` (`label_id`)
);

CREATE TABLE `milestone` (
                             `milestone_id` bigint  NOT NULL ,
                             `issue_id` bigint  NOT NULL ,
                             `name` varchar(50)  NOT NULL ,
                             `deadline` datetime  NULL ,
                             `description` varchar(200)  NULL ,
                             `is_open` boolean  NOT NULL DEFAULT true ,
                             `is_deleted` boolean  NOT NULL DEFAULT false ,
                             PRIMARY KEY (
                                          `milestone_id`
                                 ) ,
                             FOREIGN KEY (`issue_id`) REFERENCES `issue` (`issue_id`)
);
