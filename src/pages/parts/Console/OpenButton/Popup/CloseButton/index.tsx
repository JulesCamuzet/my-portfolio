import React from 'react'

import CrossIcon from '../../../../../../components/icons/Cross'
import { colors } from '../../../../../../constants/colors'
import { Paddings } from '../../../../../../constants/paddings'

type PropsType = {
  handleClick: () => void
}

const CloseButton = ({ handleClick }: PropsType) => {
  return (
    <CrossIcon
      style={{
        width: '20px',
        height: '20px',
        borderRadius: '12px',
        position: 'absolute',
        top: 0,
        left: 0,
        transform: 'translate(-50%, -50%)',
        backgroundColor: colors.white[50],
        boxSizing: 'border-box',
        padding: Paddings.P2,
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      }}
      pointer
      onClick={handleClick}
    />
  )
}

export default CloseButton
