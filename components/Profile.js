import Image from 'next/image'

export default function Profile(picname) {
    return (
        <Image 
           src="/images/profile.jpg" 
           height={144}
           width={200}
           alt="Jingnu's profile picture"
        />
    )
}