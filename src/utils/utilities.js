export const updateObj = (oldState, updatedProperties) => {
    return { ...oldState, ...updatedProperties }
}

export const mainLanguage = language => {
    switch (language) {
        case 'JavaScript':
            return icons.js
        case 'HTML':
            return icons.html
        case 'CSS':
            return icons.css
        case 'SCSS':
            return icons.scss
        case 'PHP':
            return icons.php
        default:
            return icons.fork
    }
}

export const icons = {
    fork: (
        <svg width="1em" height="1em" viewBox="0 0 24 24">
            <path
                d="M5.559 8.855c.166 1.183.789 3.207 3.087 4.079C11 13.829 11 14.534 11 15v.163c-1.44.434-2.5 1.757-2.5 3.337c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337V15c0-.466 0-1.171 2.354-2.065c2.298-.872 2.921-2.896 3.087-4.079C19.912 8.441 21 7.102 21 5.5C21 3.57 19.43 2 17.5 2S14 3.57 14 5.5c0 1.552 1.022 2.855 2.424 3.313c-.146.735-.565 1.791-1.778 2.252c-1.192.452-2.053.953-2.646 1.536c-.593-.583-1.453-1.084-2.646-1.536c-1.213-.461-1.633-1.517-1.778-2.252C8.978 8.355 10 7.052 10 5.5C10 3.57 8.43 2 6.5 2S3 3.57 3 5.5c0 1.602 1.088 2.941 2.559 3.355zM17.5 4c.827 0 1.5.673 1.5 1.5S18.327 7 17.5 7S16 6.327 16 5.5S16.673 4 17.5 4zm-4 14.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5s1.5.673 1.5 1.5zM6.5 4C7.327 4 8 4.673 8 5.5S7.327 7 6.5 7S5 6.327 5 5.5S5.673 4 6.5 4z"
                fill="currentColor"
            ></path>
        </svg>
    ),
    js: (
        <svg width="1em" height="1em" viewBox="0 0 384 384">
            <path
                d="M0 0h384v384H0V0zm101 321q15 33 54 33q25 0 39.5-13.5T209 300V176h-36v123q0 23-19 23q-13 0-24-19zm127-4q19 37 66 37q27 0 43.5-13.5T354 304q0-22-11.5-34T306 247l-9-4q-12-5-17-9.5t-5-12.5q0-6 4.5-10.5T292 206q15 0 24 15l27-18q-16-29-51-29q-24 0-38.5 13.5T239 222t11 33t33 21l9 4q10 5 14.5 7t8 6.5T318 304q0 8-6.5 13t-17.5 5q-23 0-36-22z"
                fill="currentColor"
            ></path>
        </svg>
    ),
    css: (
        <svg width="1em" height="1em" viewBox="0 0 24 24">
            <path
                className="uim-primary"
                d="M9.883 21.095l9.098-3.02L22 3H4.958L4.31 6.364h13.657l-.425 2.148H3.864l-.669 3.363h13.658l-.75 3.85l-5.511 1.803l-4.762-1.802l.325-1.682H2.79L2 18.076l7.883 3.02"
                fill="currentColor"
            ></path>
        </svg>
    ),
    scss: (
        <svg width="1em" height="1em" viewBox="0 0 32 32">
            <path
                d="M16.171 18.7c-.481.221-1.008.509-2.063 1.088c-.4.225-.818.45-1.207.662c-.027-.027-.055-.061-.082-.089c-2.087-2.23-5.947-3.805-5.783-6.8c.061-1.091.436-3.955 7.413-7.433c5.742-2.83 10.311-2.046 11.1-.307c1.134 2.479-2.449 7.092-8.379 7.761a4.469 4.469 0 0 1-3.751-.948c-.314-.341-.361-.361-.477-.293c-.191.1-.068.409 0 .586a3.5 3.5 0 0 0 2.141 1.684a11.4 11.4 0 0 0 6.956-.689c3.594-1.391 6.4-5.258 5.578-8.5c-.825-3.287-6.281-4.371-11.443-2.537a26 26 0 0 0-8.79 5.047c-2.844 2.66-3.294 4.972-3.11 5.94c.662 3.437 5.4 5.674 7.3 7.331c-.1.055-.184.1-.259.143c-.948.471-4.562 2.36-5.463 4.358c-1.023 2.264.164 3.887.948 4.105a5.832 5.832 0 0 0 6.281-2.544a6.3 6.3 0 0 0 .559-5.8a5.03 5.03 0 0 1 .716-.477c.484-.286.945-.568 1.354-.786a10.475 10.475 0 0 1 4.475-.989c3.246.382 3.887 2.407 3.764 3.26a2.157 2.157 0 0 1-1.03 1.459c-.225.143-.3.191-.28.293c.027.15.136.143.327.116a2.535 2.535 0 0 0 1.766-2.257c.1-2-1.807-4.194-5.183-4.174a7.753 7.753 0 0 0-2.946.587q-.225.093-.437.2zm-4.825 7.839c-1.078 1.173-2.578 1.616-3.226 1.241c-.7-.4-.423-2.135.9-3.376a17.18 17.18 0 0 1 2.53-1.889c.157-.1.389-.232.668-.4l.075-.041l.164-.1a4.658 4.658 0 0 1-1.111 4.565z"
                fill="#cd6799"
            ></path>
        </svg>
    ),
    php: (
        <svg width="1.34em" height="1em" viewBox="0 0 1024 768">
            <path
                d="M512 768q-139 0-257-51.5t-186.5-140T0 384t68.5-192.5T255 51.5T512 0t257 51.5t186.5 140T1024 384t-68.5 192.5t-186.5 140T512 768zM288 256h-80q-7 0-11.5 4.5T192 272l-64 224q0 7 4.5 11.5T144 512h32q7 0 11.5-4.5T192 496l14-48h50q24 0 43-3t40-12t33-29.5t12-51.5q0-40-28-68t-68-28zm256 0h-14l14-48q0-7-4.5-11.5T528 192h-32q-7 0-11.5 4.5T480 208l-64 224q0 7 4.5 11.5T432 448h32q7 0 11.5-4.5T480 432l32-112q46 2 58 33l-26 79q0 7 4.5 11.5T560 448h32q7 0 11.5-4.5T608 432l32-96q0-6-5-11q-8-30-33.5-49.5T544 256zm256 0h-80q-7 0-11.5 4.5T704 272l-64 224q0 7 4.5 11.5T656 512h32q7 0 11.5-4.5T704 496l14-48h50q24 0 43-3t40-12t33-29.5t12-51.5q0-40-28-68t-68-28zm0 128h-64l18-64h46q13 0 22.5 9.5T832 352t-9.5 22.5T800 384zm-512 0h-64l18-64h46q13 0 22.5 9.5T320 352t-9.5 22.5T288 384z"
                fill="currentColor"
            ></path>
        </svg>
    ),
    html: (
        <svg width="1em" height="1em" viewBox="0 0 24 24">
            <path
                d="M3.183 2l1.604 18l7.202 2l7.222-2.002L20.818 2zm14.142 5.887H8.877l.202 2.261h8.045l-.606 6.778L12 18.178l-.01.004l-4.522-1.256l-.31-3.466h2.216l.157 1.76l2.46.664h.001l2.463-.665l.256-2.863H7.06L6.464 5.68h11.059z"
                fill="currentColor"
            ></path>
        </svg>
    ),
}