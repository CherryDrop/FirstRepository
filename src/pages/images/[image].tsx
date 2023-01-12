import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
// import { Container } from './styles';

function Images() {

    const image = useRouter().query.image as string;

    return (
        <div>
            <Image src={`/uploads/${"1673509772665-profile-pic.png"}`} alt="image" width={500} height={500} />
        </div>
    );
}

export default Images;