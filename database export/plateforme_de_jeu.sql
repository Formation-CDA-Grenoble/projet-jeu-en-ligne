-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  mar. 18 fév. 2020 à 09:35
-- Version du serveur :  10.2.6-MariaDB
-- Version de PHP :  7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `plateforme_de_jeu`
--

-- --------------------------------------------------------

--
-- Structure de la table `block`
--

CREATE TABLE `block` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_blocked` int(10) UNSIGNED NOT NULL,
  `user_blocker` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `game`
--

CREATE TABLE `game` (
  `id` int(10) UNSIGNED NOT NULL,
  `player1` int(10) UNSIGNED NOT NULL,
  `player2` int(10) UNSIGNED DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `status` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

CREATE TABLE `message` (
  `id` int(10) UNSIGNED NOT NULL,
  `sender` int(10) UNSIGNED DEFAULT NULL,
  `text` text NOT NULL,
  `game` int(10) UNSIGNED NOT NULL,
  `created_at` date NOT NULL,
  `recever` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `move`
--

CREATE TABLE `move` (
  `id` int(10) UNSIGNED NOT NULL,
  `ordered` int(11) NOT NULL,
  `user` int(10) UNSIGNED DEFAULT NULL,
  `position` int(11) NOT NULL,
  `game` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` int(10) UNSIGNED NOT NULL,
  `score` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `block`
--
ALTER TABLE `block`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_blocked` (`user_blocked`),
  ADD KEY `fk_user_blocker` (`user_blocker`);

--
-- Index pour la table `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_player1` (`player1`),
  ADD KEY `fk_player2` (`player2`);

--
-- Index pour la table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_sender` (`sender`),
  ADD KEY `fk_recever` (`recever`);

--
-- Index pour la table `move`
--
ALTER TABLE `move`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user` (`user`),
  ADD KEY `fk_game` (`game`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `block`
--
ALTER TABLE `block`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `move`
--
ALTER TABLE `move`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `block`
--
ALTER TABLE `block`
  ADD CONSTRAINT `fk_user_blocked` FOREIGN KEY (`user_blocked`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_user_blocker` FOREIGN KEY (`user_blocker`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `game`
--
ALTER TABLE `game`
  ADD CONSTRAINT `fk_player1` FOREIGN KEY (`player1`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_player2` FOREIGN KEY (`player2`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE SET NULL;

--
-- Contraintes pour la table `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `fk_recever` FOREIGN KEY (`recever`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `fk_sender` FOREIGN KEY (`sender`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE SET NULL;

--
-- Contraintes pour la table `move`
--
ALTER TABLE `move`
  ADD CONSTRAINT `fk_game` FOREIGN KEY (`game`) REFERENCES `game` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`user`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
