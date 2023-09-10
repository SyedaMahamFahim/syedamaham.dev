// ExternalLinkRenderer.js
import React from 'react'
import { LaunchIcon } from '@sanity/icons'

const ExternalLinkRenderer = props => (
  <span>
    {props.renderDefault(props)}
    <a contentEditable={false} href={props.value.href}>
      <LaunchIcon />
    </a>
  </span>
)

export default ExternalLinkRenderer