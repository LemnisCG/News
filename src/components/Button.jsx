export default function Button({ onClick, value, children }) {
    const className = `btn ${value}`

    return (
        <button className={className}  onClick={onClick}  >
            {children}
        </button>
    )
}