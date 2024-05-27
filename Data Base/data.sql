INSERT INTO media (linked_in, facebook, twitter, github, discord)
VALUES ('https://www.linkedin.com/in/user1', 'https://www.facebook.com/user1', 'https://twitter.com/user1',
        'https://github.com/user1', 'https://discord.com/user1'),
       ('https://www.linkedin.com/in/user2', 'https://www.facebook.com/user2', 'https://twitter.com/user2',
        'https://github.com/user2', 'https://discord.com/user2'),
       ('https://www.linkedin.com/in/user3', 'https://www.facebook.com/user3', 'https://twitter.com/user3',
        'https://github.com/user3', 'https://discord.com/user3'),
       ('https://www.linkedin.com/in/user4', 'https://www.facebook.com/user4', 'https://twitter.com/user4',
        'https://github.com/user4', 'https://discord.com/user4'),
       ('https://www.linkedin.com/in/user5', 'https://www.facebook.com/user5', 'https://twitter.com/user5',
        'https://github.com/user5', 'https://discord.com/user5');


INSERT INTO users (first_name, middle_name, last_name, address, birth_date, phone_number, email, media_id, bio,
                   password, role)
VALUES ('John', 'A', 'Doe', '123 Main St', '1990-01-01', '5551234', 'john.a@example.com', 1,
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ess',
        '$2a$10$t.t.oER7nqv1ANC5ZovqkeIgJ7tRdJhOm/aYPJdHNo.9qSAuulPXe', 'USER'),
       ('Jane', NULL, 'Austin', '456 Maple Ave', '1995-02-15', '5555678', 'jane@example.com', 2,
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ess',
        '$2a$10$9/qNOo1zreqXX60MIX9jLeEzarQiQKR.SngFO1Nj50apFmCuSjc36', 'USER'),
       ('Bob', 'B', 'Marley', '789 Oak St', '1985-05-10', '5559101', 'bob.b@example.com', 3,
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ess',
        '$2a$10$0wzzCw4dxCWaxbzQ5Kl1u.XKOBIXImBQiFvDEEXrSzjNwniFReYfe', 'USER'),
       ('Sarah', 'L', 'Maas', '321 Elm St', '1992-04-18', '5555555', 'sarah.l@example.com', 4,
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ess',
        '$2a$10$y4WElh4eKhaWk8lN7P6qku1LbVCiiqTKyeUh0LXMRfRSrkg11778u', 'USER'),
       ('Tom', 'J', 'Kruger', '567 Birch Ave', '1988-11-30', '5551234', 'tom.j@example.com', null,
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ess',
        '$2a$10$y4WElh4eKhaWk8lN7P6qku1LbVCiiqTKyeUh0LXMRfRSrkg11778u', 'USER'),
       ('Emily', NULL, 'Jackman', '789 Oak St', '1995-07-12', '5555678', 'emily@example.com', 5,
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ess',
        '$2a$10$1BAudE5dhFT3D5lXH28AW.JNpNS5DkeqoSUUAmb8ieByMaX8Qz.ay', 'USER');

INSERT INTO posts (title, short_description, difficulty, cooking_time, user_id, created, updated)
VALUES ('First Post', 'Lorem ipsum dolor sit amet...', 1, 30, 1, NOW(), NOW()),
       ('Second Post', 'Sed ut perspiciatis unde...', 2, 45, 1, NOW(), NOW()),
       ('Third Post', 'At vero eos et accusamus...', 3, 60, 2, NOW(), NOW()),
       ('Fourth Post', 'Duis aute irure dolor in repreh...', 2, 40, 2, NOW(), NOW()),
       ('Fifth Post', 'Excepteur sint occaecat cupidatat...', 3, 50, 3, NOW(), NOW()),
       ('Sixth Post', 'Ut enim ad minim veniam...', 1, 35, 1, NOW(), NOW());


INSERT INTO comments (content, user_id, post_id, created, updated)
VALUES ('Great post, John!', 2, 1, NOW(), NOW()),
       ('I really enjoyed this article, thanks for sharing!', 3, 2, NOW(), NOW()),
       ('I totally agree, Bob!', 1, 3, NOW(), NOW()),
       ('Great post, Tom!', 1, 4, NOW(), NOW()),
       ('I really enjoyed this article, thanks for sharing!', 2, 5, NOW(), NOW()),
       ('I totally agree, Emily!', 3, 6, NOW(), NOW());


INSERT INTO `ingredients` (`name`, `post_id`)
VALUES ('Chicken', 1),
       ('Salt', 1),
       ('Pepper', 1),
       ('Olive oil', 1),
       ('Garlic', 1),
       ('Onion', 1),
       ('Tomato', 1),
       ('Pasta', 2),
       ('Parmesan cheese', 2),
       ('Butter', 2),
       ('Basil', 2),
       ('Garlic powder', 2),
       ('Ground beef', 3),
       ('Bell pepper', 3),
       ('Onion', 3),
       ('Chili powder', 3),
       ('Cumin', 3);

INSERT INTO `preparation_steps` (`step`, `post_id`)
VALUES ('Season the chicken with salt and pepper.', 1),
       ('Heat olive oil in a pan and cook the chicken until browned.', 1),
       ('Add garlic, onion, and tomato to the pan and cook for a few minutes.', 1),
       ('Boil water in a pot and cook the pasta until al dente.', 2),
       ('Drain the pasta and mix in butter, Parmesan cheese, basil, and garlic powder.', 2),
       ('Heat a skillet and cook ground beef, bell pepper, and onion until browned.', 3),
       ('Add chili powder and cumin to the skillet and cook for a few more minutes.', 3);


INSERT INTO product_categories (name, post_id)
VALUES ('Soups', 1),
       ('Salads', 1),
       ('Sandwiches/Wraps', 2),
       ('By Meat', 2),
       ('Pasta', 3),
       ('Soups', 4),
       ('Salads', 5),
       ('Sandwiches/Wraps', 4),
       ('By Meat', 6),
       ('Pasta', 6);



INSERT INTO favourite_posts (user_id, post_id)
VALUES (1, 1),
       (1, 2),
       (2, 3),
       (3, 1),
       (4, 2),
       (4, 3),
       (4, 4);
