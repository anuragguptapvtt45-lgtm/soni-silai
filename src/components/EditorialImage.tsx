import {useState} from 'react';
import {motion} from 'motion/react';
import {Scissors} from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  title,
  className = '',
  imgClassName = '',
  priority = false,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-[#EAE0D5] text-[#756159] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Scissors className="w-6 h-6 text-[#9E6E64] mb-2" strokeWidth={1.25} />
        <span className="font-serif italic text-sm text-[#4A332C]">
          {title || 'SONI SILAI Atelier'}
        </span>
      </div>
    );
  }

  return (
    <motion.div
      initial={priority ? false : {opacity: 0, y: 14}}
      whileInView={priority ? undefined : {opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.12}}
      transition={{duration: 0.55, ease: [0.16, 1, 0.3, 1]}}
      className={`relative overflow-hidden bg-[#EAE0D5] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover object-top transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${imgClassName}`}
      />
    </motion.div>
  );
}
