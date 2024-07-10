import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import leetcodeIcon from '../assets/socials/leetcode.png';

const SocialMedia: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 mb-4 ml-8 flex flex-col items-center">
      <ul className="space-y-6 mt-4">
        <li>
          <a
            href="https://www.linkedin.com/in/sarika-ghimire/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-200 cursor-pointer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Sareeka61"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-200 cursor-pointer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
        </li>
        <li>
          <a
            href="https://leetcode.com/ghimiresarika61/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-200 cursor-pointer"
            aria-label="LeetCode"
          >
            <img src={leetcodeIcon} alt="LeetCode" className="h-7 w-7" />
          </a>
        </li>
        <li>
          <a
            href="https://x.com/Sarikaghimire61"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-200 cursor-pointer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} size="xl" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/_akirasss/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-200 cursor-pointer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </a>
        </li>
      </ul>
      <div className="h-[3.6cm] w-px bg-gray-300 mt-[10px] mb-[-12px]"></div>
    </div>
  );
};

export default SocialMedia;
