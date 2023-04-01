import React from 'react'


export default function Avatar({avatar, size}) {
  const style= {
    width: size,
    height: size,
    borderRadius: '50%',
    objectFit: 'cover'
  }

  return (
    <img style={style} src={avatar} alt="avatar" />
  )
}
