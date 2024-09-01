interface CheckIconProps {
    size?: string;
}

export function CheckIcon({ size = '20px' }: CheckIconProps) {
    return (
        <svg
            fill="#000000"
            className="svg-icon"
            style={{ width: size, height: size }}
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier" fill="#000000">
                <path d="M351.605 663.268l481.761-481.761c28.677-28.677 75.171-28.677 103.847 0s28.677 75.171 0 103.847L455.452 767.115l.539.539-58.592 58.592c-24.994 24.994-65.516 24.994-90.51 0L85.507 604.864c-28.677-28.677-28.677-75.171 0-103.847s75.171-28.677 103.847 0l162.25 162.25z"></path>
            </g>
        </svg>
    );
}
