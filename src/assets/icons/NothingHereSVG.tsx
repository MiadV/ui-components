import * as React from 'react'

const NothingHereSVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13 22.125V45.875C13 47.1867 14.0633 48.25 15.375 48.25H48.625C49.9367 48.25 51 47.1867 51 45.875V24.8537C51 23.542 49.9367 22.4787 48.625 22.4787H24.5552C23.9364 22.4787 23.342 22.2372 22.8986 21.8056L21.4784 20.4231C21.035 19.9915 20.4406 19.75 19.8218 19.75H15.375C14.0633 19.75 13 20.8133 13 22.125Z"
        fill="#D4D4D4"
      />
      <path d="M47.9868 17.0095L45.9868 19.0095" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M47.9868 19.0095L45.9868 17.0095" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22.9868 32.0095L20.9868 34.0095" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22.9868 34.0095L20.9868 32.0095" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="35" cy="22" r="6.41667" fill="#F5F5F5" stroke="#737373" strokeWidth="1.16667" />
      <circle cx="32.0833" cy="21.4166" r="0.583333" fill="#404040" />
      <circle cx="37.9168" cy="21.4166" r="0.583333" fill="#404040" />
      <path
        d="M32.8986 22.701C32.6415 22.895 32.5903 23.2608 32.7844 23.518C32.9784 23.7751 33.3442 23.8263 33.6014 23.6322L32.8986 22.701ZM36.3986 23.6322C36.6558 23.8263 37.0216 23.7751 37.2156 23.518C37.4097 23.2608 37.3585 22.895 37.1014 22.701L36.3986 23.6322ZM33.6014 23.6322C34.0793 23.2716 35.2937 22.7984 36.3986 23.6322L37.1014 22.701C35.4063 21.4218 33.5874 22.1812 32.8986 22.701L33.6014 23.6322Z"
        fill="#404040"
      />
      <circle cx="54.5" cy="26.5" r="1.5" fill="#D4D4D4" />
      <circle cx="25.5" cy="47.5" r="1.5" fill="#A3A3A3" />
      <circle cx="8.5" cy="33.5" r="1.5" fill="#A3A3A3" />
    </svg>
  )
}

export default NothingHereSVG
