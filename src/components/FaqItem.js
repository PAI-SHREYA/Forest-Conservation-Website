// components/FAQ.js
import React, { useState } from 'react';
import './FAQ.css';

// Define FAQs related to forest department
const faqsData = [
    {
        id: 0,
        question: 'What is the importance of forests?',
        answer: 'Forests provide oxygen, regulate climate, preserve biodiversity, and offer natural resources and recreational opportunities.',
    },
    {
        id: 1,
        question: 'How can deforestation be prevented?',
        answer: 'Deforestation can be prevented through sustainable logging practices, reforestation, and protected areas.',
    },
    {
        id: 2,
        question: 'What are some common threats to forests?',
        answer: 'Common threats to forests include illegal logging, forest fires, invasive species, and climate change.',
    },
    {
        id: 3,
        question: 'How can individuals contribute to forest conservation?',
        answer: 'Individuals can contribute by reducing paper usage, supporting sustainable products, volunteering for tree planting, and raising awareness.',
    },
    {
        id: 4,
        question: 'What is agroforestry?',
        answer: 'Agroforestry is a land management approach that combines trees and shrubs with crops and/or livestock to enhance productivity and biodiversity.',
    },
    {
        id: 5,
        question: 'What is forest restoration?',
        answer: 'Forest restoration involves returning degraded forest land to a healthy, productive state through tree planting and other practices.',
    },
];

function FAQ() {
    // State to manage the visibility of answers
    const [openAnswers, setOpenAnswers] = useState({});

    // Function to toggle the visibility of an answer
    const toggleAnswer = (id) => {
        setOpenAnswers((prevOpenAnswers) => ({
            ...prevOpenAnswers,
            [id]: !prevOpenAnswers[id],
        }));
    };

    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <ul className="faq-list">
                {faqsData.map((faq) => (
                    <li key={faq.id} className={`faq-item ${openAnswers[faq.id] ? 'open' : ''}`}>
                        <div className="faq-question" onClick={() => toggleAnswer(faq.id)}>
                            <span>{faq.question}</span>
                            <span className="dropdown-arrow">{openAnswers[faq.id] ? '▲' : '▼'}</span>
                        </div>
                        {openAnswers[faq.id] && (
                            <p className="faq-answer">{faq.answer}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FAQ;
