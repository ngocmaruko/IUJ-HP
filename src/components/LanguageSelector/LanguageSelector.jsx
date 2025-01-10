import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group'; // Import CSSTransition
import './LanguageSelector.css'; // Import the CSS file for styling

const LanguageSelector = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);

    // Toggle button visibility based on scroll position and whether user is at the bottom
    const toggleVisibility = () => {
        const scrolledFromTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Check if user is 300px below the top
        if (scrolledFromTop > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }

        // Check if user has scrolled near the bottom (within 50px of the bottom)
        if (scrolledFromTop + windowHeight >= documentHeight - 50) {
            setIsAtBottom(true);
        } else {
            setIsAtBottom(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState({
        name: '日本語',
        code: 'ja',
        flag: 'https://flagcdn.com/jp.svg', // Default flag
    });

    const toggleDropdown = (event) => {
        setIsOpen(!isOpen);
        event.stopPropagation(); // Prevent click event from bubbling up
    };

    const selectLanguage = (language) => {
        setSelectedLanguage(language); // Update selected language
        setIsOpen(false); // Close dropdown after selection

        // Redirect to the selected language's URL
        window.location.href = language.url; // Change this line for redirection
    };

    // Close the dropdown if clicked outside
    const handleClickOutside = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => window.removeEventListener('click', handleClickOutside);
    }, []);
    const languages = [
        { name: '日本語', code: 'ja', url: 'https://www.held.jp/IUJ/', flag: 'https://flagcdn.com/jp.svg' },
        { name: 'English', code: 'en', url: 'https://translate.google.com/translate?hl=en&sl=ja&tl=en&u=https://www.held.jp/IUJ/', flag: 'https://flagcdn.com/us.svg' },
        { name: 'Tiếng Việt', code: 'vi', url: 'https://translate.google.com/translate?hl=vi&sl=ja&tl=vi&u=https://www.held.jp/IUJ/', flag: 'https://flagcdn.com/vn.svg' },
        { name: '한국어', code: 'ko', url: 'https://translate.google.com/translate?hl=ko&sl=ja&tl=ko&u=https://www.held.jp/IUJ/', flag: 'https://flagcdn.com/kr.svg' },
        { name: '中文', code: 'zh-CN', url: 'https://translate.google.com/translate?hl=zh-CN&sl=ja&tl=zh-CN&u=https://www.held.jp/IUJ/', flag: 'https://flagcdn.com/cn.svg' },
    ];

    return (
        <div>
            {/* Use CSSTransition for the dropdown */}
            <CSSTransition
                in={isVisible && !isAtBottom}
                timeout={300} // Duration for the fade effect
                classNames="fade" // Class name for the fade effect
                unmountOnExit // Unmount the component when not visible
            >
                <div className="language-dropdown">
                    <button className="dropdown-button" onClick={toggleDropdown}>
                        <img src={selectedLanguage.flag} alt={`${selectedLanguage.name} Flag`} className="flag" />
                        <span>{selectedLanguage.name}</span>
                        <span className={`arrow ${isOpen ? 'dropdown-open' : ''}`}>
                            <img 
                                src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 285 285'><path d='M282 76.5l-14.2-14.3a9 9 0 0 0-13.1 0L142.5 174.4 30.3 62.2a9 9 0 0 0-13.2 0L3 76.5a9 9 0 0 0 0 13.1l133 133a9 9 0 0 0 13.1 0l133-133a9 9 0 0 0 0-13z' style='fill:%23666'/></svg>" 
                                alt="Arrow"
                            />
                        </span>
                    </button>
                    {isOpen && (
                        <div className="dropdown-content">
                            {languages.map(language => (
                                <button 
                                    key={language.code} 
                                    onClick={() => selectLanguage(language)} // Update selected language
                                    className="dropdown-item"
                                >
                                    <img src={language.flag} alt={`${language.name} Flag`} className="flag" />
                                    {language.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </CSSTransition>
        </div>
    );
};

export default LanguageSelector;
