import IconWrapper from "../IconWrapper";
export default function BookMarkIcon({ isActive }) {
  const fill = isActive ? "white" : " #5A698F";

  return (
    <IconWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill={fill}
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="4 2 16 20"
      >
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
      </svg>
    </IconWrapper>
  );
}
