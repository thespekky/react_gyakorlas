-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Sze 07. 12:47
-- Kiszolgáló verziója: 10.4.17-MariaDB
-- PHP verzió: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `backendgyak`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `datas`
--

CREATE TABLE `datas` (
  `ID` int(11) NOT NULL,
  `user_ID` int(11) NOT NULL,
  `title` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `content` varchar(10000) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `datas`
--

INSERT INTO `datas` (`ID`, `user_ID`, `title`, `content`) VALUES
(1, 2, 'Title of the card', 'this is the Content of the Card.'),
(2, 1, 'Admin title', 'Admin content 1'),
(3, 1, 'Admin tile ', 'Admin content 2'),
(4, 2, 'User Content', 'Content 2'),
(5, 2, 'hosszabb content', '  Lorem ipsum dolor sit ametconsectetur adipisicing elit. Tempora esse praesentium optio voluptatem dolore dolores tempore distinctio reiciendis eius atque recusandae voluptate veniam pariatur, enim at quas alias corrupti itaque!\r\n    Totam omnis error maiores tempore rerum id pariatur ut at mollitia ullam vitae reiciendis quisquam molestiae, doloribus saepe soluta quis eveniet iusto! Consequatur eius labore eum veniam qui praesentium. Quo?\r\n    Cum vitae eos ullam commodi mollitia ea corporis temporibus sint repudiandae soluta beatae ratione ab, assumenda blanditiis rerum enim error at expedita, quos quasi excepturi recusandae fugit porro! Veniam, hic!\r\n    Ut, at. Reiciendis, sint dignissimos. Perspiciatis, ad voluptate. Atque facilis qui quod provident voluptatum distinctio nisi nihil! Laborum cupiditate totam sunt, minus, eaque sapiente modi nobis esse ea repellat ad?\r\n   ');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gyaktabla`
--

CREATE TABLE `gyaktabla` (
  `ID` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `gyaktabla`
--

INSERT INTO `gyaktabla` (`ID`, `name`, `password`, `email`) VALUES
(1, 'admin', 'admin', 'admin@gmail.com'),
(2, 'teszt user', 'user', 'user@gmail.com'),
(3, 'otheruser', '', 'email@email.com');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `datas`
--
ALTER TABLE `datas`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `user_ID` (`user_ID`);

--
-- A tábla indexei `gyaktabla`
--
ALTER TABLE `gyaktabla`
  ADD PRIMARY KEY (`ID`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `datas`
--
ALTER TABLE `datas`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `gyaktabla`
--
ALTER TABLE `gyaktabla`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `datas`
--
ALTER TABLE `datas`
  ADD CONSTRAINT `datas_ibfk_1` FOREIGN KEY (`user_ID`) REFERENCES `gyaktabla` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
