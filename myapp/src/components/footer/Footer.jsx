import React from 'react';
import { FaXTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Container, Logo, NavItems } from '../index';
import { CiMail, CiPhone } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-black w-full reounded-t-lg dark:border-t dark:border-gray-500/50">
      <Container className="mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-8">
          <Link to="/" className="text-2xl font-bold text-orange-500">
            <Logo  
              className="w-full h-auto"
            />
          </Link>

          <nav className="flex flex-wrap justify-center gap-8">
            {NavItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="text-white dark:text-gray-400 hover:text-orange-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            <Link to="https://x.com/__Abhi026063__" className="text-white dark:text-white hover:text-orange-500 transition-colors" target='_blank'>
              <FaXTwitter className="w-5 h-5" />
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100081435431304" className="text-white dark:text-white hover:text-orange-500 transition-colors" target='_blank'>
              <FaFacebook className="w-5 h-5" />
            </Link>
            <Link to="https://www.instagram.com/hello_abhi004/" className="text-white dark:text-white hover:text-orange-500 transition-colors" target='_blank'>
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link to="https://www.linkedin.com/in/abhishek-thakur-289969218/" className="text-white dark:text-white hover:text-orange-500 transition-colors" target='_blank'>
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link to="https://github.com/externalPointerVariable" className="text-white dark:text-white hover:text-orange-500 transition-colors" target='_blank'>
              <FaGithub className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center text-white dark:text-gray-400">
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

          <div className="text-white dark:text-gray-400 text-sm">
            Designed by externalPointerVariable © {new Date().getFullYear()}
          </div>
        </div>
      </Container>
    </footer>
  );
}