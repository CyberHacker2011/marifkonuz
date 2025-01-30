import React from 'react';
import Card from '../(components)/card';

const ContactPage = () => {
  return (
    <div className="flex justify-center p-5 md:p-7">
      {/* Centered and responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-6xl">
        <Card
          image="/ibrohim.jpg"
          name="Ibrohim"
          job="Web developer || CEO || Founder"
          describtion="Good boy with good experience on programming and owner of marifkonuz because of his good leadership skills."
        />
        <Card
          image="/daler.jpg"
          name="Daler"
          job="Web designer || Second CEO"
          describtion="Good boy with good knowledges of business. And very excited and interested about new jobs."
        />
        <Card
          image="/saidmuhammad.jpg"
          name="Saidmuhammad"
          job="SMM || Product manager"
          describtion="Good boy with good knowledges in any subject. Interested subjects: Science, Math, Computer Science."
        />
        <Card
          image="/asadbek.jpg"
          name="Asadbek"
          job="Adminstration"
          describtion="Good boy with good knowledges in any subject. Interested subjects: Science, Math, Computer Science."
        />
        <Card
          image="/diyorbek.jpg"
          name="Diyorbek"
          job="Councillor"
          describtion="Good boy with good knowledges in any subject. Interested subjects: Science, Math, Computer Science."
        />
        <Card
          image="/akbarxo'ja.jpg"
          name="Akbarxo'ja"
          job="Great student || Worker"
          describtion="Good boy with good knowledges in any subject. Interested subjects: Science, Math, Computer Science."
        />
      </div>
    </div>
  );
};

export default ContactPage;
