function DownTriangleIcon() {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.707 14.536a1 1 0 0 1-1.414 0l-2.83-2.829A1 1 0 0 1 9.173 10h5.656a1 1 0 0 1 .708 1.707l-2.83 2.829Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default DownTriangleIcon;
