"use client"

import React from "react"

export default function Icon({ name, className, role, ...attrs }) {
  // Render the web component declaratively. This avoids imperative
  // DOM appends that can run multiple times (Strict Mode / client nav)
  // and cause duplicate icons.
  return (
    <ion-icon name={name} role={role} class={className} {...attrs}></ion-icon>
  )
}
