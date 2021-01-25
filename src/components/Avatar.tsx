import React from 'react'

type AvatarInputs = {
  color?: string,
  pic?: string,
  status?: string
}

function Avatar({
  color,
  pic,
  status,
}: AvatarInputs): React.ReactElement {

  const avatarClasses = `secondary ${status}`
  const bgImage = `url(' + (${pic} || '/assets/images/anonymous_user.png') + ')`
  return (
    <div className="avatar" style={{
      backgroundImage: bgImage
    }} >
      {(color || status) && (
        <div className={avatarClasses} style={{
          backgroundColor: color
        }}></div>
      )}
    </div>
  )
}

export default Avatar
