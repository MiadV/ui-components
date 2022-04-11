import * as React from 'react'

const SeemsEmptySVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M19.0846 26.5891L14.5791 34.4737V39.079H51.4212V34.4737L46.9157 26.5891C46.4472 25.7692 45.5752 25.2632 44.6309 25.2632H21.3694C20.4251 25.2632 19.5531 25.7692 19.0846 26.5891Z"
        fill="#F5F5F5"
      />
      <path d="M49.9868 27.0095L47.9868 29.0095" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M49.9868 29.0095L47.9868 27.0095" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.9868 28.0095L11.9868 30.0095" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.9868 30.0095L11.9868 28.0095" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="33.0001" cy="29.2105" r="8.44298" fill="#F5F5F5" stroke="#737373" strokeWidth="1.53509" />
      <circle cx="29.1626" cy="28.4429" r="0.767544" fill="#404040" />
      <circle cx="36.8379" cy="28.4429" r="0.767544" fill="#404040" />
      <path
        d="M30.2354 30.1329C29.897 30.3882 29.8297 30.8695 30.0851 31.2079C30.3404 31.5462 30.8217 31.6136 31.1601 31.3582L30.2354 30.1329ZM34.8407 31.3582C35.179 31.6136 35.6603 31.5462 35.9157 31.2079C36.171 30.8695 36.1037 30.3882 35.7654 30.1329L34.8407 31.3582ZM31.1601 31.3582C31.7889 30.8837 33.3869 30.2611 34.8407 31.3582L35.7654 30.1329C33.5349 28.4497 31.1417 29.449 30.2354 30.1329L31.1601 31.3582Z"
        fill="#404040"
      />
      <circle cx="53.5" cy="31.5" r="1.5" fill="#D4D4D4" />
      <circle cx="42.5" cy="17.5" r="1.5" fill="#A3A3A3" />
      <circle cx="10.5" cy="38.5" r="1.5" fill="#A3A3A3" />
      <path
        d="M14.5791 34.4736H22.2013C22.3758 34.4736 22.5432 34.5429 22.6665 34.6663L24.4475 36.4473H41.5528L43.3338 34.6663C43.4572 34.5429 43.6245 34.4736 43.799 34.4736H51.4212V42.3684C51.4212 43.8217 50.243 44.9999 48.7896 44.9999H17.2107C15.7573 44.9999 14.5791 43.8217 14.5791 42.3684V34.4736Z"
        fill="#D4D4D4"
      />
      <circle cx="22.5" cy="45.5" r="1.5" fill="#A3A3A3" />
    </svg>
  )
}

export default SeemsEmptySVG
