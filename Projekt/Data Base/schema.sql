CREATE TABLE IF NOT EXISTS `media`
(
    `id`        INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `linked_in` VARCHAR(100),
    `facebook`  VARCHAR(100),
    `twitter`   VARCHAR(100),
    `github`    VARCHAR(100),
    `discord`   VARCHAR(100),
    PRIMARY KEY (`id`)
);


CREATE TABLE IF NOT EXISTS `users`
(
    `id`           INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `first_name`   VARCHAR(255)             NOT NULL,
    `middle_name`  VARCHAR(255),
    `last_name`    VARCHAR(255)             NOT NULL,
    `address`      VARCHAR(255)             NOT NULL,
    `birth_date`   DATE                     NOT NULL,
    `phone_number` VARCHAR(20)              NOT NULL,
    `email`        VARCHAR(255)             NOT NULL UNIQUE,
    `media_id`     INT UNSIGNED,
    `bio`          TEXT,
    `password`     VARCHAR(255)             NOT NULL,
    `role`         ENUM ('USER', 'ADMIN')   NOT NULL,
    FOREIGN KEY (`media_id`) REFERENCES `media` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

ALTER TABLE users
    MODIFY COLUMN password VARCHAR(255) NOT NULL;

CREATE TABLE IF NOT EXISTS `posts`
(
    `id`                INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title`             VARCHAR(255) NOT NULL,
    `description`       TEXT         NOT NULL,
    `short_description` TEXT         NOT NULL,
    `ingredients`       VARCHAR(255),
    `difficulty`        INT          NOT NULL,
    `cooking_time`      SMALLINT,
    `user_id`           INT UNSIGNED NOT NULL,
    `created`           DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated`           DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `ingredients`
(
    `id`      INT PRIMARY KEY AUTO_INCREMENT,
    `name`    VARCHAR(255),
    `post_id` INT UNSIGNED NOT NULL,
    FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `preparation_steps`
(
    `id`      INT PRIMARY KEY AUTO_INCREMENT,
    `step`    VARCHAR(255),
    `post_id` INT UNSIGNED NOT NULL,
    FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `product_categories`
(
    `id`      INT PRIMARY KEY AUTO_INCREMENT,
    `step`    VARCHAR(255),
    `post_id` INT UNSIGNED NOT NULL,
    FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `favourite_posts`
(
    `id`      INT PRIMARY KEY AUTO_INCREMENT,
    `user_id` INT UNSIGNED NOT NULL,
    `post_id` INT UNSIGNED NOT NULL,
    FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `comments`
(
    `id`      INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `content` TEXT         NOT NULL,
    `user_id` INT UNSIGNED NOT NULL,
    `post_id` INT UNSIGNED NOT NULL,
    `created` DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated` DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);