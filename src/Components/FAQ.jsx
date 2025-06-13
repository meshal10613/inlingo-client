import React from 'react';
import { Link } from 'react-router';

const FAQ = () => {
    return (
        <div className='my-20'>
            <h2 className='text-center font-bold text-4xl mb-10'>Frequently asked questions</h2>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300 space-y-5">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold">How does Inlingo work?</div>
                <div className="collapse-content">Inlingo helps you achieve your language learning ambitions. Find your ideal teacher and book a 1-on-1 lesson. There's no subscription or rigid schedule. Learn when you want, as much as you want. If you'd prefer to learn without a teacher, you can use italki's handy learning tools. Improve your vocabulary, train your ear with podcasts, and put your knowledge to the test with quizzes. The Inlingo Community is always sharing new content with language lovers.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Is Inlingo worth it for learning a language?</div>
                <div className="collapse-content">Yes! Inlingo offers the freedom and flexibility to learn with a teacher you like, at a price you can afford, with a schedule that works for you. You aren't locked into any hard commitments. Lessons are pay as you go, and teachers set their own prices. Browse a marketplace of teachers with different teaching styles and curriculums until you find the teacher that's right for you. Learning doesn't always have to take place in a classroom. Share posts with the Community and receive feedback from other language learners. Use italki's learning tool to discover new words with vocabulary sets, listen to podcasts from around the world, practice with prompts, and more!</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">How do I become a teacher on Inlingo?</div>
                <div className="collapse-content">Anyone is welcome to apply to be a teacher on Inlingo. You can apply by clicking <Link to="/addTutorials" className='link link-hover'>here</Link> <br /> There are two types of teachers on Inlingo, community tutors and professional teachers. Professional teachers have proven experience teaching and the qualifications required to help you learn a language efficiently. <br />
                Community tutors are passionate language-lovers who want to share their knowledge with others..
                </div>
            </div>
        </div>
    );
};

export default FAQ;