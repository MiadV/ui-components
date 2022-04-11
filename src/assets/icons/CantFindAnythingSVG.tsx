import * as React from 'react'

const CantFindAnythingSVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="5" y="28" width="55" height="16" rx="4" fill="#D4D4D4" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 44H56C58.2091 44 60 42.2091 60 40V32C60 29.7909 58.2091 28 56 28H44V44Z"
        fill="#F5F5F5"
      />
      <path d="M41.9868 18.0095L39.9868 20.0095" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M41.9868 20.0095L39.9868 18.0095" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.9868 38.0095L13.9868 40.0095" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.9868 40.0095L13.9868 38.0095" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="27" cy="28" r="11" fill="#F5F5F5" stroke="#737373" strokeWidth="2" />
      <line
        x1="34.4056"
        y1="37.1562"
        x2="41.1562"
        y2="45.5944"
        stroke="#737373"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="22" cy="27" r="1" fill="#404040" />
      <circle cx="32" cy="27" r="1" fill="#404040" />
      <path
        d="M23.3976 29.2018C22.9568 29.5344 22.8691 30.1615 23.2018 30.6024C23.5344 31.0432 24.1615 31.1309 24.6024 30.7982L23.3976 29.2018ZM29.3976 30.7982C29.8385 31.1309 30.4656 31.0432 30.7982 30.6024C31.1309 30.1615 31.0432 29.5344 30.6024 29.2018L29.3976 30.7982ZM24.6024 30.7982C25.4216 30.18 27.5035 29.3689 29.3976 30.7982L30.6024 29.2018C27.6965 27.0089 24.5784 28.3107 23.3976 29.2018L24.6024 30.7982Z"
        fill="#404040"
      />
      <path
        d="M51.625 38.25C53.0747 38.25 54.25 37.0747 54.25 35.625C54.25 34.1753 53.0747 33 51.625 33C50.1753 33 49 34.1753 49 35.625C49 37.0747 50.1753 38.25 51.625 38.25Z"
        stroke="#737373"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M53.4814 37.4812L55.0002 39"
        stroke="#737373"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="46.5" cy="22.5" r="1.5" fill="#D4D4D4" />
      <circle cx="10.5" cy="27.5" r="1.5" fill="#A3A3A3" />
      <circle cx="5.5" cy="35.5" r="1.5" fill="#A3A3A3" />
    </svg>
  )
}

export default CantFindAnythingSVG
