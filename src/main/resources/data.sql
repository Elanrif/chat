
INSERT INTO person (name, email, image, metier, password)
VALUES
    ('Zakaria Med', 'zakaria.med@gmail.com', '/image/persons/zakaria.jpg', 'Senior Développeur', '1234'),
    ('neymar Jr', 'neymar.jr@gmail.com', '/image/persons/neymar.jpg', 'Développeur Front-End', '1234'),
    ('Aya nakamura', 'marie.martin@gmail.com', '/image/persons/aya_nakamura.jpg', 'Développeur Back-End', '1234'),
    ('michael Jackson', 'michael.jackson@gmail.com', '/image/persons/michael jackson.jpg', 'Architecte Logiciel', '1234'),
    ('justin Bieber', 'justin.bieber@gmail.com', '/image/persons/justin.jpg', 'Ingénieur DevOps', '1234'),
    ('Elanrif saidbaco', 'elanrif.saidbaco@gmail.com', 'https://example.com/images/thomas.jpg', 'Ingénieur Informatique', '1234'),
    ('Céline Rousseau', 'celine.rousseau@gmail.com', 'https://example.com/images/celine.jpg', 'UX/UI Designer', '1234');

INSERT INTO message (id, content, created_at, updated_at, receiver_id, sender_id)
VALUES
    (null, "How dare are you", "2023-12-31 00:34:26.233800", "2023-12-31 00:34:26.233800", 3, 2),
    (null, "Good morning everybody", "2023-12-31 00:39:03.493528", "2023-12-31 00:39:30.582950", 3, 1),
    (null, "Hey, how's it going?", "2023-12-31 01:15:45.112345", "2023-12-31 01:15:45.112345", 2, 1),
    (null, "I'm good, thanks!", "2023-12-31 01:22:18.987654", "2023-12-31 01:22:18.987654", 3, 2),
    (null, "Just wanted to share some exciting news with everyone!", "2023-12-31 02:05:10.765432", "2023-12-31 02:05:10.765432", 1, 2),
    (null, "Does anyone know a good restaurant in the neighborhood?", "2023-12-31 02:30:00.111222", "2023-12-31 02:30:00.111222", 2, 3),
    (null, "Congratulations on your new job! 🎉", "2024-01-01 10:45:56.789012", "2024-01-01 10:45:56.789012", 2, 1),
    (null, "Don't forget the team meeting at 3 PM today!", "2024-01-02 14:00:00.555666", "2024-01-02 14:00:00.555666", 3, 1),
    (null, "The server maintenance is scheduled for tomorrow night.", "2024-01-03 08:30:15.123456", "2024-01-03 08:30:15.123456", 2, 3),
    (null, "Thanks for your help with the project. I appreciate it!", "2024-01-04 12:45:30.987654", "2024-01-04 12:45:30.987654", 2, 1);
