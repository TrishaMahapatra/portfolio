import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen/index'
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

function AdvImage({name, width, className}) {
    const cld = new Cloudinary({ cloud: { cloudName: 'dpirgur6l' } });

    const img = cld
        .image(name)
        .format('auto')
        .quality('auto')
        .resize(auto().width(width || 'auto'));

  return (
    <AdvancedImage cldImg={img} className={className || 'w-full h-full object-contain'} />
  )
}

export default AdvImage