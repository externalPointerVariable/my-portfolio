import React from 'react';
import { FaXTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Container, Logo, NavItem } from '../index';
import { CiMail, CiPhone } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="bg-blue-950 dark:bg-black w-full reounded-t-lg dark:border-t-gray-500">
      <Container className="mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-8">
          <Link to="/" className="text-2xl font-bold text-orange-500">
            <Logo  
              className="w-full h-auto"
            />
          </Link>

          <nav className="flex flex-wrap justify-center gap-8">
            {NavItem.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            <Link to="#" className="text-gray-600 dark:text-white hover:text-orange-500 transition-colors">
              <FaXTwitter className="w-5 h-5" />
            </Link>
            <Link to="#" className="text-gray-600 dark:text-white hover:text-orange-500 transition-colors">
              <FaFacebook className="w-5 h-5" />
            </Link>
            <Link to="#" className="text-gray-600 dark:text-white hover:text-orange-500 transition-colors">
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link to="#" className="text-gray-600 dark:text-white hover:text-orange-500 transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link to="#" className="text-gray-600 dark:text-white hover:text-orange-500 transition-colors">
              <FaGithub className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <CiMail className="w-4 h-4" />
              <span>abhishekthakur004@outlook.com</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              <CiPhone className="w-4 h-4" />
              <span>+91 8447 093 776</span>
            </div>
          </div>

          <div className="text-gray-500 dark:text-gray-400 text-sm">
            Designed by externalPointerVariable © {new Date().getFullYear()}
          </div>
        </div>
      </Container>
    </footer>
  );
}