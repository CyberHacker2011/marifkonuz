import Link from 'next/link';
import React from 'react';
import Image from 'next/legacy/image';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
type CardProps = {
  image: string;
  name: string;
  job: string;
  describtion?: string;
  linkedin?: string;
  telegram?: string;
  youtube?: string;
  twitter?: string;
};

const Card: React.FC<CardProps> = ({
  image = '/education.jpg',
  name = 'Name',
  job = 'Job',
  describtion = 'Good boy with good experience on programming and owner of marifkonuz because of his good leadership skills.',
  linkedin = 'https://linkedin.com',
  telegram = 'https://t.me',
  youtube = 'https://youtube.com',
  twitter = 'x.com',
}: CardProps) => {
  return (
    <div className="max-w-sm shadow-lg rounded-lg overflow-hidden bg-white">
      {/* Image Section */}
      <div className="relative w-full h-80">
        <Image
          src={image}
          alt="Picture for thumbnail"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col gap-3">
        {/* Name and Job */}
        <div className="text-center">
          <p className="text-xl font-bold">{name}</p>
          <p className="text-sm text-gray-500">{job}</p>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm text-center line-clamp-3">{describtion}</p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mt-3">
          {twitter && (
            <Link href={twitter} className="opacity-80 hover:opacity-60">
              <FaXTwitter />
            </Link>
          )}
          {telegram && (
            <Link href={telegram} className="opacity-80 hover:opacity-60">
              <FaTelegram />
            </Link>
          )}
          {linkedin && (
            <Link href={linkedin} className="opacity-80 hover:opacity-60">
              <FaLinkedin />
            </Link>
          )}
          {youtube && (
            <Link href={youtube} className="opacity-80 hover:opacity-60">
              <FaYoutube />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
