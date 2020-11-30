import classNames from 'classnames'
import React, { FunctionComponent } from 'react'

export interface MyImageProps {
  src: string
  classname?: string
}

export const MyImage: FunctionComponent<MyImageProps> = ({ src, classname }) => {
  return (
    <figure className={classNames('image', classname)}>
      <img src={src} />
    </figure>
  )
}
