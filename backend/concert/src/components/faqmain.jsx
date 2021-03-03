import React, { useState } from 'react';
import FAQ from './../components/FAQ';
import TaskBar from './../components/taskbar';

function FAQMain () {
  // <TaskBar/>
  const [faqs, setfaqs] = useState([
    {
      question: 'How can I create a tutoring session?',
      answer: 'First go to the student page, then click on create tutoring schedule, from here input the necessary information and submit.',
      open: true
    },
    {
      question: 'How can I create my groups?',
      answer: 'Go to the student page, click on create groups, input required information and submit',
      open: true
    },
    {
      question: 'How do I delete my groups?',
      answer: 'Go to student page, right click on the group, delete',
      open: true
    },
    {
        question: 'Where can I find my meetings?',
        answer: 'On the dashboard, at the right side bar, there will be a meetings section ',
        open: true
      },
      {
        question: 'Where can I find my upcoming events?',
        answer: 'Integrated at the bottom right of the student homepage, there is a calendar with all of the upcoming events a student may have.',
        open: true
      }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq; 
    }))
  }


  return (
    <div className="FAQMain">
        
      <div className="faqs">
      
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
        
      </div>
    </div>
  );
}

export default FAQMain;