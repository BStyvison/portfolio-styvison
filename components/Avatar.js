// next img
import Image from 'next/image'

const Avatar = () => {
  return (
    <div className="hidden lg:flex lg:max-w-none">
      <Image
        src={'/styvison.png'}
        width={737}
        height={678}
        alt="avatar"
        className="translate-z-0 w-full h-full"
      />
    </div>
  )
}

export default Avatar
