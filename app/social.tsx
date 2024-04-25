interface SocialProps {
  children: React.ReactNode;
}

export default function Social({children}: SocialProps) {
  return (
    <div className='relative inline-block'>
      <img src='/cloud.svg' alt='' />
      <div className='absolute inset-0 flex items-center justify-center'>
        {children}
      </div>
    </div>
  );
}
